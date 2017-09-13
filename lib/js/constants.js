import { keys, values, flatten } from 'lodash';

export const symbols = {
  placeHolder: '__',
  equals: '=',
  addition: '+',
  subtraction: '-',
  multiplication: 'x',
  division: '÷',
};

export const styles = {
  default: 'btn bg-dark choice',
  success: 'btn btn-success choice',
  danger: 'btn btn-danger choice',
  gameCanvas: 'jumbotron',
};

export const keyMap = {
  left: 37,
  up: 38,
  right: 39,
  down: 40,
};
export const choiceKeys = keys(keyMap);
export const keyCodes = values(keyMap);

export const gameNames = {
  MentalMath: 'MentalMath',
};

export const gamesByCategory = {
  arithmetic: [
    gameNames.MentalMath,
  ],
  attention: [],
  memory: [],
  speed: [],
};

export const categories = keys(gamesByCategory);
