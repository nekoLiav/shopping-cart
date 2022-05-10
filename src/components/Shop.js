import { useState, useEffect } from 'react';
import ShopItems from './ShopItems';
import ShoppingCart from './ShoppingCart';
import shopData from '../data/shopData';

const Shop = () => {
  const [shopItems, setShopItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setShopItems(shopData.map((item) => Object.assign(item, { quantity: 1 })));
  }, []);

  const handleQuantityChange = (item, e) => {
    setShopItems((items) =>
      items.map((items) =>
        items.name === item.name ? { ...items, quantity: Number(e.target.value) } : items,
      ),
    );
  };

  const addToCart = (item) => {
    cart.map((items) => items.name).includes(item.name)
      ? setCart((items) =>
          items.map((items) =>
            items.name === item.name
              ? {
                  ...items,
                  data: { price: item.data.price * (items.quantity + item.quantity) },
                  quantity: items.quantity + item.quantity,
                }
              : items,
          ),
        )
      : setCart((items) => [...items, item]);
  };

  return (
    <div className='shop'>
      <div className='shop-content'>
        <h1 className='shop-header'>Shop</h1>
        <ShopItems
          shopItems={shopItems}
          changeQuantity={handleQuantityChange}
          addToCart={addToCart}
        />
      </div>
      <ShoppingCart cart={cart} />
      <div className='cart-summary'></div>
    </div>
  );
};

export default Shop;
