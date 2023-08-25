// repetition meta characters
// "+" - matches one or more occurences
// "?" - matches zero or one occurrences
// "*" - matches zero or one occurrences 

const string1="Steve Normal Jeff amanda Sherry K";

console.log(string1.match(/[A-Z][a-z]+/g)); // [ 'Steve', 'Normal', 'Jeff', 'Sherry' ]
console.log(string1.match(/[A-Z][a-z]?/g)); // [ 'St', 'No', 'Je', 'Sh', 'K' ]
console.log(string1.match(/[A-Z][a-z]*/g)); // [ 'Steve', 'Normal', 'Jeff', 'Sherry', 'K' ]

const string2="He picked apples under the apple tree";
console.log(string2.match(/apples+/g)); // [ 'apples' ]
console.log(string2.match(/apples?/g)); // [ 'apples', 'apple' ]
console.log(string2.match(/apples*/g)); // [ 'apples', 'apple' ]

const string3="warning, warning!!!!!! ";
console.log(string3.match(/warning!+/g)); // [ 'warning!!!!!!' ]
console.log(string3.match(/warning!?/g)); // [ 'warning', 'warning!' ]
console.log(string3.match(/warning!*/g)); // [ 'warning', 'warning!!!!!!' ]

// Greediness and Laziness
// By default regular expressions are greedy

const textWithTwoParagraphs="<p>This is the first paragraph.</p><p>Paragraph number two.</p>";
const greedyRegex=/<p>.*<\/p>/g; // by default
const lazyRegex=/<p>.*?<\/p>/g; // let's make it lazy 

console.log(textWithTwoParagraphs.match(greedyRegex)); // one match [ '<p>This is the first paragraph.</p><p>Paragraph number two.</p>' ]
console.log(textWithTwoParagraphs.match(lazyRegex)); // two matches ['<p>This is the first paragraph.</p>', '<p>Paragraph number two.</p>']

//specifying the repetition amount
// "{}" - to specify the repetion amount
// "{min, max}" - matches min to max occurrences
// "{min}" - matches min occurrences
// "{min,}" - matches min or more occurrences

const stringWithNumber="this is correct number 529-66-9898";
const phoneNumberRegex=/\d{3}-\d{2}-\d{4}/g;

const stringWithHex="These are hex colors #ff0000  #C0C0C0";
const hexRegex=/#[0-9a-f]{6}/gi;
console.log(stringWithHex.match(hexRegex)); // [ '#ff0000', '#C0C0C0' ]