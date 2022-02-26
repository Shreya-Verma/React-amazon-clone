import React, { useContext } from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { Context as BasketContext } from '../context/BasketContext';

const Subtotal = () => {
  const {
    state: { basket }
  } = useContext(BasketContext);

  const getBasketTotal = (basketItems) => {
    if (!basketItems) {
      return 0;
    }
    return basketItems.reduce((amount, item) => item.price + amount, 0);
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
