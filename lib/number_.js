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

    this.state = this.props.game.setStateOfNumberElement(this);
    console.log(this.state);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const newState = this.props.game.getNewStateOfNumberElement(this);
    console.log('newState', newState);
    if (newState.number !== this.state.number) {
      this.setState(newState);
      return true;
    } else if (newState.hidden !== this.state.hidden) {
      this.setState(newState);
      return true;
    }

    return false;
  }

  render () {
    return <span>{this.state.hidden ? strings.placeHolder : this.state.number}</span>;
  }
}
