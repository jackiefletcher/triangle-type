var triangle = function(a, b, c) {

var ab = a + b;
var bc = b + c;
var ca = c + a;

  if ( ab < c || bc < a || ca < b) {
    return "that is not a triangle"
  } else if (a === b, b === c, c === a) {
    return "equilateral"
  } else if (a !== b && b !== c && c !== a) {
    return "scalene"
  } else {
    return "isoceles"
  }

}
