import createDataContext from './createDataContext';
import { ADD_TO_BASKET, EMPTY_BASKET, REMOVE_FROM_BASKET } from './action';

const basketReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return { ...state, basket: [...state.basket, action.payload] };
    case EMPTY_BASKET:
      return { basket: [] };
    case REMOVE_FROM_BASKET:
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload}) as its not in basket!`
        );
      }
      return { ...state, basket: newBasket };

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

const removeFromBasket =
  (dispatch) =>
  ({ id }) => {
    dispatch({
      type: REMOVE_FROM_BASKET,
      payload: id
    });
  };

export const { Context, Provider } = createDataContext(
  basketReducer,
  { addToBasket, removeFromBasket },
  { basket: [] }
);
