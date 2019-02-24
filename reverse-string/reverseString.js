
function reverseString(string) {
  const array = string.split('');
  const reversedString = array.reduce((acc, value) => [value, ...acc], []);
  return reversedString.join('');
}

export {
  reverseString,
};
