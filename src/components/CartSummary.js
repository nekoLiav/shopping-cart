/* eslint-disable react/prop-types */
const CartSummary = (props) => {
  const totalPrice = props.cart.reduce((prev, cur) => prev + cur.price, 0).toFixed(2);
  const totalQuantity = props.cart.reduce((prev, cur) => prev + cur.quantity, 0);

  return (
    <div className='cart-summary' onClick={props.toggleView}>
      {props.cart.length ? (
        <p>{`View Cart | $${totalPrice} (${totalQuantity})`}</p>
      ) : (
        <p>{`View Cart | Your cart is empty.`}</p>
      )}
    </div>
  );
};

export default CartSummary;
