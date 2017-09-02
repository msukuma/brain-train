import React from 'react';
import ReactDOM from 'react-dom';
import Number_ from './number_';
import { ArgumentError } from './errors';
import { validateObject } from './validators';
import { strings, gamePropTypes } from './constants';

export default class Operation extends React.Component{
  constructor(props) {
    super(props);
    validateObject(props, { game: gamePropTypes });
    this.props.game.startNewRound(this.functionToCall);
    this.state = {
      round: this.props.game.round,
    };

    console.log(this.state);

    this.calculate = this.calculate.bind(this);
  }

  functionToCall(a, b) { // children must implement
    return null;
  }

  calculate() {
    return () => {
      this.props.game.startNewRound(this.functionToCall);
      this.setState({ round: this.props.game.round });
      console.log(this.state);
    };
  }

  render() {
    return (
      <div className={strings.operation}>
        <p>round {this.state.round}</p>

        <Number_ game={this.props.game} />

        <span>{this.sybmbol}</span>

        <Number_ game={this.props.game} />

        <span>{strings.equals}</span>

        <Number_ game={this.props.game} />

        <button onClick={this.calculate()}> Next </button>
      </div>
    );
  }
}
