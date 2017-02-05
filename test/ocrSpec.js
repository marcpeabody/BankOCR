const {expect} = require('chai');
const {numberByOCRText} = require('../lib/ocr');

describe('OCR', function() {
  it('find single zero by text', function() {
    // assume we are only looking for one number
    // assume the fourth blank line is missing
    const zero = " _ " +
                 "| |" +
                 "|_|";
    const actual = numberByOCRText(zero)
    expect(actual).to.equal(0);
  });
  it('find single five by text', function() {
    const five = " _ " +
                 "|_ " +
                 " _|";
    const actual = numberByOCRText(five)
    expect(actual).to.equal(5);
  });
  it('find single nine by text', function() {
    const nine = " _ " +
                 "|_|" +
                 " _|";
    const actual = numberByOCRText(nine)
    expect(actual).to.equal(9);
  });
});
