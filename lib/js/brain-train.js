import React from 'react';
import ReactDom from 'react-dom';
import Menu from './menu/menu';
import MentalMath from './mental-math/mental-math';
const m = <Menu />;
const g =  <MentalMath config={{}}/>;

ReactDom.render(m, document.getElementById('menu'));
ReactDom.render(g, document.getElementById('game'));
