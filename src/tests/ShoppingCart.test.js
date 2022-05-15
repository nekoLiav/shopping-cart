import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ShoppingCart from '../components/ShoppingCart';

import '@testing-library/jest-dom';

describe('ShoppingCart component', () => {
  it('renders when cartView prop is true', () => {
    render(
      <BrowserRouter>
        <ShoppingCart cart={[]} cartView={true} />
      </BrowserRouter>,
    );
    expect(screen.getByRole('heading', { name: 'Cart' })).toBeInTheDocument();
  });
});
