export default function typeOf(arg) {
  return typeof arg === 'object' ? arg.constructor.name.toLowerCase() : (typeof arg);
}
