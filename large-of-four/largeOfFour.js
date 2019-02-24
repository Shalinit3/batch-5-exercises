
function largeOfFour(array) {
  return array.reduce((acc, currentValue) => [...acc, Math.max(...currentValue)], []);
}

export {
  largeOfFour,
};
