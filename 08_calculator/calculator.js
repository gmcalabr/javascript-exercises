const add = (a, b) => (a + b);

const subtract = (a, b) => (a - b);

const sum = function(arr) {
  return arr.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
}

const multiply = function(arr) {
  return arr.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
}

const power = (a, b) => (a ** b);

const factorial = function(num) {
  let final = 1;
  let myArray = [];
  if (num != 0) {
    for (let i = num; i > 0; i--) {
      myArray.push(i);
    };
    final = myArray.reduce((total, currentItem) => {
      return total*currentItem;
    }, 1);
  }
  return final;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
