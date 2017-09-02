export const strings =   {
  game: 'mentalmath',
  number: 'number',
  boolean: 'boolean',
  object: 'object',
  number_: 'number_',
  hidden: 'hidden',
  operation: 'operation',
  firstOperand: 'firstOperand',
  secondOperand: 'secondOperand',
  result: 'result',
  placeHolder: '__',
  equals: '=',
  plus: '+',
  minus: '-',
  times: 'x',
  divide: '÷',
};

export const gamePropTypes = {
  type: strings.game,
  required: true,
};

export const numberPropTypes = {
  game: gamePropTypes,
};

export const mentalMathPropTypes = {
  numbers: {
    type: strings.object,
    default: {
      firstOperand: 1,
      secondOperand: 1,
      result: 2,
    },
  },
  DOMElements: {
    type: strings.object,
    default: {},
  },
};
