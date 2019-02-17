function applyOperator(...args) {
  const operator = args[0];
  const numbers = args.slice(1);
  if (!operator) {
    throw new Error('No operator given');
  }
  if (!numbers.length) {
    return 0;
  }
  const expression = operator === '-' ? operator + numbers.join(operator) : numbers.join(operator);
  /* eslint-disable no-eval */
  return operator === '/' ? Number(eval(expression).toFixed(4)) : eval(expression);
}

export default applyOperator;
