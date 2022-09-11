// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//function reverse(str) {
//debugger;
//return str.split("").reduce((rev, char) => char + rev, "");
//}
//reverse("dfca");

//1 function reverse(str) {
//const arr = str.split("");
//arr.reverse();
//return arr.join("");}

//2 function reverse(str) {
//return str.split("").reverse().join("");}

function reverse(str) {
  
  let rev = "";
  for (let char of str) {
    rev = char + rev;
    debugger;
  }
  return rev;
}

reverse("tuipwj");

module.exports = reverse;
