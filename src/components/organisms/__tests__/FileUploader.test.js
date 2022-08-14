import { render, screen, waitFor } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import FileUploader from '../FileUploader.vue';

describe('FileUploader', () => {
  const filename = 'package-lock.json';
  const file = new File([''], filename, { type: 'text/plain' });

  describe('when user uploads a file', () => {
    it('shows uploaded file in the files list', async () => {
      const { container } = render(FileUploader);

      userEvent.upload(container.querySelector('input[name="file"]'), file);

      await waitFor(() => {
        expect(screen.getByText(filename)).toBeInTheDocument();
      });
    });
  });
});
