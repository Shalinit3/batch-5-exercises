
function parseMs(milliseconds) {
  const seconds = Math.trunc(milliseconds / 1000);
  const minutes = Math.trunc(seconds / 60);
  const hours = Math.trunc(minutes / 60);
  const days = Math.trunc(hours / 24);

  return {
    days,
    hours: hours % 24,
    minutes: minutes % 60,
    seconds: seconds % 60,
    milliseconds: milliseconds % 1000,
  };
}

export {
  parseMs,
};
