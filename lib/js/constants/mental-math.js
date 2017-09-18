import { keys as _keys, values, flatten } from 'lodash';
import { styles as appStyles } from './app';

export const choice = 'choice';
export const keydown = 'keydown';

export const symbols = {
  placeHolder: '__',
  equals: '=',
  addition: '+',
  subtraction: '-',
  multiplication: 'x',
  division: '÷',
};

export const styles = {
  choice: `${appStyles.btnDefault} ${choice}`,
  rightChoice: `${appStyles.btnSuccess} ${choice}`,
  badChoice: `${appStyles.btnDanger} ${choice}`,
};

export const operationArguments = {
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

export const keyToKeyCodeMap = {
  left: 37,
  up: 38,
  right: 39,
  down: 40,
};
export const keysArray = _keys(keyToKeyCodeMap);
export const keyCodes = values(keyToKeyCodeMap);
