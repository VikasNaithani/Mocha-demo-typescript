module.exports = {
  require: ['ts-node/register'],   // ⬅️ compile .ts on the fly
  extension: ['ts'],
  spec: 'test/**/*.spec.ts',
  reporter: 'mocha-qase-reporter',
  timeout: 5000
};