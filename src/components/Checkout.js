import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CartItems from './CartItems';
import Promo from './Promo';

const Checkout = () => {
  const location = useLocation();
  const cart = location.state?.cart;
  const totalQuantity = cart.reduce((prev, cur) => prev + cur.quantity, 0);
  const subtotal = cart.reduce((prev, cur) => prev + cur.price, 0).toFixed(2);

  const [promoApplied, setPromoApplied] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [troll, setTroll] = useState('');

  useEffect(() => {
    if (promoApplied) {
      setTotalPrice((prevPrice) => (prevPrice - prevPrice * 0.2).toFixed(2));
      setTroll('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    } else {
      setTotalPrice(subtotal);
      setTroll('/shopping-cart');
    }
  }, [promoApplied]);

  const taxes = totalPrice > 0 ? totalQuantity * 0.69 : 0;

  return (
    <div className='checkout'>
      <h1 className='page-header-text'>Checkout</h1>
      <div className='checkout-content'>
        <div className='checkout-promos'>
          <p className='current-promos'>Current Promotions</p>
          <div className='promo'>
            <p className='promo-header'>20% OFF!</p>
            <p>Use code NICE at checkout!</p>
          </div>
        </div>
        <div className='checkout-main'>
          <CartItems cart={cart} />
          <div className='checkout-promo-container'>
            <p>Have a promo code?</p>
            <Promo setPromoApplied={setPromoApplied} />
          </div>
          <div className='checkout-info'>
            <div className='cash-money'>
              <div className='money'>
                <p>Subtotal:</p>
                <p>{`$${totalPrice}`}</p>
              </div>
              <div className='money'>
                <p>Tax:</p>
                <p>{`$${taxes.toFixed(2)}`}</p>
              </div>
              <div className='money'>
                <p>Total:</p>
                <p>{`$${(Number(totalPrice) + Number(taxes)).toFixed(2)}`}</p>
              </div>
            </div>
            <a className='payment-button' href={troll}>
              Pay
            </a>
          </div>
        </div>
        <div className='checkout-ads'></div>
      </div>
    </div>
  );
};

export default Checkout;
