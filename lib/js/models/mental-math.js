import _ from 'lodash';
import Game from '../interfaces/game';
import { randInt } from '../helpers/app';
import { addition, subtraction, multiplication, division } from '../helpers/mental-math';
import {
  operationArgumentNames as opArgs,
  keysArray,
  styles,
  symbols } from '../constants/mental-math';

export default class MentalMath extends Game {
  constructor(config) {
    super(config);
    this.initialize();
    this.startNewRound();
  }

  initialize() {
    this._round = 0;
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
    this.setDisplay();
  }

  initializeOperations() {
    this.operations = [addition, subtraction, multiplication, division];
  }

  get firstOperand() {
    return this.numbers.firstOperand;
  }

  set firstOperand(number) {
    this.numbers.firstOperand = number;
  }

  get secondOperand() {
    return this.numbers.secondOperand;
  }

  set secondOperand(number) {
    this.numbers.secondOperand = number;
  }

  get result() {
    return this.numbers.result;
  }

  set result(number) {
    this.numbers.result = number;
  }

  get answerOperationArgumentName() {
    return this._answerOperationArgumentName;
  }

  set answerOperationArgumentName(name) {
    this._answerOperationArgumentName = name;
  }

  get answer() {
    return this.numbers[this.answerOperationArgumentName];
  }

  get round() {
    return this._round;
  }

  get operationSymbol() {
    return this._operationSymbol;
  }

  set operationSymbol(fn) {
    this._operationSymbol = symbols[fn.name];
  }

  get toDisplay() {
    return this._toDisplay;
  }

  set toDisplay(obj) {
    this._toDisplay = obj;
  }

  setDisplay() {
    this.toDisplay = {
      firstOperand:  this.firstOperand,
      operationSymbol: this.operationSymbol,
      secondOperand:  this.secondOperand,
      result:  this.result,
    };
  }

  chooseAnswer() {
    const n = randInt(1, 3);
    this.answerOperationArgumentName = n === 1 ?
      opArgs.firstOperand :
      (n === 2 ? opArgs.secondOperand : opArgs.result);
  }

  hideAnswer() {
    this._toDisplay[this.answerOperationArgumentName] = '';
  }

  chooseOperation() {
    return this.operations[randInt(0, this.operations.length - 1)];
  }

  startNewRound() {
    let a;
    let b;
    let r;
    const fn = this.chooseOperation();

    this.operationSymbol = fn;

    a = randInt(1, 12);
    b = randInt(1, 12);

    if (fn === division) {
      r = randInt(1, 12);
      a = multiplication(r, b);
    } else {
      r = fn(a, b);
    }

    this.firstOperand = a;
    this.secondOperand = b;
    this.result = r;
    this.setDisplay();
    this.chooseAnswer();
    this.hideAnswer();

    this._round += 1;
  }
}
