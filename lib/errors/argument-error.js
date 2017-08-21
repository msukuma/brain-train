module.exports = ArgumentError;

function ArgumentError(args) {
  this.name = 'ArgumentError';
  this.message = `expected ${args.name} to be a(n) \
                  "${args.expected}" got "${typeOf(args.recieved)}"`;
}

ArgumentError.prototype = Error.prototype;

function typeOf(arg) {
  return typeof arg === 'object' ? arg.constructor.name : (typeof arg);
}
