import { forEach } from 'lodash';
import Game from './game';
import { loadDefaults } from './defaults-loader';
import { validateArgument, validateObject } from './validators';
import { strings, mentalMathPropTypes } from './constants';

export default class MentalMath extends Game {
  constructor(config) {
    super(config);

    validateObject(MentalMath, this.config, mentalMathPropTypes);
    loadDefaults(config, mentalMathPropTypes);
    this.initialize();
  }

  initialize() {
    this.round = 0;
    this.initializeVisibility();
  }

  initializeVisibility() {
    this.hideANumber();
  }

  getFirstOperand() {
    return this.config.numbers.firstOperand;
  }

  setFirstOperand(number) {
    this.config.numbers.firstOperand = number;
  }

  getSecondOperand() {
    return this.config.numbers.secondOperand;
  }

  setSecondOperand(number) {
    this.config.numbers.secondOperand = number;
  }

  getResult() {
    return this.config.numbers.result;
  }

  setResult(number) {
    this.config.numbers.result = number;
  }

  getNumbers() {
    return this.config.numbers;
  }

  getDOMElements() {
    return this.config.DOMElements;
  }

  isNumberAssignedToElement(number) {
    return this.config.DOMElements[number] &&
            this.config.DOMElements[number] !== undefined &&
            this.config.DOMElements[number] !== null;
  }

  getNewStateOfNumberElement(element) {
    for (var opType in this.config.DOMElements) {
      if (this.config.DOMElements[opType] === element) {
        return {
          number: this.getNumbers()[opType],
          hidden: this.getNumberVisibility()[opType],
        };
      }
    }
  }

  setStateOfNumberElement(element) {
    if (!this.isNumberAssignedToElement(strings.firstOperand)) {
      this.config.DOMElements.firstOperand = element;
      return { number: this.getFirstOperand(), hidden: this.isFirstOperandHidden() };

    } else if (!this.isNumberAssignedToElement(strings.secondOperand)) {
      this.config.DOMElements.secondOperand = element;
      return { number: this.getSecondOperand(), hidden: this.isSecondOperandHidden() };

    } else if (!this.isNumberAssignedToElement(strings.result)) {
      this.config.DOMElements.result = element;
      return { number: this.getResult(), hidden: this.isResultHidden() };
    } else {
      throw new Error('All numbers (Operands and result) have been assigned to an element');
    }
  }

  hideANumber() {
    const n = randInt(3);

    this.config.numberVisibility = {
      firstOperand: n == 1,
      secondOperand: n == 2,
      result: n == 3,
    };
  }

  isFirstOperandHidden() {
    return this.config.numberVisibility.firstOperand;
  }

  isSecondOperandHidden() {
    return this.config.numberVisibility.secondOperand;
  }

  isResultHidden() {
    return this.config.numberVisibility.result;
  }

  getNumberVisibility() {
    return this.config.numberVisibility;
  }

  startNewRound(fn) {
    this.round += 1;
    this.setFirstOperand(randInt(12)); // vary this through settings
    this.setSecondOperand(randInt(12));
    this.setResult(fn(this.getFirstOperand(), this.getSecondOperand()));
    this.hideANumber();
    console.log(this.getNumbers());
  }
}

function randInt(max) {
  return parseInt(Math.random() * max) + 1;
}
