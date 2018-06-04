const fizzbuzz = function (n) {
  if (n % 3 === 0 && n % 5 === 0) {
    return "fizzbuzz";
  }

  if (n % 3 === 0) {
    return "fizz";
  }

  if (n % 5 === 0) {
    return "buz";
  }

  return n;
};

module.exports = fizzbuzz;
