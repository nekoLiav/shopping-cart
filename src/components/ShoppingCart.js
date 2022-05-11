/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import CartItems from './CartItems';

const ShoppingCart = (props) => {
  if (props.cartView) {
    return (
      <div className='shopping-cart'>
        <div className='cart-header'>
          <p>Cart</p>
        </div>
        <CartItems cart={props.cart} />
        <Link to='/checkout' state={{ cart: props.cart }}>
          Checkout
        </Link>
      </div>
    );
  } else {
    return null;
  }
};

export default ShoppingCart;
