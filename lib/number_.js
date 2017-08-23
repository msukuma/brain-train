import ArgumentError from './errors/argument-error';
import { number } from './constants';
import React from 'react';

export default class Number_ extends Component {
  constructor(props) {
    super(props);
    this.validateProps(props);
    this.state = {
      number: props.number,
      hidden: props.hasOwnProperty('hidden') ? props.hidden : false,
      isInput: props.hasOwnProperty('isInput') ? props.isInput : true,
    };
  }

  setNumber (newNumber) {
    if (typeof newNumber !== number) {
      throw new ArgumentError({
          name: 'newNumber',
          expected: number,
          recieved: newNumber,
        });
    }

    this.setState({ number: newNumber });
  };

  show () {
    this.setState({ hidden: false });
  };

  hide () {
    this.setState({ hidden: true });
  };

  validateProps (props) {
    if (!props.hasOwnProperty('number')) {
      throw new ArgumentError({
        name: 'props.number',
        expected: `props.number to be a "number"`,
        recieved: props.number,
      });
    }
  };

  render () {
    return (
      <span>{this.state.number}</span>
    );
  }
}
