let tracking_task_number = 2;

const validate = (callback, args, expected) => {
  const actual = callback(...args);

  let resultMessage = `${tracking_task_number}) Expected output of ${
    callback.name
  }(${args.join(", ")}) is ${expected}. Actual value is ${actual}`;

  tracking_task_number++;
  let result = expected === actual;
  if (expected instanceof Array) {
    result = true;
    for (let i = 0; i < expected.length; i++)
      if (expected[i] !== actual[i]) {
        result = false;
        break;
      }
  }

  return `${resultMessage} ${result ? "Test Succeeded." : "Test Failed"}`;
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

const reverse = (str) => {
  return str.split("").reverse().join("");
};

const findLongestWord = (words) => {
  if (words.length === 0) return 0;

  return words.reduce((maxLength, word) => {
    return Math.max(maxLength, word.length);
  }, 0);
};

const filterLongWords = (words, i) => {
  return words.filter((word) => word.length > i);
};

const testCases = [
  validate(max, [10, 20], 20),
  validate(maxOfThree, [10, 20, 15], 20),
  validate(isVowel, ["a"], true),
  validate(sum, [[1, 2, 3, 4]], 10),
  validate(multiply, [[1, 2, 3, 4]], 24),
  validate(reverse, ["Uguumur"], "rumuugU"),
  validate(
    findLongestWord,
    [["short", "not the longest", "1234567890thisisthelongest"]],
    26
  ),
  validate(
    filterLongWords,
    [["one", "two", "Answer1", "Answer2"], 5],
    ["Answer1", "Answer2"]
  ),
];

testCases.forEach((testCase) => console.log(testCase));

const a = [1, 3, 5, 3, 3];
const multipliedByTen = a.map(function (elem) {
  return elem * 10;
});
console.log("Multiplied by ten: ", multipliedByTen);

const equalToThree = a.filter(function (elem) {
  return elem === 3;
});
console.log("Equals to three: ", equalToThree);

const multiplied = multiply(a);
console.log("Multiplied all elements: ", multiplied);
