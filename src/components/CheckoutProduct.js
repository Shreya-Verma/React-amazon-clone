import { useBasket } from '../context/context';
import './CheckoutProduct.css';

const CheckoutProduct = ({ product }) => {
  const { removeFromBasket } = useBasket();
  return (
    <div className="checkoutProduct">
      <img src={product.image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{product.title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{product.price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(product.rating)
            .fill()
            .map((_, i) => {
              return <p key={i}>🌟</p>;
            })}
        </div>
        <button onClick={() => removeFromBasket({ id: product.id })}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
