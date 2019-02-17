
function cacheFunction(callBack) {
  const cache = {};
  return (args) => {
    if (!Object.prototype.hasOwnProperty.call(cache, args)) {
      cache[args] = callBack(args);
    }
    return cache[args];
  };
}

export {
  cacheFunction,
};
