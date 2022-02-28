import createDataContext from './createDataContext';
import { ADD_ERROR, CLEAR_ERROR_MESSAGE, SIGN_IN, SIGN_OUT } from './action';
import { auth } from '../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';

const authReducer = (state, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        authData: {
          token: action.payload.accessToken,
          email: action.payload.email
        },
        errorMessage: ''
      };
    case SIGN_OUT:
      return {
        authData: { token: null, email: '' },
        errorMessage: ''
      };
    case ADD_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };
    case CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: ''
      };
    default:
      return state;
  }
};

const signIn =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response.user);
      if (response.user) {
        dispatch({ type: SIGN_IN, payload: response.user });
      }
    } catch (error) {
      console.log(error);
    }
  };

const signUp =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      if (response.user) {
        dispatch({ type: SIGN_IN, payload: response.user });
      }
    } catch (error) {
      console.log(error);
    }
  };

const signout = (dispatch) => () => {};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signIn, signUp, signout },
  {
    authData: { token: null, email: '' },
    errorMessage: ''
  }
);
