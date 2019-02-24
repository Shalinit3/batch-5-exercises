function checkIfRotated(stringOne, stringTwo) {
  const firstCharacter = stringOne[0];
  const remainingString = stringOne.slice(1);
  const rotatedStringOne = remainingString + firstCharacter;
  if (rotatedStringOne === stringTwo) {
    return true;
  }
  return checkIfRotated(rotatedStringOne, stringTwo);
}

function rotatedString(stringOne, stringTwo) {
  if (stringOne === stringTwo) {
    return false;
  }
  return checkIfRotated(stringOne, stringTwo);
}

export {
  rotatedString,
};
