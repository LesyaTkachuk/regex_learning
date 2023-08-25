// anchoring meta tags
// "^" - anchor that matches to the start of the line
// "$" - anchor that matches to the end of the line

const longText="The dot is a very powerful regex metacharacter. It allows you to be lazy. Put in a dot, and everything matches just fine when you test the regex on valid data. The problem is that the regex also matches in cases where it should not match. If you are new to regular expressions, some of these cases may not be so obvious at first.";
const startLineRegex=/^The/g;
const endLineRegex=/first.$/g;
console.log(longText.match(startLineRegex)); // [ 'The' ]
console.log(longText.match(endLineRegex)); // [ 'first.' ]

const error='Error';
const error1="Error!";
console.log(error.match(/^error$/gi)); // [ 'Error' ]
console.log(error1.match(/^error$/gi)); // null

// m - multiline flag forces to find a match at the start or at the end of each line (after or before each line break correspondenyly);
const longTextWithLineBreak="The dot is a very powerful regex metacharacter. It allows you to be lazy. Put in a dot, and everything matches just fine when you test the regex on valid data.\nThe problem is that the regex also matches in cases where it should not match. If you are new to regular expressions, some of these cases may not be so obvious at first.";
const startEachLineRegex=/^The/gm;
const endEachLineRegex=/\.$/gm;
console.log(longTextWithLineBreak.match(startEachLineRegex)); // [ 'The', 'The' ]
console.log(longTextWithLineBreak.match(endEachLineRegex)); // [ '.', '.' ]

// word boundaries, they referencing position, not exact character (\w=[0-9a-zA-Z_])
// "\b" - nonword boundary - pattern bounded by a non-word character
// "\B" - word boundary - pattern bounded by a word character

const string="Inplant this idea: plan to plant multiple trees on this planet.";

const nonwordBoundaryRegex=/\bplan\b/g;
const wordBoundaryRegex=/\Bultipl\B/g;
const nonwordBoundaryRegex1=/\bthis idea\b/g;

console.log(string.match(nonwordBoundaryRegex)); // [ 'plan' ]
console.log(string.match(wordBoundaryRegex)); // [ 'ultipl' ] 
console.log(string.match(nonwordBoundaryRegex1)); // [ 'this idea' ]

// Acurate regular expressions rules
// 1 When possible, define the quantity of repeated expressions
// 2 Narrow the scope of repeated expressions
// 3 Provide clear starting and ending points