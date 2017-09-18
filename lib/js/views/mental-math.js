import React from 'react';
import ChoicesView from './choices';
import { styles } from '../constants/app';
import { symbols } from '../constants/mental-math';

export default class MentalMathView extends React.Component {
  constructor(props) {
    super(props);
    this.initialize();
  }

  initialize() {
    this.model = new (this.props.model);
    this.state = this.getState();
  }

  getState() {
    return {
      round: this.model.getRound(),
    };
  }

  startNewRound() {
    this.model.startNewRound();
    this.setState(this.getState());
  }

  render() {
    return (
      <div className={styles.jumbotron}>
        <div className={styles.rowTextCenter}>
          <div id='display' className={styles.colTextCenter}>
            <span> {this.model.toDisplay.firstOperand} </span>
            <span>{this.model.toDisplay.operationSymbol}</span>
            <span> {this.model.toDisplay.secondOperand} </span>
            <span>{symbols.equals}</span>
            <span> {this.model.toDisplay.result} </span>
          </div>
        </div>
        <ChoicesView choices={this.model.getChoices()} startNewRound={this.startNewRound.bind(this)}/>
      </div>
    );
  }
}
