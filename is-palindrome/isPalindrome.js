function isPalindrome(string) {
  const regex = /[A-Za-z0-9]/g;
  const onlyAlphabetsAndNumbers = string.toString().match(regex).map(value => value.toLowerCase());
  const reversedString = onlyAlphabetsAndNumbers.reduce((acc, value) => [value, ...acc], []);
  return onlyAlphabetsAndNumbers.join() === reversedString.join();
}

export {
  isPalindrome,
};
