/* eslint-disable react/prop-types */
const ShoppingCart = (props) => {
  return (
    <div className='shopping-cart'>
      {props.cart.map((item) => (
        <div className='cart-item' key={item.id}>
          <p>{item.title}</p>
          <p>{`$${item.price.toFixed(2)}`}</p>
          <p>{`x${item.quantity}`}</p>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
