/* eslint-disable react/prop-types */
const ShoppingCart = (props) => {
  return (
    <div className='shopping-cart'>
      {props.cart.map((items) => (
        <div className='cart-item' key={items.name}>
          <p>{`Name: ${items.name}`}</p>
          <p>{`Price: ${items.data.price}`}</p>
          <p>{`Quantity: ${items.quantity}`}</p>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
