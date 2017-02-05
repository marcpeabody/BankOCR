const {expect} = require('chai');
const {getReadoutsForLines} = require('../lib/ocr');
const fs = require('fs');
require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};
var testData = require('./useCase3Data.txt');

describe('OCR User Story 3', function() {
  it('reads out the lines', function() {
    const lines = testData.split('\n');
    const readouts = getReadoutsForLines(lines);
    // console.log(readouts)

    expect(readouts[0]).to.equal("000000051");
    
    // ran out of time
    // still do not have ERR or ILL
    //
    // expecting the following from the test file
    // 000000051
    // 000000052 ERR
    // 49006771? ILL
    // 1234?678? ILL
  });
});
