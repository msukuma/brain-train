import { keys as _keys, values, flatten, forEach } from 'lodash';
import { styles as appStyles } from './app';

export const answer = 'answer';
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
  answer: `${appStyles.btnDefault} ${answer}`,
  rightAnswer: `${appStyles.btnSuccess} ${answer}`,
  wrongAnser: `${appStyles.btnDanger} ${answer}`,
};

export const operationArguments = {
  firstOperand: 'firstOperand',
  secondOperand: 'secondOperand',
  result: 'result',
};

export const numberKeyCodeMap = (() => {
  const m = {};

  for (let i = 0, c = 48; i < 10; i++, c++) {
    m[i] = c;
  }

  return m;
})();

export const letterKeyCodeMap = (() => {
  const m = {};

  for (let c = 65; c < 91; c++) {
    m[String.fromCharCode(c + 32)] = c;
  }

  return m;
})();

export const keyToKeyCodeMap = (() => {
  const m = {
    backspace: 8,
    enter: 13,
  };

  forEach(numberKeyCodeMap, (v, k) => m[k] = v);
  forEach(letterKeyCodeMap, (v, k) => m[k] = v);

  return m;
})();

export const numberRegex = /^[0-9]{0,}$/;

export const keysArray = _keys(keyToKeyCodeMap);
export const keyCodes = values(keyToKeyCodeMap);
