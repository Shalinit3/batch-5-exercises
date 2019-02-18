function valueIfOdd(value) {
  if (value % 2 !== 0) {
    return [value * 2];
  }
  return [];
}
function doubleOddNumbers(array) {
  return array.reduce((acc, value) => [...acc, ...valueIfOdd(value)], []);
}

export {
  doubleOddNumbers,
};
