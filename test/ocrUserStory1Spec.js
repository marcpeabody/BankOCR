const {expect} = require('chai');
const {accountNumberFromFourLines} = require('../lib/ocr');

describe('OCR User Story 1', function() {
  describe('tranlates four lines into multiple numbers', function() {
    it('for all zeros', function() {
      const zeros = [
        " _  _  _  _  _  _  _  _  _ ",
        "| || || || || || || || || |",
        "|_||_||_||_||_||_||_||_||_|",
        ""
      ];
      const actual = accountNumberFromFourLines(zeros);
      expect(actual).to.equal("000000000");
    });
    it('for all ones', function() {
      const ones = [
        "                           ",
        "  |  |  |  |  |  |  |  |  |",
        "  |  |  |  |  |  |  |  |  |",
        ""
      ];
      const actual = accountNumberFromFourLines(ones);
      expect(actual).to.equal("111111111");
    });
    it('for all twos', function() {
      const twos = [
        " _  _  _  _  _  _  _  _  _ ",
        " _| _| _| _| _| _| _| _| _|",
        "|_ |_ |_ |_ |_ |_ |_ |_ |_ ",
        ""
      ];
      const actual = accountNumberFromFourLines(twos);
      expect(actual).to.equal("222222222");
    });
    it('for all threes', function() {
      const threes = [
        " _  _  _  _  _  _  _  _  _ ",
        " _| _| _| _| _| _| _| _| _|",
        " _| _| _| _| _| _| _| _| _|",
        ""
      ];
      const actual = accountNumberFromFourLines(threes);
      expect(actual).to.equal("333333333");
    });
    it('for all fours', function() {
      const fours = [
        "                           ",
        "|_||_||_||_||_||_||_||_||_|",
        "  |  |  |  |  |  |  |  |  |",
        ""
      ];
      const actual = accountNumberFromFourLines(fours);
      expect(actual).to.equal("444444444");
    });
    it('for all fives', function() {
      const fives = [
        " _  _  _  _  _  _  _  _  _ ",
        "|_ |_ |_ |_ |_ |_ |_ |_ |_ ",
        " _| _| _| _| _| _| _| _| _|",
        ""
      ];
      const actual = accountNumberFromFourLines(fives);
      expect(actual).to.equal("555555555");
    });
    it('for all sixes', function() {
      const sixes = [
        " _  _  _  _  _  _  _  _  _ ",
        "|_ |_ |_ |_ |_ |_ |_ |_ |_ ",
        "|_||_||_||_||_||_||_||_||_|",
        ""
      ];
      const actual = accountNumberFromFourLines(sixes);
      expect(actual).to.equal("666666666");
    });
    it('for all sevens', function() {
      const sevens = [
        " _  _  _  _  _  _  _  _  _ ",
        "  |  |  |  |  |  |  |  |  |",
        "  |  |  |  |  |  |  |  |  |",
        ""
      ];
      const actual = accountNumberFromFourLines(sevens);
      expect(actual).to.equal("777777777");
    });
    it('for all eights', function() {
      const eights = [
        " _  _  _  _  _  _  _  _  _ ",
        "|_||_||_||_||_||_||_||_||_|",
        "|_||_||_||_||_||_||_||_||_|",
        ""
      ];
      const actual = accountNumberFromFourLines(eights);
      expect(actual).to.equal("888888888");
    });
    it('for all nines', function() {
      const nines = [
        " _  _  _  _  _  _  _  _  _ ",
        "|_||_||_||_||_||_||_||_||_|",
        " _| _| _| _| _| _| _| _| _|",
        ""
      ];
      const actual = accountNumberFromFourLines(nines);
      expect(actual).to.equal("999999999");
    });
    it('for one through nines', function() {
      const oneThruNine = [
        "    _  _     _  _  _  _  _ ",
        "  | _| _||_||_ |_   ||_||_|",
        "  ||_  _|  | _||_|  ||_| _|",
        ""
      ];
      const actual = accountNumberFromFourLines(oneThruNine);
      expect(actual).to.equal("123456789");
    });
    
  });

});
