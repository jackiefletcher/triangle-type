var triangle = function(a, b, c) {

  if (a === b, b === c, c === a) {
    return "equilateral"
  } else if (a !== b && b !== c && c !== a) {
    return "scalene"
  } else {
    return "isoceles"
  }

}
