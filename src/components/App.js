import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from '../firebase';
import { useAuth } from '../context/context';

const App = () => {
  const { restoreToken, signout } = useAuth();

  // Handle user state changes

  useEffect(() => {
    const restoreUser = (user) => {
      if (user) restoreToken(user);
      else signout();
    };
    const authStateChange = onAuthStateChanged(auth, restoreUser);

    return authStateChange;
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          ></Route>
          <Route
            exact
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
