const fizzbuzz = function(n) {
  // return 'fizz' if n is multiples of 3
  if (n % 3 === 0) {
    return "fizz";
  }

  // return 'fizz' if n is multiples of 5
  if (n % 5 === 0) {
    return "buzz";
  }

  // But, we want to return 'fizzbuzz' if n is multiples of 3 and multiples of 5
  if (n % 3 === 0 && n % 5 === 0) {
    return "fizzbuzz";
  }

  return n;
};

module.exports = fizzbuzz;
