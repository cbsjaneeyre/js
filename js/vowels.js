const string = "Привет! Как дела?";
const vowels = ["а", "и", "о", "у", "ы", "э", "е", "ё", "ю", "я"];

const getVowels = function(string2) {
  var filteredVowels = "";

  for (i = 0; i < string2.length; i++) {
    var stringLetters = string2[i].toLowerCase();

    if (vowels.includes(stringLetters)) {
      filteredVowels = filteredVowels + stringLetters;
    }
  }

  return filteredVowels;
};

console.log(getVowels(string));