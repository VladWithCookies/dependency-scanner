import { render, screen, waitFor } from '@testing-library/vue';

import Report from '../Report.vue';

describe('Report', () => {
  it('matches snapshot', async () => {
    const { container } = render(Report, {
      global: {
        mocks: {
          $route: {
            params: {
              ciUploadId: '1',
            },
          },
        },
      },
    });


    await waitFor(() => {
      expect(screen.getByText('0 Vulnerabilities Found')).toBeInTheDocument();
    });

    expect(container).toMatchSnapshot();
  });

  it('renders progress indicator', () => {
    render(Report);

    expect(screen.getByText('Generating report...')).toBeInTheDocument();
  });
});
