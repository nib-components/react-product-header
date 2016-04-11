import React from 'react';
import ReactDOM from 'react-dom';
import ProductHeader from '..';

const price = {amount: 22, frequency: 'weekly'};

ReactDOM.render(
  <div>
    <ProductHeader name="Basic Hospital" price={price} type="hospital" index={0}/>
    <ProductHeader name="Standard Hospital" price={price} type="hospital" index={1}/>
    <ProductHeader name="Top Hospital" price={price} type="hospital" index={2}/>
    <ProductHeader name="Core Extras" price={price} type="extras" index={0}/>
    <ProductHeader name="Core & Wellbeing Extras" price={price} type="extras" isPriceLoading index={1}/>
    <ProductHeader name="Top Extras" price={price} type="extras" index={2}/>
  </div>,
  document.querySelector('#app')
);