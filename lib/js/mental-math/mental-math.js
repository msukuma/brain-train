import React from 'react';
import _ from 'lodash';
import Game from '../game';
import Choices from './choices';
import { addition, subtraction, multiplication, division } from './operations';
import randInt from './rand-int';
import { styles, symbols, keyCodes } from './constants';

export default class MentalMath extends Game {
  constructor(props) {
    super(props);
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

    this.toDisplay = {
      firstOperand:  n == 1 ? symbols.placeHolder : this.getFirstOperand(),
      secondOperand:  n == 2 ? symbols.placeHolder : this.getSecondOperand(),
      result:  n == 3 ? symbols.placeHolder : this.getResult(),
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

  getAnswer() {
    for (let key in this.toDisplay) {
      if (this.toDisplay[key] === symbols.placeHolder) {
        return this.numbers[key];
      }
    }
  }

  getNumbers() {
    return this.numbers;
  }

  getToDisplay() {
    return this.toDisplay;
  }

  setOperationSymbol(fn) {
    this.currentOperationSybmbol = symbols[fn.name];
  }

  chooseOperation() {
    return this.operations[randInt(0, this.operations.length - 1)];
  }

  generateWrongChoices(answer) {
    const c = [];

    for (let i = 1; i <= 3; i++) {
      randInt(0, 1) % 2 == 0 ? c.push(answer + i) : c.push(answer - i);
    }

    return c;
  }

  loadChoices(answer) {
    const n = randInt(1, 4);
    const wrongChoices = this.generateWrongChoices(answer);

    this.choices = {
      left: n == 1 ? answer : wrongChoices.pop(),
      up: n == 2 ? answer : wrongChoices.pop(),
      right: n == 3 ? answer : wrongChoices.pop(),
      down: n == 4 ? answer : wrongChoices.pop(),
    };
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
      //
      this.setFirstOperand(a);
      this.setSecondOperand(b);
      this.setResult(r);
      this.hideANumber();
      this.loadChoices(this.getAnswer());

      this.round += 1;

      if (setState) {
        this.setState({ round: this.round });
      }
    };
  }

  render() {
    return (
      <div className={styles.mentalmath}>
        <div className='row justify-content-center'>
          <div id='display' className='col text-center'>
            <span> {this.toDisplay.firstOperand} </span>
            <span>{this.currentOperationSybmbol}</span>
            <span> {this.toDisplay.secondOperand} </span>
            <span>{symbols.equals}</span>
            <span> {this.toDisplay.result} </span>
          </div>
        </div>
        <Choices round={this.round} choices={this.choices} answer={this.getAnswer()} startNewRound={this.startNewRound.bind(this)}/>
      </div>
    );
  }
}
