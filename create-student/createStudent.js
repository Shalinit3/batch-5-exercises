
function createStudent({ likesJavaScript = true, likesES2015 = true } = {}) {
  if (likesJavaScript === false && likesES2015 === false) {
    return 'The student does not like much...';
  }
  if (likesJavaScript && likesES2015) {
    return 'The student likes JavaScript and ES2015';
  }
  return `The student likes ${likesJavaScript ? 'JavaScript!' : ''}${likesES2015 ? 'ES2015!' : ''}`;
}

export {
  createStudent,
};
