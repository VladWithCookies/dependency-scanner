import { render, screen } from '@testing-library/vue';

import MainLayout from '../MainLayout.vue';

describe('MainLayout', () => {
  it('renders default slot content', () => {
    render(MainLayout, {
      slots: {
        default: 'Content',
      },
    });

    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
