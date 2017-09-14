import _ from 'lodash';
import Game from './game';
import { addition, subtraction, multiplication, division } from '../helpers/operations';
import randInt from '../helpers/rand-int';
import { opArgs, keysArray, styles, symbols } from '../helpers/constants';

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

  getAnswer() {
    return this.numbers[this.answer];
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
    this.answer = n === 1 ? opArgs.firstOperand : (n === 2 ? opArgs.secondOperand : opArgs.result);
  }

  hideAnswer() {
    this.toDisplay[this.answer] = symbols.placeHolder;
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

  generateWrongChoices() {
    const c = [];

    for (let i = 1; i < keysArray.length; i++) {
      randInt(0, 1) % 2 == 0 ? c.push(this.getAnswer() + i) : c.push(this.getAnswer() - i);
    }

    return c;
  }

  getChoices() {
    const answer = this.getAnswer();
    const n = randInt(0, keysArray.length - 1);
    const rightChoice = keysArray[n];
    const wrongChoices = this.generateWrongChoices();
    let choices = {};

    for (let i = 0; i < keysArray.length; i++) {
      if (i === n) continue;

      choices[keysArray[i]] = wrongChoices.pop();
    }

    choices[rightChoice] = answer;
    choices.rightChoice = rightChoice;

    return choices;
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
