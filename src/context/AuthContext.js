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
        authData: action.payload,
        errorMessage: ''
      };
    case SIGN_OUT:
      return {
        authData: null,
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

      if (response.user) {
        dispatch({ type: SIGN_IN, payload: response.user });
      }
    } catch (error) {
      dispatch({ type: ADD_ERROR, payload: 'Error with login' });
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

      if (response.user) {
        dispatch({ type: SIGN_IN, payload: response.user });
      }
    } catch (error) {
      dispatch({ type: ADD_ERROR, payload: 'Error with register' });
    }
  };

const signout = (dispatch) => async () => {
  try {
    const response = await signOut();
    if (response) {
      dispatch({ type: SIGN_OUT });
    }
  } catch (error) {
    dispatch({ type: ADD_ERROR, payload: 'error signing out' });
  }
};

const restoreToken = (dispatch) => (data) => {
  console.log(data);
  dispatch({ type: SIGN_IN, payload: data });
};

export const { Context, Provider } = createDataContext(
  authReducer,
  { signIn, signUp, signout, restoreToken },
  {
    authData: null,
    errorMessage: ''
  }
);
