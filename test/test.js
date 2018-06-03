const { expect } = require("chai");
const fizzbuzz = require("../src");

describe("fizzbuzz", () => {
  it("", () => {
    expect(fizzbuzz(1)).to.eql(1);
    expect(fizzbuzz(6)).to.eql("fizz");
    expect(fizzbuzz(10)).to.eql("buzz");
    expect(fizzbuzz(15)).to.eql("fizzbuzz");
  });
});
