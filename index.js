import React from 'react';
import ReactDom from 'react-dom';
import MentalMath from './lib/mental-math/mental-math';

const g =  <MentalMath config={{}}/>;

ReactDom.render(
  g,
  document.getElementById('game')
);
