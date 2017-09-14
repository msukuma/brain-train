import { keys as _keys, values, flatten } from 'lodash';

export const symbols = {
  placeHolder: '__',
  equals: '=',
  addition: '+',
  subtraction: '-',
  multiplication: 'x',
  division: '÷',
};

export const styles = {
  container: 'container',
  default: 'btn bg-dark choice',
  success: 'btn btn-success choice',
  danger: 'btn btn-danger choice',
  jumbotron: 'jumbotron',
  col: 'col',
  rowTextCenter: 'row text-center',
  colTextCenter: 'col text-center',
};

export const opArgs = {
  firstOperand: 'firstOperand',
  secondOperand: 'secondOperand',
  result: 'result',
};

export const keys = {
  left: 'left',
  up: 'up',
  right: 'right',
  down: 'down',
};

export const keyToKeyCodesMap = {
  left: 37,
  up: 38,
  right: 39,
  down: 40,
};
export const keysArray = _keys(keyToKeyCodesMap);
export const keyCodes = values(keyToKeyCodesMap);

export const gameNames = {
  MentalMath: 'MentalMath',
};

export const gamesByCategory = {
  attention: [],
  memory: [],
  'problem solving': [
    gameNames.MentalMath,
  ],
  speed: [],
};

export const categories = _keys(gamesByCategory);
