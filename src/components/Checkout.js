import { useBasket } from '../context/context';
import './Checkout.css';
import Subtotal from './Subtotal';

import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {
  const {
    state: { basket }
  } = useBasket();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="addbanner"
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your shopping basket</h2>
          {basket.map((item) => (
            <CheckoutProduct product={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
