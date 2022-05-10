/* eslint-disable react/prop-types */
const CartSummary = (props) => {
  if (props.cart.length) {
    return (
      <div className='cart-summary' onClick={props.toggleView}>
        <p>{`$${props.cart
          .reduce((prev, cur) => prev + cur.price, 0)
          .toFixed(2)} (x${props.cart.reduce((prev, cur) => prev + cur.quantity, 0)})`}</p>
      </div>
    );
  } else {
    return (
      <div className='cart-summary' onClick={props.toggleView}>
        <p>{`Your cart is empty. :(`}</p>
      </div>
    );
  }
};

export default CartSummary;
