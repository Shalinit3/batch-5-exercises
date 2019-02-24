function steamrollArray(array) {
  return array.reduce(
    (acc, value) => acc.concat(Array.isArray(value) ? steamrollArray(value) : value), [],
  );
}

export { steamrollArray };
