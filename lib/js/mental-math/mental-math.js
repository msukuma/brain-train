import _ from 'lodash';
import Game from '../game';
import Choices from './choices';
import { addition, subtraction, multiplication, division } from './operations';
import randInt from './rand-int';
import { choiceKeys, styles, symbols } from '../constants';

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
    this.loadDisplay();
  }

  initializeOperations() {
    this.operations = [addition, subtraction, multiplication, division];
  }

  loadDisplay() {
    this.toDisplay = {
      firstOperand:  this.getFirstOperand(),
      secondOperand:  this.getSecondOperand(),
      result:  this.getResult(),
    };
  }

  chooseAnswer() {
    const n = randInt(1, 3);

    if (n == 1) {
      this.answer = 'firstOperand';
    } else if (n == 2) {
      this.answer = 'secondOperand';
    } else {
      this.answer = 'result';
    }
  }

  hideAnswer() {
    this.toDisplay[this.answer] = symbols.placeHolder;
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
    return this.numbers[this.answer];
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

  generateWrongChoices() {
    const c = [];

    for (let i = 1; i <= 3; i++) {
      randInt(0, 1) % 2 == 0 ? c.push(this.getAnswer() + i) : c.push(this.getAnswer() - i);
    }

    return c;
  }

  getChoices() {
    const n = randInt(0, 3);
    const answer = this.getAnswer();
    const wrongChoices = this.generateWrongChoices();

    return {
        left: n == 0 ? answer : wrongChoices.pop(),
        up: n == 1 ? answer : wrongChoices.pop(),
        right: n == 2 ? answer : wrongChoices.pop(),
        down: n == 3 ? answer : wrongChoices.pop(),
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
      this.loadDisplay();
      this.chooseAnswer();
      this.hideAnswer();

      this.round += 1;

      if (setState) {
        this.setState({ round: this.round });
      }
    };
  }
}
