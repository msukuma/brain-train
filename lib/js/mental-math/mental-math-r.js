import React from 'react';
import Choices from './choices';
import { choiceKeys, styles, symbols } from '../constants';

export default class MentalMathR extends React.Component {
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
      <div className={styles.gameCanvas}>
        <div className='row justify-content-center'>
          <div id='display' className='col text-center'>
            <span> {this.model.toDisplay.firstOperand} </span>
            <span>{this.model.toDisplay.operationSymbol}</span>
            <span> {this.model.toDisplay.secondOperand} </span>
            <span>{symbols.equals}</span>
            <span> {this.model.toDisplay.result} </span>
          </div>
        </div>
        <Choices choices={this.model.getChoices()} startNewRound={this.startNewRound.bind(this)}/>
      </div>
    );
  }
}
