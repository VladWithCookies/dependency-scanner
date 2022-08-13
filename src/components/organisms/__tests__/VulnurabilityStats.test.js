import { render, screen } from '@testing-library/vue';

import VulnerabilityStats from '../VulnerabilityStats.vue';

describe('VulnerabilityStats', () => {
  describe('when count is 0', () => {
    it('renders correct text', () => {
      render(VulnerabilityStats, { props: { count: 0 } });

      expect(screen.getByText('0 Vulnerabilities Found')).toBeInTheDocument();
    });

    it('renders correct icon', () => {
      const { container } = render(VulnerabilityStats, { props: { count: 0 } });

      expect(container.querySelector('.icon-success')).toBeInTheDocument();
    });
  });

  describe('when count is more then 0', () => {
    it('renders correct text', () => {
      render(VulnerabilityStats, { props: { count: 1 } });

      expect(screen.getByText('1 Vulnerabilities Found')).toBeInTheDocument();
    });

    it('renders correct icon', () => {
      const { container } = render(VulnerabilityStats, { props: { count: 1 } });

      expect(container.querySelector('.icon-error')).toBeInTheDocument();
    });
  });
});
