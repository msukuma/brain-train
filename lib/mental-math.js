import Game from './game';
import { loadDefaults } from './defaults-loader';
import { validateArgument, validateObject } from './validators';
import { mentalMathPropTypes } from './constants';

export default class MentalMath extends Game {
  constructor(config) {
    super(config);

    validateObject(MentalMath, this.config, mentalMathPropTypes);
    loadDefaults(config, mentalMathPropTypes);
  }

  getFirstOperand() {
    return this.config.firstOperand;
  }

  setFirstOperand(number) {
    this.config.firstOperand = number;
  }

  getSecondOperand() {
    return this.config.secondOperand;
  }

  setSecondOperand(number) {
    this.config.secondOperand = number;
  }

  getResult() {
    return this.config.result;
  }

  setResult(number) {
    this.config.result = number;
  }

  getNumbers() {
    return {
      firstOperand: this.getFirstOperand(),
      secondOperand: this.getSecondOperand(),
      result: this.getResult(),
    };
  }

  hideANumber() {
    const n = randInt(3);

    this.numberVisibility = {
      firstOperand: n == 1,
      secondOperand: n == 2,
      result: n == 3,
    };
    console.log(n, this.numberVisibility);
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

  startNewRound(fn) {
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
