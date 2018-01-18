$(document).ready(function(){
  $("#pigForm").submit(function(event){
    event.preventDefault();

    var sentence = $("input#sentence").val();
    var vowels = ["a", "e", "i", "o", "u", "y"];
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var result = "";
    var consonant = "";
    var extract = "";
    var breakCheck = false;
    debugger;
    for (var h = 0; h < numbers.length; h++) {
      if (sentence.charAt(0) ===  numbers[h]) {
        result = sentence;
        break;
      } else if ((sentence.startsWith("y") === true) || (sentence.startsWith("Y") === true)) {
          for (var l = 0; l < sentence.length; l++) {
            for (var k = 0; k < (vowels.length - 1); k++) {
              if (sentence.charAt(l) === vowels[k]) {
                var vowelIndex = l;
                breakCheck = true;
                break;
              } else {
                continue;
              }
            }
            if (breakCheck === true) {
              consonant = sentence.slice(0, vowelIndex);
              extract = sentence.slice(vowelIndex);
              result = extract.concat(consonant, "ay");
              break;
            }
          } break;
        } else {
        for (var i = 0; i < vowels.length; i++) {
          if (sentence.charAt(0) === vowels[i]) {
            result = sentence.concat("way");
            break;
          } else {
            for (var l = 0; l < sentence.length; l++) {
          	  for (var k = 0; k < vowels.length; k++) {
          		  if (sentence.charAt(l) === vowels[k]) {
              	  var vowelIndex = l;
                  breakCheck = true;
                  break;
                } else {
                  continue;
                }
              }
              if (breakCheck === true) {
                break;
              }
            }
            consonant = sentence.slice(0, vowelIndex);
            extract = sentence.slice(vowelIndex);
            result = extract.concat(consonant, "ay");

            if ((consonant.endsWith("q") === true) && (extract.startsWith("u") === true)) {
              vowelIndex += 1;
              consonant = sentence.slice(0, vowelIndex);
              extract = sentence.slice(vowelIndex);
              result = extract.concat(consonant, "ay");
            }
          }
        }
      }
    }

    $(".output").text(result);
  });
});
