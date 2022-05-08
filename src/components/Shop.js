import { useState } from 'react';

const Shop = () => {
  const [shopItem, setShopItem] = useState(0);

  return (
    <div className='shop'>
      <div className='shop-content'>
        <h1>Shop</h1>
        <button onClick={() => setShopItem(shopItem + 1)}>Click me!</button>
      </div>
      <div className='shopping-cart'>
        <h3 className='cart-summary'>
          {`Quantity:
        ${shopItem}`}
        </h3>
      </div>
    </div>
  );
};

export default Shop;
