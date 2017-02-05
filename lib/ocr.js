const numbers = [
  " _ " +
  "| |" +
  "|_|",

  "   " +
  "  |" +
  "  |",

  " _ " +
  " _|" +
  "|_ ",

  " _ " +
  " _|" +
  " _|",

  "   " +
  "|_|" +
  "  |",

  " _ " +
  "|_ " +
  " _|",

  " _ " +
  "|_ " +
  "|_|",

  " _ " +
  "  |" +
  "  |",

  " _ " +
  "|_|" +
  "|_|",

  " _ " +
  "|_|" +
  " _|",
];

const numberByOCRText = function(text) {
  return numbers.indexOf(text);
};

const accountNumberFromFourLines = function(lines) {
  const [lineOne, lineTwo, lineThree,] = lines;
  const ocrNumbers = [];
  for (let i = 0; i<9; i++) {
    let pos = i*3;
    const ocrNumber = lineOne.slice(pos, pos+3) +
                   lineTwo.slice(pos, pos+3) +
                   lineThree.slice(pos, pos+3);
    const number = numberByOCRText(ocrNumber);
    ocrNumbers.push(number);
  }
  return ocrNumbers.join('');
}

const isValidAccountNumber = function(accountNumber) {
  return checksum(accountNumber) % 11 === 0;
}
const checksum = function(accountNumber) {
  let total = 0;
  for (let i=0; i<9; i++) {
    let multiplier = 9 - i;
    total += accountNumber[i] * multiplier;
  }
  return total;
}
module.exports = {
  numberByOCRText,
  accountNumberFromFourLines,
  checksum,
  isValidAccountNumber
};
