const assert = require("assert");
const { qase } = require("mocha-qase-reporter/mocha");

describe("Example: id.spec.js", function () {
  it(qase(1, "Test with Qase Id"), function () {
    assert.strictEqual(1, 1);
  });
});
