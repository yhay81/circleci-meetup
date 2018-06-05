const { expect } = require("chai");
const fizzbuzz = require("../src");

describe("fizzbuzz", () => {
  it("should return number as it is when the argument is not multiples of 3 nor multiples of 5", () => {
    expect(fizzbuzz(1)).to.eql(1);
    expect(fizzbuzz(2)).to.eql(2);
    expect(fizzbuzz(4)).to.eql(4);
  });

  it("should return 'fizz' when the argument is multiples of 3 (and not multiples of 5)", () => {
    expect(fizzbuzz(3)).to.eql("fizz");
    expect(fizzbuzz(6)).to.eql("fizz");
    expect(fizzbuzz(9)).to.eql("fizz");
  });

  it("should return 'buzz' when the argument is multiples of 5 (and not multiples of 3)", () => {
    expect(fizzbuzz(5)).to.eql("buzz");
    expect(fizzbuzz(10)).to.eql("buzz");
    expect(fizzbuzz(20)).to.eql("buzz");
  });

  it("should return 'fizzbuzz' when the argument is multiples of 3 and multiples of 5", () => {
    expect(fizzbuzz(15)).to.eql("fizzbuzz");
    expect(fizzbuzz(30)).to.eql("fizzbuzz");
    expect(fizzbuzz(45)).to.eql("fizzbuzz");
  });
});
