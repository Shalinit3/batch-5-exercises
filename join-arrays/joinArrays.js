
function joinArrays(...array) {
  return array.reduce((acc, value) => [...acc, ...value], []);
}

export {
  joinArrays,
};
