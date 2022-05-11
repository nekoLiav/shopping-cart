/* eslint-disable react/prop-types */
const ShoppingCart = (props) => {
  if (props.cartView) {
    return (
      <div className='shopping-cart'>
        <div className='cart-header'>
          <h1>Cart</h1>
        </div>
        <div className='cart-items'>
          {props.cart.map((item) => (
            <div className='cart-item' key={item.id}>
              <p>{item.title}</p>
              <p>{`$${item.price.toFixed(2)}`}</p>
              <p>{`x${item.quantity}`}</p>
            </div>
          ))}
        </div>
        <button className='checkout-button'>Checkout</button>
      </div>
    );
  } else {
    return null;
  }
};

export default ShoppingCart;
