// NOTE!!! you need to AWAIT this function to get a result.
// ex. const result = await calculateFib(this.state.numberToGet);
export const calculateFib = async function (n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      let result = doCalculate(n);
      resolve(result);
    });
  });
};

const doCalculate = (n) => {
  if (n === 0 || n === 1) return n;
  if (n > 42) throw Error("I can't go higher than 42 without breaking your computer.");
  return doCalculate(n - 1) + doCalculate(n - 2);
};
