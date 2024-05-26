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
function removeItemFromArray(array, item) {
  if (array.indexOf(item) > -1) {
    array.splice(array.indexOf(item), 1);
    return array;
  }
}

function asyncAdd(a, b, callback) {
  setTimeout(() => {
    callback(a + b);
  }, 1000);
}

function asyncSquare(a, callback) {
  setTimeout(() => {
    callback(a * a);
  }, 1000);
}

module.exports = {
  add,
  square,
  divide,
  expandObject,
  removeItemFromArray,
  asyncAdd,
  asyncSquare,
};
