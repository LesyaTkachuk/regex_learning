// metacharacters
// ^$.*+?=!:|\/()[]{}

//  . - wildcard - represnts any character
const string = "how is that so hot? h t hooh";

const regex1 = /h.t/g;
console.log(string.match(regex1)); //['hat', 'hot', 'h t']

// \ - backslash character appoint that next character should be considered as a literal character and not as the metacharacter
const string2 = "This could be the final word.";
const regex2 = /d./g;
const regex3 = /d\./g;
console.log(string2.match(regex2)); // ['d ', 'd.']
console.log(string2.match(regex3)); // ['d.']

// control characters
// /t - tab
// \v - vertical tab
// \n - newline
// \r carriage return
