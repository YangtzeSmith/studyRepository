## Misc

'use strict';    // 启用严格模式，限制一些不安全的操作
debugger;        // 调试程序，可以设置断点

**用法**
<script>
    // your code
</script>
<script src"path/to/script.js" defer></script>    // 引入外部脚本文件，此时忽略script标签中的代码；在script标签里写入 defer 属性，则会等到页面完全加载完毕后再执行脚本文件。

**输出**
console.log(message)    // 输出到控制台
alert(message)          // 弹出提示框
document.write(message) // 将内容写入到HTML文档中，如果在文档加载完后执行，则会覆盖整个文档的内容
innerHTML = message     // 将内容写入到HTML元素中

**注释**
// 单行注释
/* 多行注释 */

## 变量
var variableName = value;    // 声明变量并赋值，全局作用域
let variableName = value;    // 声明变量并赋值，块级作用域
const CONSTANT_NAME = value; // 声明常量，不可修改

**JS中的所有变量都是对象，当你声明了一个变量时，实际上是创建一个对象，这个对象包含了变量名和值**    

## 数据类型
typeof x / typeof(x)    // 输出变量类型
JS具有动态类型，不需要声明变量类型，可以直接赋值不同类型的值
当您声明新变量时，可以使用关键词 "new" 来声明其类型。例如：

let x = new Number(10); // 声明变量 x 为 Number 类型
let y = new String("Hello"); // 声明变量 y 为 String 类型

**数字方法**
toSting()    // 转换为字符串
toExponential()    // 转换为指数计数法的字符串
toFixed(n)    // 转换为指定小数位的字符串
toPrecision(n)    // 转换为指定精度的字符串
valueOf()    // 返回数值形式的值

**基本类型**
### Number
小数的最大数是17位
整数的最大数是15位

值：integer、float、NaN、Infinity、-Infinity
0x 表示十六进制
0b 表示二进制
0o 表示八进制

Number.EPSILON    // 大于1的最小浮点数与1的差值
Number.MAX_VALUE    // 最大值
Number.MIN_VALUE    // 最小值
Number.NaN    // 非数值
Number.POSITIVE_INFINITY    // 正无穷大
Number.NEGATIVE_INFINITY    // 负无穷大
Number.Max_Safe_Integer    // 最大安全整数
Number.Min_Safe_Integer    // 最小安全整数

Number.isFinite(value)    // 判断是否为有限数值
Number.isInteger(value)    // 判断是否为整数
Number.isNaN(value)    // 判断是否为NaN
Number.isSafeInteger(value)    // 判断是否为安全整数

*将变量转化为数字*
Number(value)    // 转换为数字
parseInt(value [, radix])    // 转换为整数，radix为进制，默认为10，仅返回第一个
parseFloat(value)    // 转换为浮点数，仅返回第一个

### String
字符串不可改变，只能替换

let str = '';
let str = "";
let str = `This is a ${variable}`; // 模板字符串

str[index];    // 获取指定索引处的字符，只读
str.length;    // 获取字符串长度
str.charAt(index);    // 获取指定索引处的字符
str.charCodeAt(index);    // 获取指定索引处的字符的 Unicode 编码
str.indexOf(substring [, startPos]);    // 查找子串的位置，返回索引，未找到返回-1
str.lastIndexOf(substring [, startPos]);    // 从右边开始查找子串的位置，返回索引，未找到返回-1
str.search(regexp);    // 查找子串，返回匹配结果，未找到返回null
str.match(regexp);    // 正则匹配，返回匹配结果数组，未匹配返回null
str.includes(substring);    // 判断是否包含子串，返回布尔值
str.startsWith(substring);    // 判断是否以子串开头，返回布尔值
str.endsWith(substring);    // 判断是否以子串结尾，返回布尔值
str.slice(start [, end]);    // 截取子串，返回新字符串
str.substring(start [, end]);    // 截取子串，返回新字符串，与slice不同的是，substring方法负数索引会被自动转换为0
str.substr(start [, length]);    // 截取子串，返回新字符串
str.replace(old, new);    // 替换子串，返回新字符串,
str.toUpperCase();    // 转换为大写字母
str.toLowerCase();    // 转换为小写字母
str.split(separator);    // 分割字符串，返回数组
str.concat(str2, str3,...);    // 连接字符串，返回新字符串
str.trim();    // 去除前后空格
str.split(separator)    // 分割字符串，返回数组


### Boolean
### Null
### Undefined
### BigInt (ES10新增)
let bigInt = 12345678901234567890n;    // 声明BigInt类型, n为后缀
### Symbol (ES6新增)

**引用类型**
1. Object
2. Array
3. Function
4. Date
5. RegExp

## 对象
所有的值，除了原始值，都可以视为对象。
对象是键值对的容器，可以存储任意类型的值。
对象可以包含其他对象，数组，函数等。
方法是以属性值的形式存储的函数定义
{属性：属性值}

原型属性

let obj = {property: value};    // 创建对象
let obj = new Object();
let obj = Object.create(proto);    // 创建一个新对象，其原型链指向proto对象

obj.property;   // 访问属性，当属性为方法时，返回方法的字符串形式。要调用方法则用 obj.method()
obj["property"];
obj.[expression];


obj.newProperty = value;    // 添加新属性
delete obj.property;    // 删除属性

Object.keys(obj); // 获取对象所有属性名，返回数组
Object.values(obj); // 获取对象所有属性值，返回数组
Object.entries(obj); // 获取对象所有属性名和值，返回数组

### 对象访问器 getter 和 setter
obj {
    get property() {
        // 返回属性值
    },
    set property(value) {
        // 设置属性值
    }
}
obj.property;    // 访问属性，调用 getter 方法
obj.property = value;    // 设置属性值，调用 setter 方法

### 对象构造器函数
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person1 = new Person("John", 30);    // 创建一个 Person 对象
let person2 = new Person("Mary", 25);

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

### 原型 继承
object 具有一个 隐藏的特殊属性 [[Prototype]]，它要么是 null, 要么指向另一个对象。
当试图访问一个对象的属性时，会先在该对象上查找，如果没有找到，则会沿着 [[Prototype]] 链向上查找，直到找到为止。
原型链可以很长，但是不能形成循环引用。

我们可以使用 obj.__proto__ 设置对象的原型

__proto__ 是 [[Prototype]] 的 getter/setter 方法

obj.getPrototypeOf(obj);
obj.setPrototypeOf(obj, proto);

如果我们调用 obj.method()，而且 method 是从原型中获取的，this 仍然会引用 obj。因此，方法始终与当前对象一起使用，即使方法是继承的。
for..in 循环在其自身和继承的属性上进行迭代


## 数组
let arr = [...];
let arr = new Array();

arr[index];
arr.length;    // 获取数组长度
arr.push(value);    // 向数组末尾添加元素
arr.pop();    // 删除数组末尾元素
arr.unshift(value);    // 向数组开头添加元素
arr.shift();    // 删除数组开头元素
arr.splice(start, deleteCount, item1, item2, ...);    // 插入、删除或替换元素
arr.slice(start, end);    // 复制数组片段
arr.concat(arr2, arr3,...);    // 连接数组，返回新数组
arr.join(separator);    // 连接数组元素，返回字符串
arr.reverse();    // 反转数组
arr.sort([compareFunction]);    // 排序数组
arr.map(callback(currentValue, index, arr));    // 遍历数组，返回新数组
arr.filter(callback(currentValue, index, arr));    // 过滤数组，返回新数组
arr.reduce(callback(accumulator, currentValue, index, arr), initialValue);    // 遍历数组，返回单个值
arr.forEach(callback(currentValue, index, arr));    // 为数组中的每个元素执行一次回调函数，可以改变元素的值

arr.indexOf(item [, fromIndex])    // 查找元素的位置，返回索引，未找到返回-1
arr.lastIndexOf(item [, fromIndex])    // 从右边开始查找元素的位置，返回索引，未找到返回-1
arr.includes(item)    // 判断是否包含元素，返回布尔值
arr.find(callback(currentValue, index, arr))    // 查找第一个匹配的元素，返回元素值，未找到返回undefined
arr.findIndex(callback(currentValue, index, arr))    // 查找第一个匹配的元素的索引，返回索引，未找到返回-1
arr.fill(value, start, end)    // 用指定值填充数组，返回填充后的数组
arr.copyWithin(target, start, end)    // 复制数组片段，返回新数组

arr.map(callback(currentValue, index, arr));    // 对每个元素执行函数，返回新数组，不会改变原数组，不执行无值元素
arr.filter(callback(currentValue, index, arr));    // 过滤数组，返回新数组，不会改变原数组，不执行无值元素
arr.reduce(callback(accumulator, currentValue, index, arr), initialValue);    // 遍历数组，返回单个值，不会改变原数组，不执行无值元素
arr.reduceRight(callback(accumulator, currentValue, index, arr), initialValue);    // 遍历数组，从右边开始，返回单个值，不会改变原数组，不执行无值元素

arr.some(callback(currentValue, index, arr))    // 判断数组中是否有元素满足条件，返回布尔值
arr.every(callback(currentValue, index, arr))    // 判断数组中是否所有元素满足条件，返回布尔值

Array.isArray(arr);    // 判断是否为数组

## 函数
通过 () 调用函数
函数提升，通过表达式定义的函数不会被提升
函数是对象
JS函数有内置的 arguments 对象，它是一个类数组对象，包含了传递给函数的所有参数。
参数通过值传递，而不是引用传递。对象参数是按引用传递的。

// 定义函数
function functionName(parameters) {         // 常规函数声明
    // 函数体
}
let functionName = function(parameters) {       // 函数表达式

};

let functionName = (prarameters) => {          // 箭头函数
    return ;
};
当函数只有一个语句时，可以省略花括号和 return 关键字
当参数只有一个时，可以省略括号
箭头函数没有 this

// 调用函数
functionName(arguments);



## 事件
<element event='一些 javascript 代码'>
一些常规的HTML事件：
onclick    // 鼠标点击事件
onmouseover    // 鼠标移入事件
onmouseout    // 鼠标移出事件

## 日期
在HTML中显示 日期对象 会自动调用 toString() 方法
toString()
toUTCString()
toDateString()

let date = new Date();    // 用当前日期创建日期对象
let date = new Date(year, month, day, hours, minutes, seconds, milliseconds);    // 用指定日期创建日期对象
let date = new Date(milliseconds);    // 创建一个日期对象，表示从1970年1月1日午夜（UTC）开始的毫秒数
let date = new Date(dateString);    // 用日期字符串创建日期对象

## 数学
Math.PI    // 圆周率
Math.E    // 自然常数
Math.round(x)    // 四舍五入
Math.floor(x)    // 向下取整
Math.ceil(x)    // 向上取整
Math.abs(x)    // 绝对值
Math.max(x, y, z,...)    // 最大值
Math.min(x, y, z,...)    // 最小值
Math.random()    // 随机数
Math.pow(x, y)    // x的y次方
Math.sqrt(x)    // x的平方根
Math.sin(x)    // 正弦值
Math.cos(x)    // 余弦值
Math.tan(x)    // 正切值
Math.asin(x)    // 反正弦值
Math.acos(x)    // 反余弦值
Math.atan(x)    // 反正切值
Math.atan2(y, x)    // 反正切值，y/x的弧度值
Math.log(x)    // 自然对数
Math.exp(x)    // e的x次方
Math.pow(x, y)    // x的y次方
Math.log10(x)    // 以10为底的对数
Math.log2(x)    // 以2为底的对数
Math.max(x, y, z,...)    // 最大值
Math.min(x, y, z,...)    // 最小值

## 条件
if (condition) {
    // 条件为真时执行的代码
} else if (condition) {
    // 条件为真时执行的代码
} else {
        // 条件都不满足时执行的代码
}

switch (expression) {
    case value1:
        // 当表达式等于value1时执行的代码
        break;
    case value2:
        // 当表达式等于value2时执行的代码
        break;
    default:
        // 当表达式不等于value1和value2时执行的代码
        break;
}

## 循环
for (initialization; condition; increment/decrement) {
    // 循环体
}

while (condition) {
    // 循环体
}

do {
    // 循环体
} while (condition);

for (let key in obj) {      // 遍历对象属性
    // 循环体
}

for (let value of iterable) {      // 遍历对象值
    // 循环体
}

break;    // 跳出循环
continue;    // 跳过本次循环，继续下一次循环

label: statement;    // 标记语句，用于循环语句
    break label;    // 跳出指定标记的循环

## 迭代器
当对象实现了 next() 方法时，它成为了一个可迭代对象。
next() 方法必须返回一个对象，包含value和done两个属性。
value属性表示当前迭代的值，done属性表示迭代是否结束。

当for of循环启动时，它会调用名为Symbol.iterator的方法，该方法返回一个迭代器——一个对象，具有next()方法。

let iterator = iterable[Symbol.iterator]();    // 获取迭代器
let result = iterator.next();    // 迭代器返回一个对象，包含value和done两个属性
while (!result.done) {
    // 处理迭代器返回的value值
    result = iterator.next();
}

## Set Map
set集合是一种无序的集合，集合中的元素不能重复。

let set = new Set();    // 创建一个空集合
let set = new Set(iterable);    // 创建一个集合，包含iterable中的元素

set.add(value);    // 添加元素
set.delete(value);    // 删除元素
set.has(value);    // 判断是否包含元素
set.clear();    // 清空集合
set.size;    // 获取集合大小
set.values();    // 返回包含所有值的迭代器对象
set.keys();    // 获取包含所有键的迭代器对象
set.entries();    // 获取包含所有键值对的迭代器对象，set返回的是[value, value]
set.forEach(callback(value, value, set));    // 遍历集合，执行回调函数



map集合是一种键值对的集合，键不能重复，建可以是任何类型。

let map = new Map();    // 创建一个空集合
let map = new Map(iterable);    // 创建一个集合，包含iterable中的元素

map.set(key, value);    // 添加元素
map.get(key);    // 获取元素值
map.delete(key);    // 删除元素
map.has(key);    // 判断是否包含元素
map.clear();    // 清空集合
map.size;    // 获取集合大小
map.values();    // 返回包含所有值的迭代器对象
map.keys();    // 获取包含所有键的迭代器对象
map.entries();    // 获取包含所有键值对的迭代器对象
map.forEach(callback(value, value, map));    // 遍历集合，执行回调函数

map.groupBy(callback(value, value, map));    // 根据回调函数返回的键值对，将元素分组，返回一个map集合，键为分组的键，值为分组的元素，ES2024新增

## 解构
解构赋值语法 将 对象属性 解包 到 变量 中
解构不是破坏性的
解构不会改变原对象
解构可以用于任何可迭代对象，如数组、字符串、Map、Set等

let {prop1, prop2} = object;    // 解构对象
let {[prop1]: alias1, [prop2]: alias2} = object;    // 解构对象，使用别名

let [a, b, c] = array;    // 解构数组
let [a,,,b] = array;    // 使用两个或更多逗号跳过中间元素
let [head,...tail] = array;    // 获取头部元素和剩余元素
let {[pos1]: x, [pos2]: y} = array;    // 解构数组，使用位置索引
let [x, y, z] = "abc";    // 解构字符串


## 异常处理
当 JS 代码发生异常时，会创建带有 name 和 message 属性的 Error 对象，并将其抛出。

try 语句测试代码块中的错误
catch 语句捕获错误并处理
throw 允许创建自定义错误
finally 语句无论是否出错都会执行

try {
    // 可能出错的代码
} catch (error) {
    // 捕获错误，并执行此代码
} finally {
    // 无论是否出错都会执行此代码
}

## 正则表达式

## 类
未定义构造函数会自动生成一个空的
JS中 类 是 一种 函数

class ClassName {
    prop = value;

    constructor(...) {    // 构造函数
        // ...
    }

    method(...) {}    // 方法
    
    get something() {}    // getter 方法
    set something(value) {}    // setter 方法

    [Symbol.iterator]() {} // 有计算名称（computed name）的方法（此处为 symbol）
    // ...
}

let obj = new ClassName(arguments);    // 创建对象
let obj = class {                   // 类表达式
    constructor(parameters) {}
}

### 继承
class ChildClass extends ParentClass {
    // ...
}
重写方法
**Super**
super.method(...)    // 调用父类的方法
super(...)    // 调用父类的构造函数

## 模块

import {variable1, variable2} from "module";    // 导入模块
import moduleName from "module";    // 导入默认模块

export let variable1, variable2;    // 逐个导出
export {variable1, variable2};    // 批量导出
export default message;    // 默认导出，一个模块只能有一个默认导出

## JSON
JSON.stringify(obj);    // 将对象转换为 JSON 字符串
JSON.parse(jsonString);    // 将 JSON 字符串转换为对象

## Promise async/await