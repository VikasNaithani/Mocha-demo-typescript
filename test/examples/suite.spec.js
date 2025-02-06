const assert = require("assert");
const { qase } = require("mocha-qase-reporter/mocha");

describe("Example: suite.spec.js", function () {
  it("Test with a defined suite", function () {
    this.suite("Example: suite.spec.js\tThis shall be a suite name");
    assert.strictEqual(1, 1);
  });

  it("Test within multiple levels of suite", function () {
    this.suite(
      "Example: suite.spec.js\tThis shall be a suite name\tChild Suite",
    );
    assert.strictEqual(1, 1);
  });
});
