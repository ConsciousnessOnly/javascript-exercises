const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5/9;
  const rounder = Math.round(celsius * 10) / 10;
  return rounder;
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = celsius * 9/5 + 32;
  const rounder = Math.round(fahrenheit * 10) / 10;
  return rounder;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
