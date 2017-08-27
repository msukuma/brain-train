import React from 'react';
import Number_ from './number_';
import { ArgumentError } from './errors';
import { validateObject } from './validators';
import { strings, gamePropTypes } from './constants';

export default class Operation extends React.Component{
  constructor(props) {
    super(props);
    validateObject(props, { game: gamePropTypes });
    this.props.game.startNewRound(this.functionToCall);
  }

  functionToCall(a, b) { // children must implement
    return null;
  }

  calculate() {
    return () => {
      this.props.game.startNewRound(this.functionToCall);
    };
  }

  render() {
    return (
      <div className={strings.operation} onClick={this.calculate()}>
        <Number_ game={this.props.game} number={this.props.game.getFirstOperand()} hidden={this.props.game.isFirstOperandHidden()}/>
        <span>{this.sybmbol}</span>
        <Number_ game={this.props.game} number={this.props.game.getSecondOperand()} hidden={this.props.game.isFirstOperandHidden()}/>
        <span>{strings.equals}</span>
        <Number_ game={this.props.game} number={this.props.game.getResult()} hidden={this.props.game.isResultHidden()}/>
      </div>
    );
  }
}
