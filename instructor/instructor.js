class Instructor {
  constructor() {
    this.name = 'default';
  }

  sayHi() {
    this.name = 'Ram';
  }
}

const instructor = new Instructor();
export { instructor };
