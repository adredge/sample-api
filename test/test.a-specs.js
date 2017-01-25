"use strict"

const acceptanceSpecsHelper = require('./acceptance-specs-helper');

describe('/', () => {
    context('when rolling a six-sided die', () => {
        let actual;

        beforeEach(() => {
            return acceptanceSpecsHelper.makeApiCall('roll-a-die/6').then(data => actual = data)
        });

        it('should return a result', () => {
            expect(actual.result).to.exist;
        });

        it('should return a number less than or equal to 6', () => {
            expect(actual.result).to.be.below(7);
        });

        it('should return a number greater than or equal to 1', () => {
            expect(actual.result).to.be.above(0);
        })
    })
});