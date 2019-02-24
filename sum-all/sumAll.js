function calculateSum(smallerNumber, largerNumber) {
  if (smallerNumber > largerNumber) {
    return 0;
  }
  return largerNumber + calculateSum(smallerNumber, largerNumber - 1);
}
function sumAll(array) {
  const largerNumber = array[0] > array[1] ? array[0] : array[1];
  const smallerNumber = array[0] < array[1] ? array[0] : array[1];
  return calculateSum(smallerNumber, largerNumber);
}

export {
  sumAll,
};
