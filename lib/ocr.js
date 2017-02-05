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
  "  |",
];

module.exports = {
  numberByOCRText: function(text) {
    return numbers.indexOf(text);
  }
};
