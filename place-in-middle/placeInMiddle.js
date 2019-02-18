
function placeInMiddle(arrayOne, arrayTwo) {
  const midPoint = Math.trunc(arrayOne.length / 2);
  arrayOne.splice(midPoint, 0, ...arrayTwo);
  return arrayOne;
}

export {
  placeInMiddle,
};
