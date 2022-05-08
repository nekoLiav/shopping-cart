import { useState, useEffect } from 'react';
import ShoppingCart from './ShoppingCart';
import shopData from '../data/shopData';

const Shop = () => {
  const [shopItems, setShopItems] = useState([]);
  const [cartView, setCartView] = useState(false);

  useEffect(() => {
    setShopItems(shopData);
  }, []);

  return (
    <div className='shop'>
      <div className='shop-content'>
        <h1>Shop</h1>
        <h3 className='cart-summary'>
          <p>Price in Quantity items</p>
          <button onClick={() => setCartView(cartView ? false : true)}>View Cart</button>
        </h3>
        <div className='shop-items'>
          {shopItems.map((item) => (
            <div className='shop-item' key={`${item.name}${item.price}`}>
              <h2>{item.name}</h2>
              <h3>{item.price}</h3>
            </div>
          ))}
        </div>
      </div>
      {cartView && <ShoppingCart />}
    </div>
  );
};

export default Shop;
