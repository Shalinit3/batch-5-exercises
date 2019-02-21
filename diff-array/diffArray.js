function doesExist(array, elementToSearch) {
  console.log(elementToSearch, array.findIndex(value => value === elementToSearch) > -1)
  return array.findIndex(value => value === elementToSearch) > -1;
}

function diffArray(arrayOne, arrayTwo) {
  const longerArray = arrayOne.length > arrayTwo.length ? arrayOne : arrayTwo;
  const shorterArray = arrayOne.length < arrayTwo.length ? arrayOne : arrayTwo;
  return longerArray.filter(value => !doesExist(shorterArray, value));
}

export {
  diffArray,
};
