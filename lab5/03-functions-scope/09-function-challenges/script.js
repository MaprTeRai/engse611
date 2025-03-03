const getCelsius = fahrenheit => ((fahrenheit - 32) * 5) / 9;

console.log(`The temperature is ${getCelsius(32)} \xB0C`); // The temperature is 0 °C
console.log(`The temperature is ${getCelsius(100)} \xB0C`); // The temperature is 37.777... °C

const minMax = arr => ({
  min: Math.min(...arr),
  max: Math.max(...arr)
});

console.log(minMax([1, 2, 3, 4, 5])); // { min: 1, max: 5 }
console.log(minMax([55, 32, 43, 54, 65, 76, 87, 98, 109])); // { min: 32, max: 109 }

((length, width) => {
  const area = length * width;
  console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`);
})(10, 5);

// Output: The area of a rectangle with a length of 10 and a width of 5 is 50.