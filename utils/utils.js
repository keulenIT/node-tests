// functions to be tested
// can also be written on one line because it's a single return statement
function add(a, b) {
  return a + b;
}

function square(x) {
  return x * x;
}

function divide(a, b) {
  return a / b;
}

function expandObject(b) {
  let a = {
    test: 1,
  };
  let c = { ...a, ...b };
  return c;
}

module.exports = {
  add,
  square,
  divide,
  expandObject,
};
