// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//with memoization
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const res = fn.apply(this, args);
    cache[args] = res;

    return res;
  };
}

function sfib(n) {
  if (n < 2) {
    return n;
  }
  return sfib(n - 1) + sfib(n - 2);
}
const fib = memoize(sfib);

/* function fib(n) {
  let fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    fib.push(fib[i]);
  }
  return fib[n];
} */

module.exports = fib;
