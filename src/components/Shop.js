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
      // assign a base quantity of 1 to all shop items
      setShopItems(response.map((shopItem) => ({ ...shopItem, quantity: 1 })));
    };
    fakeStoreAPIFetch();
  }, []);

  const changeQuantity = (shopItem, e) => {
    setShopItems((currentShopItems) =>
      currentShopItems.map((currentShopItem) => {
        if (currentShopItem.title === shopItem.title) {
          if (e.target.nodeName === 'INPUT') {
            return { ...currentShopItem, quantity: Number(e.target.value) };
          } else if (e.target.id === 'increment') {
            return { ...currentShopItem, quantity: currentShopItem.quantity + 1 };
          } else if (e.target.id === 'decrement') {
            return { ...currentShopItem, quantity: currentShopItem.quantity - 1 };
          }
        } else {
          return currentShopItem;
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
      <h1 className='page-header-text'>Shop</h1>
      <div className='shop-content'>
        <ShopItems shopItems={shopItems} changeQuantity={changeQuantity} addToCart={addToCart} />
        <ShoppingCart cart={cart} cartView={cartView} />
      </div>
      <CartSummary cart={cart} toggleView={() => setCartView(cartView ? false : true)} />
    </div>
  );
};

export default Shop;
