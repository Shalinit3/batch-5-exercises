
function limitFunctionCallCount(callBack, limit) {
  let counter = 0;
  return (...args) => {
    counter += 1;
    return counter < limit ? callBack(...args) : null;
  };
}

export {
  limitFunctionCallCount,
};
