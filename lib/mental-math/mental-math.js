import React from 'react';
import Game from '../game';
import { addition, subtraction, multiplication, division } from './operations';
import randInt from './rand-int';
import { strings, keyCodes } from './constants';

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

  getAnswer() {
    for (let key in this.numberVisibility) {
      if (this.numberVisibility[key] === true) {
        return this.numbers[key];
      }
    }
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
    this.currentOperationSybmbol = strings.symbols[fn.name];
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

  handleKeyDown() {
    return (e) => {
      if (e.keyCode === keyCodes.left) {
        this.rightOrWrong(this.choices.left, 'left');
      } else if (e.keyCode === keyCodes.up) {
        this.rightOrWrong(this.choices.up, 'up');
      } else if (e.keyCode === keyCodes.right) {
        this.rightOrWrong(this.choices.right, 'right');
      } else if (e.keyCode === keyCodes.down) {
        this.rightOrWrong(this.choices.down, 'down');
      }
    };
  }

  rightOrWrong(choice, elementId) {
    console.log(document.getElementById(elementId).style.backgroundColor);
    if (choice === this.getAnswer()) {
      document.getElementById(elementId).style.backgroundColor = 'green';
    } else {
      document.getElementById(elementId).style.backgroundColor = 'red';
    }

    setTimeout(this.startNewRound(), 500);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown());
  }

  render() {
    return (
      <div className={strings.operation}>
        <div>
          <span> {this.isFirstOperandHidden() ? strings.symbols.placeHolder : this.getFirstOperand()} </span>
          <span>{this.currentOperationSybmbol}</span>
          <span> {this.isSecondOperandHidden() ? strings.symbols.placeHolder : this.getSecondOperand()} </span>
          <span>{strings.symbols.equals}</span>
          <span> {this.isResultHidden() ? strings.symbols.placeHolder : this.getResult()} </span>
          <button onClick={this.startNewRound()}> Next </button>
        </div>
        <div id='options'>
          <table>
            <tr>
              <td></td>
              <td><button className={'choice'} id={'up'} >{this.choices.up}</button></td>
              <td></td>
            </tr>
            <tr>
              <td><button className={'choice'} id={'left'} >{this.choices.left}</button></td>
              <td><button className={'choice'} id={'down'} >{this.choices.down}</button></td>
              <td><button className={'choice'} id={'right'} >{this.choices.right}</button></td>
            </tr>

          </table>
        </div>
      </div>
    );
  }
}
