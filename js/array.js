const mixedArray = [3,13,74,14,66,15,22,4];

const isEven = function(num) {
  return num % 2 == 0;
};

const filterArray = (mixedArray2, mixedArray3) => {
  const evenNumbers = [];

  mixedArray2.forEach(function(num2) {
    if (mixedArray3(num2)) {
      evenNumbers.push(num2);
    }
  });

  return evenNumbers;
};

console.log(filterArray(mixedArray, isEven));