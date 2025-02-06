const assert = require("assert");
const { qase } = require("mocha-qase-reporter/mocha");

describe("Example: ignore.spec.js", function () {
  it("This test is executed using Mocha; however, it is NOT reported to Qase", function () {
    this.ignore();
    assert.strictEqual(1, 1);
  });
});
