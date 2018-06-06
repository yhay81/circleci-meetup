const fizzBuzz = function(n) {
  // But, we want to return 'Fizz Buzz' if n is multiples of 3 and multiples of 5
  if (n % 3 === 0 && n % 5 === 0) {
    return "Fizz Buzz";
  }

  if (n % 3 === 0) {
    return "Fizz";
  }

  if (n % 5 === 0) {
    return "Buzz";
  }

  return n;
};

module.exports = fizzBuzz;
