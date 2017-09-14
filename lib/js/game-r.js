import React from 'react';
import MentalMathR from './mental-math/mental-math-r';
import { gameNames } from './constants';

export default class GameR extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('GameR componentWillUpdate', nextProps, nextState);
  }

  render() {
    if (this.props.config) {
      switch (this.props.config.game) {
        case gameNames.MentalMath:
          return <MentalMathR model={this.props.model}/>;
        default:
          return null;
      }
    } else {
      return null;
    }

  }
}
