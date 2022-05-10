/* eslint-disable react/prop-types */
const ShoppingCart = (props) => {
  return (
    <div className='shopping-cart'>
      {props.cart.map((items) => (
        <div key={items.name}>
          <p>{items.name}</p>
          <p>{items.data.price}</p>
          <p>{items.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
