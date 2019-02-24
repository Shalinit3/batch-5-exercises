function doesExist(array, elementToSearch) {
  return array.findIndex(value => value === elementToSearch) > -1;
}

function diffArray(arrayOne, arrayTwo) {
  const diffOne = arrayOne.filter(value => !doesExist(arrayTwo, value));
  const diffTwo = arrayTwo.filter(value => !doesExist(arrayOne, value));
  return [...diffOne, ...diffTwo];
}

export {
  diffArray,
};
