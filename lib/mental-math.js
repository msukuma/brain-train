import React from 'react';
import Game from './game';
import { addition, subtraction, multiplication, division } from './operations';
import randInt from './rand-int';
import { strings } from './constants';

export default class MentalMath extends Game {
  constructor(config) {
    super(config);
    this.initialize();
    this.startNewRound({ setState: false })();
  }

  initialize() {
    this.round = 0;
    this.initializeState();
    this.initializeNumbers();
    this.initializeVisibility();
    this.initializeOperations();
  }

  initializeState() {
    this.state = {
      round: this.round,
    };
  }

  initializeNumbers() {
    this.numbers = {
      firstOperand: 1,
      secondOperand: 1,
      result: 2,
    };
  }

  initializeVisibility() {
    this.hideANumber();
  }

  initializeOperations() {
    this.operations = [addition, subtraction, multiplication, division];
  }

  hideANumber() {
    const n = randInt(1, 3);

    this.numberVisibility = {
      firstOperand: n == 1,
      secondOperand: n == 2,
      result: n == 3,
    };
  }

  getFirstOperand() {
    return this.numbers.firstOperand;
  }

  setFirstOperand(number) {
    this.numbers.firstOperand = number;
  }

  getSecondOperand() {
    return this.numbers.secondOperand;
  }

  setSecondOperand(number) {
    this.numbers.secondOperand = number;
  }

  getResult() {
    return this.numbers.result;
  }

  setResult(number) {
    this.numbers.result = number;
  }

  getNumbers() {
    return this.numbers;
  }

  isFirstOperandHidden() {
    return this.numberVisibility.firstOperand;
  }

  isSecondOperandHidden() {
    return this.numberVisibility.secondOperand;
  }

  isResultHidden() {
    return this.numberVisibility.result;
  }

  getNumberVisibility() {
    return this.numberVisibility;
  }

  setOperationSymbol(fn) {
    const name = fn.name;
    console.log('name', name);
    this.currentOperationSybmbol = strings.symbols[name];
  }

  chooseOperation() {
    const op = this.operations[randInt(0, this.operations.length - 1)];
    console.log('op', op);

    return op;
  }

  startNewRound(opts) {
    const setState = opts && opts.hasOwnProperty('setState') ? opts.setState : true;

    return () => {
      let a;
      let b;
      let r;
      const fn = this.chooseOperation();

      this.setOperationSymbol(fn);

      a = randInt(1, 12);
      b = randInt(1, 12);

      if (fn === division) {
        r = randInt(1, 12);
        a = r * b;
      } else {
        r = fn(a, b);
      }

      this.setFirstOperand(a);
      this.setSecondOperand(b);
      this.setResult(r);
      this.hideANumber();

      this.round += 1;

      if (setState) {
        this.setState({ round: this.round });
      }
    };
  }

  render() {
    return (
      <div className={strings.operation}>
        <p>Round {this.round}</p>

        <span> {this.isFirstOperandHidden() ? strings.symbols.placeHolder : this.getFirstOperand()} </span>

        <span>{this.currentOperationSybmbol}</span>

        <span> {this.isSecondOperandHidden() ? strings.symbols.placeHolder : this.getSecondOperand()} </span>

        <span>{strings.symbols.equals}</span>

        <span> {this.isResultHidden() ? strings.symbols.placeHolder : this.getResult()} </span>

        <button onClick={this.startNewRound()}> Next </button>
      </div>
    );
  }
}
