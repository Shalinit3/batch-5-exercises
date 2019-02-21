
function bouncer(args) {
  return args.filter(value => !!value);
}

export {
  bouncer,
};
