import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CartItems from '../components/CartItems';

import '@testing-library/jest-dom';

const cart = [
  { id: 0, title: 'foo', price: 1 },
  { id: 1, title: 'bar', price: 5 },
  { id: 2, title: 'baz', price: 10 },
];

describe('CartItems component', () => {
  it('populates with cart items', () => {
    render(
      <BrowserRouter>
        <CartItems cart={cart} />
      </BrowserRouter>,
    );
    expect(screen.getAllByTestId('cart-item').length).toBe(3);
  });
});
