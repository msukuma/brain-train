import React from 'react';
import GameR from '../game-r';
import { choiceKeys, styles, symbols } from '../constants';

export default class MentalMathR extends GameR {
  constructor(props) {
    super(props);
    this.initialize();
  }

  initialize() {
    this.state = {
      round: this.props.game.round,
    };
  }

  startNewRound() {
    this.props.game.startNewRound();
    this.setState({ round: this.props.game.round });
  }

  render() {
    return (
      <div className={styles.gameCanvas}>
        <div className='row justify-content-center'>
          <div id='display' className='col text-center'>
            <span> {this.props.game.toDisplay.firstOperand} </span>
            <span>{this.props.game.currentOperationSybmbol}</span>
            <span> {this.props.game.toDisplay.secondOperand} </span>
            <span>{symbols.equals}</span>
            <span> {this.props.game.toDisplay.result} </span>
          </div>
        </div>
        <Choices choices={this.getChoices()} answer={this.getAnswer()} startNewRound={this.startNewRound.bind(this)}/>
      </div>
    );
  }
}
