import { strict as assert } from 'assert';
import { qase } from 'mocha-qase-reporter/mocha';

interface TestCase {
  browser: string;
  username: string;
  password: string;
}

const testCases: TestCase[] = [
  { browser: 'Chromium', username: '@alice', password: '123' },
  { browser: 'Firefox', username: '@bob', password: '456' },
  { browser: 'Webkit', username: '@charlie', password: '789' }
];

describe('TEstmocha', function () {
  testCases.forEach(({ browser }) => {
    it(`Test login with ${browser}`, function (this: Mocha.Context) {
      this.parameters?.({ Browser: browser });

      assert.equal(1, 1); // Simulated assertion
    });
  });
});

describe('Group Parameter Test Suite', function () {
  testCases.forEach(({ username, password }) => {
    it(`Test login with ${username}`, function (this: Mocha.Context) {
      this.groupParameters?.({
        Username: username,
        Password: password
      });

      assert.equal(1, 1); // Simulated assertion
    });
  });
});