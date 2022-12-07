import React, { useState, useEffect } from 'react';
import Header from '../header/header';
import Categories from './categories';
import Footer from '../footer/footer';

import data from '../../data/data';

function StoreFront() {
 
  return (
    <>
      {console.log(data)}
      <Header cart={data.cart} />
      <Categories {...data} />
      <Footer />
    </>
  );
}

export default StoreFront;
