/* eslint-disable react/prop-types */
const ShopItems = (props) => {
  return (
    <div className='shop-items'>
      {props.shopItems.map((shopItem) => (
        <div className='shop-item' data-testid='shop-item' key={shopItem.id}>
          <img className='shop-item-img' src={shopItem.image}></img>
          <p className='shop-item-title'>{`${shopItem.title}`}</p>
          <p>{`$${shopItem.price.toFixed(2)}`}</p>
          <div className='quantity-selectors'>
            <p>Quantity:</p>
            <input
              type='text'
              value={shopItem.quantity}
              onChange={(e) => props.changeQuantity(shopItem, e)}
            />
            <p id='increment' onClick={(e) => props.changeQuantity(shopItem, e)}>
              +
            </p>
            <p id='decrement' onClick={(e) => props.changeQuantity(shopItem, e)}>
              -
            </p>
          </div>
          <p className='add-to-cart-button' onClick={() => props.addToCart(shopItem)}>
            Add To Cart
          </p>
        </div>
      ))}
    </div>
  );
};

export default ShopItems;
