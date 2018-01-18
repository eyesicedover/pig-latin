$(document).ready(function(){
  $("#pigForm").submit(function(event){
    event.preventDefault();

    var sentence = $("input#sentence").val();
    var vowels = ["a", "e", "i", "o", "u"];
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var result = "";
    var consonant = ""

    //number checker
    for (var h = 0; h < numbers.length; h++) {
      if (sentence.charAt(0) ===  numbers[h]) {
        result = sentence;
      }
    }

    //vowel checker
    for (var i = 0; i < vowels.length; i++) {
      if (sentence.charAt(0) === vowels[i]) {
        result = sentence.concat("way");
      } else {
        consonant = sentence.charAt(0);
      }
    }


    $(".output").text(result);
  });
});
