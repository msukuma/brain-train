export default function mapEveryTwo(items, fn) {
  let i;
  let mapped = [];

  for (i = 0; i + 1 < items.length; i += 2) {
    mapped.push(fn(items[i], items[i + 1]));
  }

  if (items.length % 2 !== 0) {
    mapped.push(fn(items[items.length - 1]));
  }

  return mapped;
}
