export const myLogger = function (message, color = 'lightblue') {
  console.log(`%c${this.constructor.name}: ${message}`, `color: ${color}`);
};

export const calculateFib = function (n) {
  if (n === 0 || n === 1) return n;
  if (n > 42) throw Error("I can't go higher than 42 without breaking your computer.");
  return calculateFib(n - 1) + calculateFib(n - 2);
};
