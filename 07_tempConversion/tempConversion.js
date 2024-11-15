const convertToCelsius = function(farenheit) {
  let celsius = (parseFloat(farenheit) - 32)* (5/9);
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let farenheit = (parseFloat(celsius) * (9/5) + 32);
  return parseFloat(farenheit.toFixed(1));
};






// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
