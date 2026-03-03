// Задание 1

function sumOfSquares(A, B) {
  let sum = 0;
  for (let i = A; i <= B; i += 1) {
    sum += i * i;
  }
  return sum;
}

export { sumOfSquares };

// Задание 2

function power(A, N) {
  let result = 1;
  for (let i = 0; i < N; i += 1) {
    result *= A;
  }
  return result;
}

export { power };

// Задание 3

function factorialProduct(N) {
  let product = 1.0;
  for (let i = 1; i <= N; i += 1) {
    product *= i;
  }
  return product;
}

export { factorialProduct };
