import { render, screen } from '@testing-library/react';
import { Route, Routes, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Checkout from '../components/Checkout';

import '@testing-library/jest-dom';

const cart = [
  { id: 0, title: 'foo', price: 1 },
  { id: 1, title: 'bar', price: 5 },
  { id: 2, title: 'baz', price: 10 },
];

describe('Checkout component', () => {
  it('renders correctly', () => {
    const history = createMemoryHistory();
    const state = { cart: cart };
    history.push('/checkout', state);
    render(
      <Router location={history.location} navigator={history}>
        <Routes>
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </Router>,
    );
    expect(screen.getByRole('heading', { name: 'Checkout' })).toBeInTheDocument();
  });
});
