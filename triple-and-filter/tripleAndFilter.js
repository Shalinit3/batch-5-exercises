function isDivisibleByFive(value) {
  return value % 5 === 0;
}
function tripleAndFilter(array) {
  return array.map(value => value * 3)
    .reduce((acc, value) => (isDivisibleByFive(value) ? [...acc, value] : [...acc]), []);
}

export {
  tripleAndFilter,
};
