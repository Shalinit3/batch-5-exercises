function hasKeyAndValue(object, key) {
  return Object.prototype.hasOwnProperty.call(object, key) && object[key];
}

function truthCheck(array, key) {
  const objectWithKey = array.filter(value => hasKeyAndValue(value, key));
  return objectWithKey.length === array.length;
}

export {
  truthCheck,
};
