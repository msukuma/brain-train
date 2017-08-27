import React from 'react';
import ReactDom from 'react-dom';
import Addition from './lib/addition';
import MentalMath from './lib/mental-math';

const config = {};
const g = new MentalMath(config);
const a = <Addition game={g} />;
//
ReactDom.render(a, document.getElementById('test'));
