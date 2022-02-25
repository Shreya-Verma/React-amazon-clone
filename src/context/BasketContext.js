import createDataContext from './createDataContext';
import { ADD_TO_BASKET, EMPTY_BASKET, REMOVE_FROM_BASKET } from './action';
const basket = [];

const basketReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return [...state, action.payload];
    case EMPTY_BASKET:
      return [];
    case REMOVE_FROM_BASKET:
      const index = state.findIndex(
        (basketItem) => basketItem.id === action.payload
      );
      let newBasket = [...state];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload}) as its not in basket!`
        );
      }
      return newBasket;

    default:
      return state;
  }
};

const addToBasket =
  (dispatch) =>
  ({ product }) => {
    console.log(product);
    dispatch({
      type: ADD_TO_BASKET,
      payload: product
    });
  };

export const { Context, Provider } = createDataContext(
  basketReducer,
  { addToBasket },
  basket
);
