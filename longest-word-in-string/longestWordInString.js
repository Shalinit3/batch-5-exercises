function longerString(stringLength, string) {
  if (string.length > stringLength) {
    return string.length;
  }
  return stringLength;
}

function longestWordInString(string) {
  const words = string.split(' ');
  return words.reduce(longerString, 0);
}

export {
  longestWordInString,
};
