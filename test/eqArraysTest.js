const chai = require("chai");
const assert = chai.assert;
const eqArrays = require("../eqArrays");

describe('eqArrays', () => {
  it("returns true if the arrays are identical", () => {
    assert.strictEqual(eqArrays([1,2,3], [1,2,3]), true);
  });
  it("returns false if the arrays are not identical", () => {
    assert.strictEqual(eqArrays([1,2,3], [1,2,5]), false);
  });
});