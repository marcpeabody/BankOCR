const {expect} = require('chai');
const {checksum, isValidAccountNumber} = require('../lib/ocr');


describe('OCR User Story 2', function() {
  describe('checksum', function() {
    it('is 0 for all zeros', function() {
      const sum = checksum("000000000");
      expect(sum).to.equal(0);
    });

    it('is 165 for all one through nine', function() {
      const sum = checksum("123456789");
      const expected = 165; //9+16+21+24+25+24+21+16+9
      expect(sum).to.equal(expected);
    });
  });
  describe('isValidAccountNumber', function() {
    it('is true when checksum is divisible by 11', function(){
      const isValid = isValidAccountNumber("123456789"); // checksum 165
      expect(isValid).to.be.true;
    });
    it('is false when checksum is not divisible by 11', function(){
      const isValid = isValidAccountNumber("123456788"); // checksum 164
      expect(isValid).to.be.false;
    });
  });
});
