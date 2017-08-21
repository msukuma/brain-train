const ArgumentError = require('./errors/argument-error');

module.exports = Number_;


function Number_(args){
  this.validateArguments(args);
  this.number = args.number;
  this.hidden = args.hasOwnProperty('hidden') ? arge.hidden : false;
  this.isInput = args.hasOwnProperty('isInput') ? args.isInput : true;
}

Number_.prototype.setNumber = function(newNumber) {
  const expected = 'number';

  if(typeof newNumber !== expected){
    throw new ArgumentError({
        name: 'newNumber',
        expected: expected,
        recieved: newNumber
    });
  }

  this.number = newNumber;
};

Number_.prototype.show = function() {
  this.hidden = false;
}

Number_.prototype.hide = function() {
  this.hidden = true;
}

Number_.prototype.validateArguments = function(args){
  if(!args.hasOwnProperty('number')){
    throw new ArgumentError({
      name: 'args.number',
      expected: `args.number to be a "number"`,
      recieved: args.number
    });
  }
}
