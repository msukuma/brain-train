import React from 'react';
import Operation from './operation';
import Number_ from './number_';
import { strings } from './constants';

export default class Addition extends Operation {
  constructor(props) {
    super(props);
    this.sybmbol = '+';
  }

  functionToCall(a, b) {
    return a + b;
  }
}
