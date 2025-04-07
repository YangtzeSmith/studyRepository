### variable and tyeps

var variable;
const constantVariable;

number 
string
boolean     true false
undefined
null
[]
{}

### Arrays

**Arrays in Javascript is sparse**
var myArray = [];
myArray[88] = 3;
myArray[0...87] == undefined;    myArray[88] == 3;

#### definition
var myArray = [1, 2, 3];
var theSameArray = new Array(1, 2, 3);

#### access
myArray[0]      the first element in the array

#### misc
##### splicing
objArray = array.splice(pos, len);
var arr = [0,1,2,3,4,5,6,7,8,9];
var splice = arr.splice(3, 5);
splice      // 3, 4, 5, 6, 7
arr         // 0, 1, 2, 8, 9

#### array work like stack
var arrStack = [];
arrStack.push(1);
arrStack.push(2);

console.log(arr.pop());

#### array work like queue
var arrQueue = [];
arrQueue.push(1);   // 1
arrQueue.push(2);   // 1, 2
arrQueue.unshift(0);// 0, 1, 2

arrQueue.shift();   // 1, 2


### Operators
1. +
2. -
3. /
4. *
5. %
