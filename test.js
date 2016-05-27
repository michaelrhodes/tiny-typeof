var test = require('tape')
var t = require('./index')

test('it works', function (assert) {
  assert.equal(t(false), 'boolean')
  assert.equal(t('a'), 'string')
  assert.equal(t(0), 'number')
  assert.equal(t({}), 'object')
  assert.equal(t([]), 'array')
  assert.equal(t(function (){}), 'function')
  assert.equal(t(null), 'null')
  assert.equal(t(void 0), 'undefined')
  assert.equal(t(Number('-')), 'nan')
  assert.equal(t(new Date), 'date')
  assert.equal(t(/asdf/), 'regexp')
  assert.equal(t(arguments), 'arguments')

  if (process.browser) {
    assert.equal(t(document.createElement('div')), 'div')
    assert.equal(t(document.querySelector('*')), 'html')
    assert.equal(t(document.querySelectorAll('*')), 'nodelist')
  }

  assert.end()
})
