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

使用 "use strict" 启动严格模式

console.log( message );     输出到控制台

~n = -(n + 1)

**alert(message)**
**result = prompt(displayText, [defaultValue])**
**confirm(question)**

## Test
使用**Mocha**进行自动化测试

Mocha —— 核心框架：提供了包括通用型测试函数 describe 和 it，以及用于运行测试的主函数。
Chai —— 提供很多断言（assertion）支持的库。它提供了很多不同的断言，现在我们只需要用 assert.equal。
Sinon —— 用于监视函数、模拟内建函数和其他函数的库，我们在后面才会用到它。

### specification
describe('title', function() {

    it('use case description', function() {
        assert.equal(value1, value2);
    });
})


## variable and types
typeof x | typeof(x)    以字符串形式返回x的数据类型
**declaration**
var a1;
let a2;
const CONSTENT;

### Number
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

### String
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
### Boolean
### null
### undefined
### Symbol (2015)
symbol 是 带有 可选描述 的 “原始唯一值”，不会被自动转换

let varb = Symbol("description");
varb.toString()         // Symbol(descirption)
varb.description        // description

**全局Symbol**
全局的一个Symbol注册表
let symbol = Symbol.for("description");
let description = Symbol.keyFor(symbol);
### BigInt (2020)
let bigInt = ...........n;
### Object

**对象包装器**
String()
Number()
Boolean()
创建临时对象进行帮助    


## Operators and Mathematics
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

## Conditionals

if (condition) {
    statements;
} else if (condition2) {
    statements;
} else {
    statements;
}

let result = condition ? value1 : value2;

switch(x) {
    case label1:
        statments;
        break;
    case label2:
        statments;
        break;
    // ...
    case labelN:
        statements;
        break;
    default:
        statements;
}

## Loops
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

## function    
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

## Object

__proto__

let user = new Object();
let user = {};

compute = .....
let user = {
    name: "John",
    age: 30,
    "like birds": true,
    [compute]: 5,
};

obj.prop
obj["property"]

Object.assign(destObj, [src1, src2, src3, ...])     浅拷贝
destObj = _.cloneDeep(obj)

### others
delete obj.prop
"key" **in** obj  // 检测对象中是否有该属性
for (let key in obj)

**属性简写**
{
    name,   // name: name
    age,    // age: age
    // ...
}

### Object Functions
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

### ?. ?.() ?.[] 可选链
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

### 属性标志 和 属性描述符  
let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

{
    "value":
    "writable":
    "enumerable":
    "configurable":
}

Object.defineProperty(obj, propertyName, descriptor);
Object.defineProperties(obj,
    prop1:descriptor1,
    prop2:descriptor2
    // ...
);

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

### getter 和 setter
let obj = {
    get propName() {

    },
    set propName(value) {
    }
};

obj.propName        // 访问器属性

访问器属性描述符 没有 value 和 writable 属性，多出了 get 和 set 属性

### 原型 、 继承
object 具有一个 隐藏的特殊属性 [[Prototype]]，它指向另一个对象，称为原型对象。
prototype 值为 null 或者 另一个对象的应用
我们可以使用 obj.__proto__ 访问原型对象
原型链可以很长，但是不能形成循环引用
__proto__ 是 [[Prototype]] 的 getter/setter 方法

obj.getPrototypeOf(obj);
obj.setPrototypeOf(obj, proto);

如果我们调用 obj.method()，而且 method 是从原型中获取的，this 仍然会引用 obj。因此，方法始终与当前对象一起使用，即使方法是继承的。
for..in 循环在其自身和继承的属性上进行迭代


## Array

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



## JSON
JSON.stringify(value [, replacer [, space]])
JSON.parse(str [, reviver]) 

函数属性、Symbol类型、存储undefined的属性 

**自定义toJSON()方法**
let obj = {
    toJSON() {
        return {...this};
    }
}；

## Date
let date = new Date(milliseconds);
let date = new Date(dateString);
let date = new Date(year, month [, day [, hours [, minutes [, seconds [, milliseconds]]]]]);

date.getFullYear();
date.getMonth();
date.getDate();
date.getDay();
date.getHours();
date.getMinutes();
date.getSeconds();
date.getMilliseconds();
date.getTime();
date.getTimezoneOffset();

date.setFullYear(year [, month [, day]]);
date.setMonth(month [, day]);
date.setDate(day);
date.setHours(hour [, min [, sec [, millisec]]]);
date.setMinutes(min [, sec [, millisec]]);
date.setSeconds(sec [, millisec]);
date.setMilliseconds(millisec);

Date.now();
Date.parse(dateString);

## Class
类 总是使用 'use strict'

class MyClass {
  prop = value; // 属性

  constructor(...) { // 构造器
    // ...
  }

  method(...) {} // method

  get something(...) {} // getter 方法
  set something(...) {} // setter 方法

  [Symbol.iterator]() {} // 有计算名称（computed name）的方法（此处为 symbol）
  // ...
}
let Class = class {
    ...
};

## Error Handling
try {
    // code that may throw an error
} catch (error) {
    // code to handle the error
} finally {
    // code to execute regardless of whether an error occurred or not
}

## Modules

一个模块就是一个文件
<script type="module" src="path/to/module.js"></script>
+ 默认是延迟解析的（deferred）。
+ Async 可用于内联脚本。
+ 要从另一个源（域/协议/端口）加载外部脚本，需要 CORS header。
+ 重复的外部脚本会被忽略

浏览器环境 不允许 裸模块
模块始终使用 use strict
模块代码只执行一次。导出仅创建一次，然后会在导入之间共享



**export**：标记可以从当前模块中导入的变量或函数
**import**: 从其他模块导入变量或函数