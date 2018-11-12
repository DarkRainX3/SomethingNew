/* eslint-disable quotes */
/* eslint semi: ["error", "always"] */
var thisfunc = function () {
  var result = 6 * 7;
  console.log("6 times 7 is ", result);
}
function multiply (a, b) {
  var result = a * b;
  console.log("a * b is: ", result);
  return result;
}
multiply(4, 5);

function subtract () {
  var result = 5 - 4;
  console.log("5-4 is: ", result);
}
