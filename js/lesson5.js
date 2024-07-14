let tracking_task_number = 2;

const validate = (callback, args, expected) => {
  const actual = callback(...args);

  let resultMessage = `${tracking_task_number}) Expected output of ${
    callback.name
  }(${args.join(", ")}) is ${expected}. Actual value is ${actual}`;

  tracking_task_number++;

  return `${resultMessage} ${
    expected === actual ? "Test Succeeded." : "Test Failed"
  }`;
};

const max = (a, b) => {
  return a > b ? a : b;
};

const maxOfThree = (a, b, c) => {
  return Math.max(a, b, c);
};

const isVowel = (char) => {
  return /^[aeiouAEIOU]$/.test(char);
};

const sum = (array = []) => {
  return array.reduce((accumulator, current) => {
    return accumulator + current;
  }, 0);
};

const multiply = (array = []) => {
  tracking_task_number--;
  return array.reduce((accumulator, current) => {
    return accumulator * current;
  }, 1);
};

const testCases = [
  validate(max, [10, 20], 20),
  validate(maxOfThree, [10, 20, 15], 20),
  validate(isVowel, ["a"], true),
  validate(sum, [[1, 2, 3, 4]], 10),
  validate(multiply, [[1, 2, 3, 4]], 24),
];

testCases.forEach((testCase) => console.log(testCase));

// const a = [1, 3, 5, 3, 3];
// const b = a.map(function (elem, i, array) {
//   return elem + 3;
// });
// console.log(b);
// const c = a.filter(function (elem, i, array) {
//   return elem !== 3;
// });
// console.log(c);
// const d = a.reduce(function (prevValue, elem, i, array) {
//   return prevValue + elem;
// });
// console.log(d);

// const d2 = a.find(function (elem) {
//   return elem > 1;
// }); //3
// const d3 = a.findIndex(function (elem) {
//   return elem > 1;
// }); //1
// console.log(d2);
// console.log(d3);
