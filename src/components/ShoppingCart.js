/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import CartItems from './CartItems';

const ShoppingCart = (props) => {
  if (props.cartView) {
    return (
      <div className='shopping-cart'>
        <h1 className='page-header-text'>Cart</h1>
        <CartItems cart={props.cart} />
        <Link to='/checkout' state={{ cart: props.cart }}>
          <p className='checkout-link'>Checkout</p>
        </Link>
      </div>
    );
  } else {
    return null;
  }
};

export default ShoppingCart;
