$(document).ready(function(){
  $("#pigForm").submit(function(event){
    event.preventDefault();

    var sentence = $("input#sentence").val();
    var vowels = ["a", "e", "i", "o", "u"];
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var result = "";
    var consonant = "";
    var extract = "";

    for (var h = 0; h < numbers.length; h++) {
      if (sentence.charAt(0) ===  numbers[h]) {
        result = sentence;
        break;
      } else {
        for (var i = 0; i < vowels.length; i++) {
          if (sentence.charAt(0) === vowels[i]) {
            result = sentence.concat("way");
          } else {
            consonant = sentence.charAt(0);
            extract = sentence.slice(1);
            result = extract.concat(consonant, "ay");
          }
        }
      }
    }
    debugger;
    for (var l = 0; l < sentence.length; l++) {
  	  for (var k=0; k <vowels.length; k++) {
  		  if (sentence.charAt(l) === vowels[k]) {
      	  var sentenceIndex = l;
          var breakCheck = true;
          debugger;
          break;
        } else {
          continue;
        }
      }
      if (breakCheck === true) {break;}
    }

    alert(sentenceIndex);

    $(".output").text(result);
  });
});
