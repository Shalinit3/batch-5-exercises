function binaryAgent(binaryString) {
  const words = binaryString
    .split(' ')
    .map(value => String.fromCharCode(parseInt(value, 2)));
  return words.reduce((acc, value) => acc + value, '');
}

export { binaryAgent };
