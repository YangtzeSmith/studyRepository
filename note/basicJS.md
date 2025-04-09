## Misc
<script src="path/to/script.js"></script>

*解构语法??*

**Syntax**
whitespace
statements
blocks
identifiers
comments
// the whole line
/*  multi lines
    .....
*/
expressions
keywords & reserved keywords

**Values evaluate to fasle**
1. false
2. null
3. undefined
4. ''
5. 0
6. NaN

## Variables

var variableName;
let variableName;
const CONSTANT;

**Variable Scope**
+ Global
+ Local


## Data Types

typeof x | typeof(x)    inquire the data type fo x

**Conversion**
Number(value) | +value
String(value)
'' + value
value.toString()
Boolean(value) | !!value
BigInt(value)

**Primitive**
### Number
Number.MIN_VALUE
Number.MAX_VALUE
Infinity
-Infinity
NaN

0b  Binary
0o  Octal
0x  Hexadecimal

num.toFixed(n)
Number(value)


### String
'....'
"...."
`....${statements}`

string is immutable

str.length
str[pos]    // start from 0


String(value)

### Boolean
true
false

### null
### undefined
### Symbol (2015)
let symbol = Symbol(['description']);

### BigInt (2020)
let ex = 11111111111n;

**Complex**
### Object
let obj = {};
let obj = new Object();

obj.prop
obj[prop]


## Conditionals
if (condition1) {
    statement1;
} else if (condition2) {
    statement2;
} else {
    statement3;
}

switch(expression) {
    case label1:
      statement1;
      break;
    case label2:
      statement2;
      break;
    // ....
    default:
      statementsDefault;
}

## Loops
while (condition) {
    statements;
}

do {
    statements;
} while(condition);

## Errorr handling
