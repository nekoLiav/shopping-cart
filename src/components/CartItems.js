/* eslint-disable react/prop-types */
const CartItems = (props) => {
  return (
    <div className='cart-items'>
      {props.cart.map((item) => (
        <div className='cart-item' key={item.id}>
          <img className='cart-item-img' src={item.image} />
          <div className='cart-item-details'>
            <p>{item.title.length > 20 ? `${item.title.substring(0, 20)} ...` : item.title}</p>
            <p>{`$${item.price.toFixed(2)}`}</p>
            <p>{`x${item.quantity}`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
