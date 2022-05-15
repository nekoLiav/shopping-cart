import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Shop from '../components/Shop';

describe('Shop component', () => {
  it('displays shopping cart when cart summary is clicked', async () => {
    render(
      <BrowserRouter>
        <Shop />
      </BrowserRouter>,
    );
    const user = userEvent.setup();
    await user.click(screen.getByText('View Cart', { exact: false }));
    expect(screen.getByRole('heading', { name: 'Cart' }));
  });
});
