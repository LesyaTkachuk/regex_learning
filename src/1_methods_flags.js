const txt =
  "Hello world! Programming course always starts with a hello world example";

// regular expression is an object
// two ways to create regular expression, function constructor and literal syntax
const regex1 = new RegExp("hello"); // 'hello' is apattern here
const regex2 = /world/; // 'world' is a pattern here, fist slash appoint start of regular expression, second - end

console.log(regex1); // /hello/
console.log(regex2); // /world/

// methods - there are two on the regex objects and four on string object wrapper;
// regex object methods
// 1 - regex.test(str) - will return true or false if the pattern matches in the string
console.log(regex1.test(txt)); // true
console.log(regex2.test(txt)); // false

// 2 - regex.exect(str) - will return an array of matches, index were the match appear and input
console.log(regex1.exec(txt)); // ['hello', index: 53, input: 'Hello world! ...']
console.log(regex2.exec(txt)); // ['world', index: 6, input: 'Hello world! ...']

// string methods which use regex
// 3 - str.match(regex) - produce the same output as exec
console.log(txt.match(regex1)); // ['hello', index: 53, input: 'Hello world! ...']
console.log(txt.match(regex2)); // ['world', index: 6, input: 'Hello world! ...']

// 4 - str.search(regex) - return an index of the match
console.log(txt.search(regex1)); // 53
console.log(txt.search(regex2)); // 9

// 5 - str.replace(regex, str) - return a new string with a replaced str
console.log(txt.replace(regex1, "hi")); // Hello world! Programming course always starts with a hi world example
console.log(txt.replace(regex2, "universe")); // Hello universe! Programming course always starts with a hello world example
console.log(txt.replaceAll(/world/g, "universe")); // Hello universe! Programming course always starts with a hello universe example
// initial string remains the same as string is immutable
console.log(txt); // Hello world! Programming course always starts with a hello world example

// 6 - str.split( regex) - conxert string into array,an argument appoint on the delimiter
console.log(txt.split(regex1)); // ['Hello world! Programming course always starts with a ', ' world example']
console.log(txt.split(/\s/)); // ['Hello', 'world!', 'Programming', 'course', 'always', 'starts', 'with', 'a', 'hello', 'world', 'example']

// 7 -regex.toString() - return exect string
console.log(regex1.toString()); // /hello/

// regular expression flags, they effect the pattern matching
// /pattern/flag or new RegExp("pattern","flag")

// g -glabal, match more than one occurance
// i - case insensitive match, case doesn't matter
// m - multi-line match

let regex3 = /s\s/; // first match "s "
let regex4 = /s\s/g; // all matches "s "
let regex5 = /s\s/gi; // all matches "s " or "S "
console.log(txt.match(regex3)); // ['s ', index: 37, ...]
console.log(txt.match(regex4)); // ['s ', 's ']
console.log(txt.match(regex5)); // ['s ', 's ']

// https://www.regexpal.com/ the site where everyone can test regular expressions
