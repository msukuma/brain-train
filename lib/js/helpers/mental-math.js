import { map } from 'lodash';

export function titleCase(s) {
  return map(s.split(' '), s => s.substring(0, 1).toUpperCase() + s.substring(1))
          .join(' ');
}

export function mapEveryTwo(items, fn) {
  let mapped = [];

  for (let i = 0; i + 1 < items.length; i += 2) {
    mapped.push(fn(items[i], items[i + 1]));
  }

  if (items.length % 2 !== 0) {
    mapped.push(fn(items[items.length - 1]));
  }

  return mapped;
}

export function addition(a, b) {
  return a + b;
}

export function subtraction(a, b) {
  return a - b;
}

export function multiplication(a, b) {
  return a * b;
}

export function division(a, b) {
  return a / b;
}
