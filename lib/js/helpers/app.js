export function randInt(from, to) {
  let n = parseInt(Math.random() * (to + 1));

  if (n < from) {
    return n + from;
  }

  return n;
}
