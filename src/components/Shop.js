import { useState, useEffect } from 'react';
import ShoppingCart from './ShoppingCart';

const Shop = () => {
  const [shopItems, setShopItems] = useState([]);

  useEffect(() => {
    setShopItems([
      {
        name: 'one',
        price: 1,
      },
      {
        name: 'two',
        price: 2,
      },
      {
        name: 'three',
        price: 3,
      },
    ]);
  }, []);

  return (
    <div className='shop'>
      <div className='shop-content'>
        <h1>Shop</h1>
        <div className='shop-items'>
          {shopItems.map((item) => (
            <div className='shop-item' key={`${item.name}${item.price}`}>
              <h2>{item.name}</h2>
              <h3>{item.price}</h3>
            </div>
          ))}
        </div>
      </div>
      <ShoppingCart />
    </div>
  );
};

export default Shop;
