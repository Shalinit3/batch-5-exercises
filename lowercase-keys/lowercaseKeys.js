function lowercaseKeys(object) {
  return Object.keys(object).reduce(
    (acc, key) => ({ ...acc, [key.toLowerCase()]: object[key] }),
    {},
  );
}

export { lowercaseKeys };
