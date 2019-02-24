function repeatStringNumTimes(string, noOfRepition) {
  if (noOfRepition < 0) {
    return '';
  }
  return string.repeat(noOfRepition);
}

export {
  repeatStringNumTimes,
};
