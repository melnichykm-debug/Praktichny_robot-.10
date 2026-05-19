const assert = require('assert');
const { getConfig } = require('./src/config');

process.env.PORT = '3000';
process.env.NODE_ENV = 'test';

const config = getConfig();

assert.strictEqual(config.port, 3000);
assert.strictEqual(config.nodeEnv, 'test');

console.log('All tests passed');
