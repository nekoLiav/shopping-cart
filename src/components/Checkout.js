import { useLocation } from 'react-router-dom';
import CartItems from './CartItems';

const Checkout = () => {
  const location = useLocation();
  const cart = location.state?.cart;

  return (
    <div className='checkout'>
      <p className='page-header-text'>Checkout</p>
      <CartItems cart={cart} />
    </div>
  );
};

export default Checkout;
