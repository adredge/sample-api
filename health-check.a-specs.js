"use strict"

const acceptanceSpecsHelper = require('./test/acceptance-specs-helper')

describe('/health-check', function () {
  let actual
  before(() => {
    return acceptanceSpecsHelper.makeApiCall('health-check').then(data => actual = data)
  })

  it('should return 200', () => {
    expect(actual).to.equal('OK')
  })
})
