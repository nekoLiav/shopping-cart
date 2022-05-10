/* eslint-disable react/prop-types */
const ShopItems = (props) => {
  return (
    <div className='shop-items'>
      {props.shopItems.map((item) => (
        <div className='shop-item' key={item.id}>
          <p>{`${item.title}`}</p>
          <p>{`Price: ${item.price.toFixed(2)}`}</p>
          <input
            type='text'
            value={item.quantity}
            onChange={(e) => props.changeQuantity(item, e)}
          />
          <button onClick={() => props.addToCart(item)}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ShopItems;
