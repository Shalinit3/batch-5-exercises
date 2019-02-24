function shiftString(value) {
  const regex = /[A-Za-z]/g;
  if (value.match(regex)) {
    let charCode = value.charCodeAt(0);
    if ((charCode + 13) > 90) {
      charCode = 64 + ((charCode + 13) % 90);
      return String.fromCharCode(charCode);
    }
    return String.fromCharCode(charCode + 13);
  }
  return value;
}
function rot13(string) {
  const alphabets = string.split('');
  return alphabets.map(shiftString).join('');
}

export {
  rot13,
};
