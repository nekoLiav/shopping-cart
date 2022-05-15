/* eslint-disable react/prop-types */
const CartItems = (props) => {
  return (
    <div className='cart-items'>
      {props.cart.map((item) => (
        <div className='cart-item' data-testid='cart-item' key={item.id}>
          <img className='cart-item-img' src={item.image} />
          <div className='cart-item-details'>
            <p className='cart-item-title'>
              {item.title.length > 30 ? `${item.title.substring(0, 30)} ...` : item.title}
            </p>
            <p>{`$${item.price.toFixed(2)} (${item.quantity})`}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
