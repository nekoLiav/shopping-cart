import { useState, useEffect } from 'react';
import ShopItems from './ShopItems';
import ShoppingCart from './ShoppingCart';

const Shop = () => {
  const [shopItems, setShopItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartView, setCartView] = useState(false);

  useEffect(() => {
    // setShopItems(shopData.map((item) => Object.assign(item, { quantity: 1 })));
    const fakeStoreAPIFetch = async () => {
      const fetchedData = await fetch('https://fakestoreapi.com/products/');
      const response = await fetchedData.json();
      console.log(response);
      setShopItems(response.map((items) => Object.assign(items, { quantity: 1 })));
    };
    fakeStoreAPIFetch();
    console.log(shopItems);
  }, []);

  const handleQuantityChange = (item, e) => {
    setShopItems((items) =>
      items.map((items) =>
        items.title === item.title ? { ...items, quantity: Number(e.target.value) } : items,
      ),
    );
  };

  const addToCart = (item) => {
    if (cart.map((items) => items.title).includes(item.title)) {
      setCart((items) =>
        items.map((items) => {
          if (items.title === item.title) {
            return {
              ...items,
              data: { price: item.price * (items.quantity + item.quantity) },
              quantity: items.quantity + item.quantity,
            };
          } else {
            return items;
          }
        }),
      );
    } else {
      setCart((items) => [...items, { ...item, data: { price: item.price * item.quantity } }]);
    }
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
      {cartView ? <ShoppingCart cart={cart} /> : null}
      <div className='cart-summary' onClick={() => setCartView(cartView ? false : true)}>
        <p>{`${cart.reduce((prev, cur) => prev + cur.quantity, 0)} items`}</p>
        <p>{`${cart.reduce((prev, cur) => prev + cur.data.price, 0).toFixed(2)} dollarydoos`}</p>
      </div>
    </div>
  );
};

export default Shop;
