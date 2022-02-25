import React from 'react';

import './Home.css';
import banner from '../assets/banner.png';
import Product from './Product';
import { products } from '../dummyData';

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={banner} alt="banner" />

        <div className="home__row">
          <Product product={products[0]} />
          <Product product={products[1]} />
        </div>

        <div className="home__row">
          <Product product={products[2]} />
          <Product product={products[3]} />
          <Product product={products[4]} />
        </div>

        <div className="home__row">
          <Product product={products[5]} />
        </div>
      </div>
    </div>
  );
};

export default Home;
