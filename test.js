const s2h = require('.');

test('SSH to HTTPS', () => {
  expect(s2h('git@company.com:owner/repo.git')).toEqual('https://company.com/owner/repo.git');
  expect(s2h('git@company.com:owner/repo')).toEqual('https://company.com/owner/repo');
});

test('End with /', () => {
  expect(() => s2h('git@company.com:owner/repo.git/')).toThrow(SyntaxError);
  expect(() => s2h('git@company.com:owner/repo/')).toThrow(SyntaxError);
});

test('Input not string', () => {
  expect(() => s2h({})).toThrow(TypeError);
  expect(() => s2h()).toThrow(TypeError);
});
