import React from 'react';
import typeOf from './type-of';
import { loadDefaults } from './defaults-loader';
import { strings, numberPropTypes } from './constants';
import { validateArgument, validateObject } from './validators';

export default class Number_ extends React.Component {
  constructor(props) {
    super(props);
    validateObject(Number_, props, numberPropTypes);
    loadDefaults(props, numberPropTypes);

    this.state = {
      number: props.number,
      hidden: props.hidden,
    };
  }

  show () {
    this.setState({ hidden: false });
  };

  hide () {
    this.setState({ hidden: true });
  };

  render () {
    return <span>{this.state.hidden ? strings.placeHolder : this.state.number}</span>;
  }
}
