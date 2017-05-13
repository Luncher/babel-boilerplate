import assert from 'assert'

describe('Babel plugin usage test', () => {
  it ('test plugin-add-module-exports', done => {
    const sayExport = require('../src/default_export')
    assert(typeof sayExport === 'function')
    done()
  })
})