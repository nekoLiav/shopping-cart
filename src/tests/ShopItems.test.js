import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import ShopItems from '../components/ShopItems';

import { within } from '@testing-library/react';

const shopItems = [
  { id: 0, title: 'foo', price: 1 },
  { id: 1, title: 'bar', price: 5 },
  { id: 2, title: 'baz', price: 10 },
];

describe('ShopItems component', () => {
  describe('shop item', () => {
    it('changeQuantity is called when input is typed into', async () => {
      const inputQuantityMock = jest.fn();
      render(
        <BrowserRouter>
          <ShopItems shopItems={shopItems} changeQuantity={inputQuantityMock} />
        </BrowserRouter>,
      );
      const user = userEvent.setup();
      const shopItemInput = within(screen.getAllByTestId('shop-item')[0]).getByRole('textbox');
      await user.type(shopItemInput, '10');
      expect(inputQuantityMock).toHaveBeenCalledTimes(2);
    });

    it('changeQuantity is called when button is clicked', async () => {
      const incrementQuantityMock = jest.fn();
      render(
        <BrowserRouter>
          <ShopItems shopItems={shopItems} changeQuantity={incrementQuantityMock} />
        </BrowserRouter>,
      );
      const user = userEvent.setup();
      await user.click(screen.getAllByText('+')[0]);
      expect(incrementQuantityMock).toHaveBeenCalled();
    });

    it('changeQuantity is called when button is clicked', async () => {
      const decrementQuantityMock = jest.fn();
      render(
        <BrowserRouter>
          <ShopItems shopItems={shopItems} changeQuantity={decrementQuantityMock} />
        </BrowserRouter>,
      );
      const user = userEvent.setup();
      await user.click(screen.getAllByText('-')[0]);
      expect(decrementQuantityMock).toHaveBeenCalled();
    });

    it('addToCart is called when button is clicked', async () => {
      const addToCartMock = jest.fn();
      render(
        <BrowserRouter>
          <ShopItems shopItems={shopItems} addToCart={addToCartMock} />
        </BrowserRouter>,
      );
      const user = userEvent.setup();
      await user.click(screen.getAllByText('Add To Cart')[0]);
      expect(addToCartMock).toHaveBeenCalled();
    });
  });

  it('populates with shop items', () => {
    render(
      <BrowserRouter>
        <ShopItems shopItems={shopItems} />
      </BrowserRouter>,
    );
    expect(screen.getAllByTestId('shop-item').length).toBe(3);
  });
});
