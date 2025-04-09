### Misc
**Content of all**
1. ECMAScript
2. DOM
3. BOM

**外部脚本**
<script src="path/to/script.js"></script>
当有src属性时，忽略中间代码部分

**Others**
JS engine ignores whitespace.
statements end with semicolon **;**.
block {}
Identifier
case-sensitive
Comment     //  /* */
JS is a dynamically typed language.

使用**d"use strict";**启动严格模式

console.log( message );     输出到控制台

### Test
使用**Mocha**进行自动化测试

Mocha —— 核心框架：提供了包括通用型测试函数 describe 和 it，以及用于运行测试的主函数。
Chai —— 提供很多断言（assertion）支持的库。它提供了很多不同的断言，现在我们只需要用 assert.equal。
Sinon —— 用于监视函数、模拟内建函数和其他函数的库，我们在后面才会用到它。

#### specification
describe('title', function() {

    it('use case description', function() {
        assert.equal(value1, value2);
    });
})

### Interaction
**alert(message)**

**result = prompt(displayText, [defaultValue])**

**confirm(question)**

### variable and types

~n = -(n + 1)

**declaration**
var a1;
let a2;
const CONSTENT;

**原始数据类型**
#### Number
**value**: integer, float, Infinity, -Infinity, NaN

**进制**
0x...   16进制
0b...   2进制
0o...   8进制

num.toString(base)      0 <= base <= 36
Math.floor(num)
Math.ceil(num)
Math.round(num)
Math.trunc(num)
Math.random()
Math.max(a, b, c, ..., n)
Math.min(a, b, c, ..., n)
Math.pow(x, n)
num.toFixed(n)
isFinite(value)
isNaN(value)
parseInt(str, radix)
parseFloat(str)

#### BigInt
let bigInt = 1111111111111111111111111n;
尾部的 "n" 表示这是一个 BigInt 类型
#### String
"Hello"
'Hello'
`Hello` 反引号，功能扩展
eg:`Hello, ${name}!` // Hello, John!

str.length
str[pos] | str.charAt(pos)
str.toLowerCase()
str.toUpperCase()
str.codePointAt()
String.fromCodePoint(num)

str.indexOf(substr, pos)
str.lastIndexOf(substr, pos)
str.includes(substr, pos)
str.startwith(substr)
str.endwith(substr)

str.slice(start, end)
str.substring(start, end)
str.substr(start, length)


#### Boolean
**value**: true, false;
#### null
#### undefined
#### Symbol
symbol 是 带有 可选描述 的 “原始唯一值”，不会被自动转换

let varb = Symbol("description");
varb.toString()         // Symbol(descirption)
varb.description        // description

**全局Symbol**
全局的一个Symbol注册表
let symbol = Symbol.for("description");
let description = Symbol.keyFor(symbol);

**引用类型**
#### Object

typeof x | typeof(x)    以字符串形式返回x的数据类型

**对象包装器**
String()
Number()
Boolean()
创建临时对象进行帮助    

### Type conversion
String(value);
Number(value); | +value;
Boolean(value); | !!value;

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


### Operators and Mathematics
1. + | +=
2. - | -=
3. / | /=
4. * | *=
5. % | %=
6. **       a ** b
7. ++
8. --
9. & | &&
10. | | || | ! | ??
11. ^
12. ~
13. >>
14. <<
15. >>>
16. ,
17. > | >= | < | <= | == | !=
18. ===     严格比较符号

### Condition

**if**
if (condition) {
    conduct;
} else if (condition2) {

} else {

}

**?**   
let result = condition ? value1 : value2;

**switch**
switch(x) {
    case 'value1':
        ...
        [break]
    case 'value2':
        ...
        [break]
    default:
        ...
}

### Circle
**for**
for(...;...;...)
for(key in object) {object[key]}
for (key of value)

**while**
while(...) {}
do {

}while(...);

**break**
label: {
    break label;
}
**continue**

### function    
函数 是 一种 特殊的 值

**回调函数：**将函数作为 值 传递

#### declaration
function name(para1, para2, ..., paraN) {
    ...
    return ...;
}

**函数表达式**
let name = function() {
    ...
};

let func = (arg1, arg2, ..., argN) => expression;
let func = (arg1, arg2, ..., argN) => {
    ...
    return result;
}

### Object

__proto__

#### declaration
let user = new Object();
let user = {};

compute = .....

let user = {
    name: "John",
    age: 30,
    "like birds": true,
    [compute]: 5,
};

#### access
obj.prop
obj["property"]

#### copy
Object.assign(destObj, [src1, src2, src3, ...])     浅拷贝
destObj = _.cloneDeep(obj)

#### others
delete obj.prop
"key" **in** obj  // 检测对象中是否有该属性
for (let key in obj)

**属性简写**
{
    name,   // name: name
    age,    // age: age
    // ...
}

#### Object Functions
user = {
    func: function() {
        ...
    }
};
user =  {
    func() {
        ...
    }
}

**构造函数**
function User(name) {
    this.name = name;
    this.isAdmin = false;
}
let user = **new** User("Jack");

new User(...) == function User(...) {
                    this = {};
                    ...
                    return this;
                }

#### ?. ?.() ?.[] 可选链
访问嵌套对象属性的一种安全的方式

**三种语法**
obj?.proper
obj?.[key]
obj.method?.()

不要过度使用 ?.
value变量必须提前声明

Object.keys(obj)
Object.values(obj)
Object.entries(obj)    返回数组

### This
没有对象调用时 this 值为 undefined
箭头函数没有自身的 this

### Array

**declaration**
let arr = new Array();
let arr = [];

arr.at(pos)
arr.push(value)
arr.pop()
arr.shift()
arr.unshift(value)

arr.splice(start [, deleteCount, ele1, ele2, ..., eleN])
arr.slice([start], [end])
arr.concat(arg1, arg2, ...)

arr.forEach(function(item, index, array) {

})

arr.find(function(item, index, array) {

})
arr.findIndex(....)
arr.findLastIndex(...)

arr.filter(fnc)
arr.map(fnc)
arr.sort(fnc)
arr.reverse()
arr.split(delim [, length])
arr.join(glue)

arr.indexOf(item, from)
arr.lastIndexOf(item, from)
arr.includes(item, from)

Array.isArrayA(arr)

arr[Symbol.iterator] = function() {
    return {
        current:    this.from,
        last:   this.to,

        next() {
            if (this.current <= this.last) {
                return {done: false, value: this.current++};
            } else {
                return {done: true};
            }
        }
    };
};

#### Map
new Map([iterable])
map = new Map(Object.entries(obj))  
Object.fromEntries(map)

map.set(key, value)
map.get(key)
map.has(key)
map.delete(key)
map.clear()
map.size

map.keys()
map.values()
map.entries()

for (let x of map.keys()) 
map.forEach( (value, key, map) => {

})

**WeakMap**
new WeakMap()

key: WeakMap 的 键 必须是 对象

weakMap.get(key)
weakMap.set(key, value)
weakMap.delete(key)
weakMap.has(key)

#### Set
new Set([iterable])   

set.add(value)
set.delete(value)
set.has(value)
set.clear()
set.size

set.keys()
set.values()
set.entries()

for (let value of set)
set.forEach((value, valueAgain, set) => {

})


## Class

class MyClass {
    constructor() {}
    method1()
    method2()
    ...
    methodN()
}