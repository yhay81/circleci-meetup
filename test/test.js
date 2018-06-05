const { expect } = require("chai");
const fizzBuzz = require("../src");

describe("fizzBuzz", () => {
  it("should return number as it is when the argument is not multiples of 3 nor multiples of 5", () => {
    expect(fizzBuzz(1)).to.eql(1);
    expect(fizzBuzz(2)).to.eql(2);
    expect(fizzBuzz(4)).to.eql(4);
  });

  it("should return 'Fizz' when the argument is multiples of 3 (and not multiples of 5)", () => {
    expect(fizzBuzz(3)).to.eql("Fizz");
    expect(fizzBuzz(6)).to.eql("Fizz");
    expect(fizzBuzz(9)).to.eql("Fizz");
  });

  it("should return 'Buzz' when the argument is multiples of 5 (and not multiples of 3)", () => {
    expect(fizzBuzz(5)).to.eql("Buzz");
    expect(fizzBuzz(10)).to.eql("Buzz");
    expect(fizzBuzz(20)).to.eql("Buzz");
  });

  it("should return 'Fizz Buzz' when the argument is multiples of 3 and multiples of 5", () => {
    expect(fizzBuzz(15)).to.eql("Fizz Buzz");
    expect(fizzBuzz(30)).to.eql("Fizz Buzz");
    expect(fizzBuzz(45)).to.eql("Fizz Buzz");
  });
});
