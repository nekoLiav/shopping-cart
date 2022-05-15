import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';

import '@testing-library/jest-dom';

describe('Home component', () => {
  it('renders Go To Shop link', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(screen.getByRole('link', { name: /go to shop/i })).toBeInTheDocument();
  });
});
