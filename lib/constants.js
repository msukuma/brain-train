export const strings =   {
  game: 'mentalmath',
  number: 'number',
  boolean: 'boolean',
  number_: 'number_',
  hidden: 'hidden',
  operation: 'operation',
  placeHolder: '__',
  equals: '=',
  plus: '+',
  minus: '-',
  times: 'x',
  divide: '÷',
};

export const operandDefauts = {
  type: strings.number,
  default: 1,
};

export const gamePropTypes = {
  type: strings.game,
  required: true,
};

export const numberPropTypes = {
  game: gamePropTypes,
  number: operandDefauts,
  hidden: {
    type: strings.boolean,
    default: false,
  },
};

export const mentalMathPropTypes = {
  firstOperand: operandDefauts,
  secondOperand: operandDefauts,
  result: operandDefauts,
};
