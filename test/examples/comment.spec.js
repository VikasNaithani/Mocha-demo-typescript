const assert = require("assert");
const { qase } = require("mocha-qase-reporter/mocha");

describe("Example: comment.spec.js", function () {
  it("Test with Qase comment", function () {
    /*
     * Please note, this comment is added to a Result, not to the Test case.
     */

    this.comment("This comment will be added to the test result");

    assert.strictEqual(1, 1);
  });
});
