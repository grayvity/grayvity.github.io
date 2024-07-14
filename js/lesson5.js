const a = [1, 3, 5, 3, 3];
const b = a.map(function (elem, i, array) {
  return elem + 3;
});
console.log(b);
const c = a.filter(function (elem, i, array) {
  return elem !== 3;
});
console.log(c);
const d = a.reduce(function (prevValue, elem, i, array) {
  return prevValue + elem;
});
console.log(d);

const d2 = a.find(function (elem) {
  return elem > 1;
}); //3
const d3 = a.findIndex(function (elem) {
  return elem > 1;
}); //1
console.log(d2);
console.log(d3);
