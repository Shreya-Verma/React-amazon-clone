import React, { useContext } from 'react';
import { Context as BasketContext } from '../context/BasketContext';
import './Product.css';

const Product = ({ product }) => {
  const { addToBasket } = useContext(BasketContext);

  return (
    <div className="product">
      <div className="product__info">
        <p>{product.title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{product.price}</strong>
        </p>
        <div className="product__rating">
          {Array(product.rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>

      <img src={product.image} alt="" />

      <button onClick={() => addToBasket({ product })}>Add to Basket</button>
    </div>
  );
};

export default Product;
