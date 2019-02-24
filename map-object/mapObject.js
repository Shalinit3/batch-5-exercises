
function mapObject(object, func) {
  return Object.entries(object)
    .reduce((acc, value) => ({ ...acc, [value[0]]: func(value[1]) }), {});
}

export {
  mapObject,
};
