// character set ([ea])
// [] square brackets indicates a characters set in which only one of the character matches the expression, but only one
// metacharacter inside square brackets don't work (there are few exeptions)
const regex=/gr[ea]y/; // grey or gray, but not greay

// range of character set ([1-4])
// - hyphen is an eception and acts as a range metacharacter in []
const regex1=/[1-4]/; // means 1,2,3,4
const regex2=/[a-e]/; // matches a,b,c,d,e
const regex3=/[1-3a-c-]/; // matches 1,2,3,a,b,c,-

// excluded characters (^) carrot
const regex4=/[^1-3]/; // any symbol except 1,2,3

//metacharacter you may need to escape
// "-" - hyphen - indicates a range (at the start or end or with \ indicates just dash, not range)
// "^" - carrot - indicates which characters or range of characters should be excluded (at the end or with \ indicates exact ^ character instead of negate)
// "/" - hash - means that you want to use exact character instead of meta character
// "]" - right bracket - indicates the end of characters set

// shorthands for character sets
// --inclusive--
// "\d" = [1-9] - indicates digits
// "\w" = [a-zA-Z0-9_] - indicates all digits, all big and small letters and underscore
// "\s" = [ \t\r\n] - spae, tab, carriage return, new line

// --exclusive-- (uppercase equivalent of inclusive shorthands)
// "\D" = [^0-9] - all characters except digits
// "\W" = [^a-zA-Z0-9_] - indicates all characters except all digits, all big and small letters and underscore
// "\S" = [^ \t\r\n] - indicates all characters except spae, tab, carriage return, new line
