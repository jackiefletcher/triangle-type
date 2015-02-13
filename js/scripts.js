var triangle = function(a, b, c) {

var ab = a + b;
var bc = b + c;
var ca = c + a;

  if ( ab < c || bc < a || ca < b) {
    alert("What you entered is not a triangle")
    return "not a triangle"
  } else if (a === b && b === c && c === a) {
    return "equilateral"
  } else if (a !== b && b !== c && c !== a) {
    return "scalene"
  } else {
    return "isoceles"
  }
}

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    var sideA = parseInt($("input#a").val());
    var sideB = parseInt($("input#b").val());
    var sideC = parseInt($("input#c").val());
    var result = triangle(sideA, sideB, sideC);

    $(".triangle-type").text(result);

    $("#result").show();
    event.preventDefault();
  });

});
