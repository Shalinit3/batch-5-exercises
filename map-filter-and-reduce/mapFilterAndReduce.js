
function mapFilterAndReduce(array) {
  const filteredArray = array.filter(value => value.firstName.length < 5);
  return filteredArray
    .reduce((acc, value) => ({ ...acc, [value.firstName]: value.firstName.length }), {});
}

export {
  mapFilterAndReduce,
};
