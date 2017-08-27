import typeOf from './type-of';
import { strings } from './constants';

export function ArgumentError(args) {
  this.name = strings.argumentError;
  this.message = `function ${args.function.name} expected ${args.paramName} to be a(n) ` +
                  `"${args.expected}" got "${typeOf(args.recieved)}"`;
}

ArgumentError.prototype = Error.prototype;
