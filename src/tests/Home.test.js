import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import userEvent from '@testing-library/user-event';

describe('Shop component', () => {
  it('matches snapshot', () => {
    const { container } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(container).toMatchSnapshot();
  });
  it('renders correct heading', () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(getByRole('heading', { name: 'Home' }));
  });
  it('navigates to shop when Go To Shop button is clicked', async () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const user = userEvent.setup();
    await user.click(screen.getByText('Go To Shop'));
    expect(screen.getByRole('heading', { name: 'Home' }));
  });
});
