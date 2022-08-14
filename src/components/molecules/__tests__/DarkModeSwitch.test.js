import { render, waitFor } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import DarkModeSwitch from '../DarkModeSwitch.vue';

describe('DarkModeSwitch', () => {
  const add = vi.fn();
  const toggle = vi.fn();

  vi.spyOn(document, 'getElementsByTagName').mockReturnValue([
    {
      classList: {
        add,
        toggle,
      },
    },
  ]);

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('when user turns on dark mode', () => {
    it('adds correct class to the html element', async () => {
      const { container } = render(DarkModeSwitch);

      userEvent.click(container.querySelector('input[type="checkbox"]'));

      await waitFor(() => {
        expect(toggle).toBeCalledTimes(1);
      });

      await waitFor(() => {
        expect(toggle).toBeCalledWith('dark');

      });
    });
  });

  describe('when user turns off dark mode', () => {
    it('removes correct class from the html element', async () => {
      const { container } = render(DarkModeSwitch);

      userEvent.click(container.querySelector('input[type="checkbox"]'));

      await waitFor(() => {
        expect(toggle).toBeCalledTimes(1);
      });

      await waitFor(() => {
        expect(toggle).toBeCalledWith('dark');
      });
    });
  });

  describe('when user has theme settings in the local storage', () => {
    it('adds correct class to the html element', async () => {
      vi.spyOn(Storage.prototype, 'getItem').mockReturnValueOnce('dark');

      render(DarkModeSwitch);

      await waitFor(() => {
        expect(add).toBeCalledTimes(1);
      });

      await waitFor(() => {
        expect(add).toBeCalledWith('dark');
      });
    });
  });
});
