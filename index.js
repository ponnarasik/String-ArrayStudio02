let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

//a) Use the 'includes' method to check to see if the words in each string are separated by commas (,), semicolons (;) or just spaces.

if (protoArray3.includes(',',';',' ' ))
{
  console.log("Yes protoArray3  has ,");
}
else{
  console.log("There are no , in protoArray3");
}

if (protoArray4.includes(',',';',' ' ))
{
  console.log("Yes protoArray4 has ,");
}
else{
  console.log("There are no , in protoArray4");
}
//b) If the string uses commas to separate the words, split it into an array, reverse the entries, and then join the array into a new comma separated string.

let protoArray4New;
if (protoArray4.includes(',')){
   protoArray4New = (protoArray4.split(""));
}
console.log(protoArray4New.reverse());

console.log(protoArray4New.join());
//c) If the string uses semicolons to separate the words, split it into an array, alphabetize the entries, and then join the array into a new comma separated string.
if (protoArray2.includes(';'))
protoArray2New = (protoArray2.split(""));
console.log(protoArray2New);
let [protoArray2Sort] = ([protoArray2New.sort()]);
console.log([protoArray2Sort].join());

//d) If the string uses spaces to separate the words, split it into an array, reverse alphabetize the entries, and then join the array into a new space separated string.



//e) If the string uses ‘comma spaces’ to separate the list, modify your code to produce the same result as part “b”, making sure that the extra spaces are NOT part of the final string.
