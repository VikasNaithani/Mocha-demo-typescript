const assert = require("assert");
const { qase } = require("mocha-qase-reporter/mocha");

describe("Example: attach.spec.js", function () {
  it("Test result with attachment", function () {
    /*
    // To attach a single file
    this.attach({ paths: "./attachments/test-file.txt" });

    // Add multiple attachments.
    this.attach({
      paths: ["/path/to/file", "/path/to/another/file"],
    });
    */

    // Upload file's contents directly from code.
    this.attach({
      name: "attachment.txt",
      content: "Example text",
      contentType: "text/plain",
    });

    assert.strictEqual(1, 1);
  });
});
