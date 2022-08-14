import { render, screen, waitFor } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import { server } from '@/utils/tests/requestInterceptor';
import { uploadDependencyFileErrorResponse } from '@/utils/tests/requestHandlers';
import Home from '../Home.vue';

describe('Home', () => {
  const file = new File([''], 'package-lock.json', { type: 'text/plain' });

  it('matches snapshot', () => {
    const { container } = render(Home);

    expect(container).toMatchSnapshot();
  });

  describe('without uploaded files', () => {
    it('disables Generate Report button', () => {
      render(Home);

      expect(screen.getByRole('button')).toBeDisabled();
    });
  });

  describe('when user starts file uploading', () => {
    it('disables Generate Report button', async () => {
      const { container } = render(Home);

      userEvent.upload(container.querySelector('input[name="file"]'), file);
      userEvent.click(screen.getByRole('button'));

      await waitFor(() => {
        expect(screen.getByRole('button')).toBeDisabled();
      });

      await waitFor(() => {
        expect(screen.getByRole('button')).toHaveTextContent('Uploading...');
      });
    });
  });

  describe('when files upload is successful', () => {
    it('calls push() with correct params', async () => {
      const push = vi.fn();

      const { container } = render(Home, {
        global: {
          mocks: {
            $router: {
              push,
            },
          },
        },
      });

      userEvent.upload(container.querySelector('input[name="file"]'), file);
      userEvent.click(screen.getByRole('button'));

      await waitFor(() => {
        expect(push).toBeCalledTimes(1);
      });

      await waitFor(() => {
        expect(push).toBeCalledWith('/reports/1');
      });
    });
  });

  describe('when files upload is failure', () => {
    it('renders error', async () => {
      server.use(uploadDependencyFileErrorResponse);

      const { container } = render(Home);

      userEvent.upload(container.querySelector('input[name="file"]'), file);
      userEvent.click(screen.getByRole('button'));

      await waitFor(() => {
        expect(screen.getByText('JWT Token not found')).toBeInTheDocument();
      });
    });
  });
});
