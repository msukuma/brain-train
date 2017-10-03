import React from 'react';
import MentalMathView from './mental-math';
import { gameNames } from '../constants/app';

export default class GameView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.config) {
      switch (this.props.config.game) {
        case gameNames.MentalMath:
          return <MentalMathView modelClass={this.props.modelClass}/>;
        default:
          return null;
      }
    } else {
      return null;
    }

  }
}
