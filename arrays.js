words = ["cat", "in", "hat"];
                    // (element index ,array)
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});