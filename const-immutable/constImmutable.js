
function constImmutable() {
  const account = {
    temp: null,
    username: 'pesto',
    get password() {
      return 'initialPassword';
    },
    set password(value) {
      this.temp = value;
    },
  };
  account.password = 's3cret';
  return account.password;
}

export {
  constImmutable,
};
