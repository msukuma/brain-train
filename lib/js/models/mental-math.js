import _ from 'lodash';
import Game from '../interfaces/game';
import { randInt } from '../helpers/app';
import { addition, subtraction, multiplication, division } from '../helpers/mental-math';
import { operationArguments as opArgs, keysArray, styles, symbols } from '../constants/mental-math';

export default class MentalMath extends Game {
  constructor(config) {
    super(config);
    this.initialize();
    this.startNewRound();
  }

  initialize() {
    this.round = 0;
    this.initializeNumbers();
    this.initializeVisibility();
    this.initializeOperations();
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

  getAnswerVariable() {
    this.answerVariable;
  }

  getAnswer() {
    return this.numbers[this.answerVariable];
  }

  getNumbers() {
    return this.numbers;
  }

  getRound() {
    return this.round;
  }

  loadDisplay() {
    this.toDisplay = {
      firstOperand:  this.getFirstOperand(),
      operationSymbol: this.getOperationSymbol(),
      secondOperand:  this.getSecondOperand(),
      result:  this.getResult(),
    };
  }

  getToDisplay() {
    return this.toDisplay;
  }

  chooseAnswer() {
    const n = randInt(1, 3);
    this.answerVariable = n === 1 ? opArgs.firstOperand : (n === 2 ? opArgs.secondOperand : opArgs.result);
  }

  hideAnswer() {
    this.toDisplay[this.answerVariable] = symbols.placeHolder;
  }

  getOperationSymbol() {
    return this.operationSymbol;
  }

  setOperationSymbol(fn) {
    this.operationSymbol = symbols[fn.name];
  }

  chooseOperation() {
    return this.operations[randInt(0, this.operations.length - 1)];
  }

  startNewRound() {
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
  }
}
