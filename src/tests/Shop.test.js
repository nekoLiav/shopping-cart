import { render, screen } from '@testing-library/react';
import Shop from '../components/Shop';

describe('Shop component', () => {
  it('matches snapshot', () => {
    const { container } = render(<Shop />);
    expect(container).toMatchSnapshot();
  });
  it('renders correct heading', () => {
    const { getByRole } = render(<Shop />);
    expect(getByRole('heading', { name: 'Shop' }));
  });
});
