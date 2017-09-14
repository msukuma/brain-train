import React from 'react';
import MentalMathView from './mental-math';
import { gameNames } from '../helpers/constants';

export default class GameView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.config) {
      switch (this.props.config.game) {
        case gameNames.MentalMath:
          return <MentalMathView model={this.props.model}/>;
        default:
          return null;
      }
    } else {
      return null;
    }

  }
}
