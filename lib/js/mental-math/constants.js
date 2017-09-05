import { map } from 'lodash';
export const symbols = {
  placeHolder: '__',
  equals: '=',
  addition: '+',
  subtraction: '-',
  multiplication: 'x',
  division: '÷',
};

export const styles = {
  default: 'btn btn-secondary choice',
  success: 'btn btn-success choice',
  danger: 'btn btn-danger choice',
  mentalmath: 'mental-math',
};

export const keyCodes = {
  left: 37,
  up: 38,
  right: 39,
  down: 40,
};

export const keyCodesList = map(keyCodes, (v, k) => v);
