import { useState, useEffect } from 'react';
import CartSummary from './CartSummary';
import ShopItems from './ShopItems';
import ShoppingCart from './ShoppingCart';

const Shop = () => {
  const [shopItems, setShopItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartView, setCartView] = useState(false);

  useEffect(() => {
    const fakeStoreAPIFetch = async () => {
      const fetchedData = await fetch('https://fakestoreapi.com/products/');
      const response = await fetchedData.json();
      setShopItems(response.map((items) => ({ ...items, quantity: 1 })));
    };
    fakeStoreAPIFetch();
  }, []);

  const changeQuantity = (item, e) => {
    setShopItems((items) =>
      items.map((items) => {
        if (items.title === item.title) {
          return { ...items, quantity: Number(e.target.value) };
        } else {
          return items;
        }
      }),
    );
  };

  const addToCart = (item) => {
    if (cart.map((items) => items.title).includes(item.title)) {
      setCart((items) =>
        items.map((items) => {
          if (items.title === item.title) {
            return {
              ...items,
              price: item.price * (items.quantity + item.quantity),
              quantity: items.quantity + item.quantity,
            };
          } else {
            return items;
          }
        }),
      );
    } else {
      setCart((items) => [...items, { ...item, price: item.price * item.quantity }]);
    }
  };

  return (
    <div className='shop'>
      <div className='shop-content'>
        <p className='page-header-text'>Shop</p>
        <ShopItems shopItems={shopItems} changeQuantity={changeQuantity} addToCart={addToCart} />
      </div>
      <ShoppingCart cart={cart} cartView={cartView} />
      <CartSummary cart={cart} toggleView={() => setCartView(cartView ? false : true)} />
    </div>
  );
};

export default Shop;
