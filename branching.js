// Задание 1

function incrementIfPositive(number) {
  if (number > 0) {
    return number + 1;
  }
  return number;
}

export { incrementIfPositive };

// Задание 2

function getIndexOfSmallerNumber(number1, number2) {
  if (number1 <= number2) {
    return 1;
  }
  return 2;
}

export { getIndexOfSmallerNumber };

// Задание 3

function findMiddleNumber(number1, number2, number3) {
  if ((number1 >= number2 && number1 <= number3) || (number1 <= number2 && number1 >= number3)) {
    return number1;
  } if ((number2 >= number1 && number2 <= number3) || (number2 <= number1 && number2 >= number3)) {
    return number2;
  }
  return number3;
}

export { findMiddleNumber };
