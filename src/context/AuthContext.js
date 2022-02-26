import createDataContext from './createDataContext';
import { SET_USER } from './action';

const authReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state };
    default:
      return state;
  }
};

const signIn =
  (dispatch) =>
  ({ email, password }) => {
    console.log({ email, password });
  };

const register =
  (dispatch) =>
  ({ email, password }) => {
    console.log({ email, password });
  };

const signOut = (dispatch) => () => {};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signIn, register, signOut },
  { authData: null }
);
