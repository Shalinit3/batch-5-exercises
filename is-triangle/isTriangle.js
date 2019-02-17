function isTriangle(sideOne, sideTwo, sideThree) {
  const sumOfOneAndTwo = sideOne + sideTwo;
  const sumOfOneAndThree = sideOne + sideThree;
  const sumOfTwoAndThree = sideTwo + sideThree;
  return sumOfOneAndTwo > sideThree && sumOfOneAndThree > sideTwo && sumOfTwoAndThree > sideThree;
}

export {
  isTriangle,
};
