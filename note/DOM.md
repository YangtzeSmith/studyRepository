## Misc
DOM : document object model 文档对象模型
BOM : browser object model 浏览器对象模型
CSSOM : CSS Object Model CSS对象模型

根据DOM，每个html标签 都是一个 对象
html / xml 中的一切 在 DOM 中都有它们的位置

document 文档的根节点

.element 元素节点
#text 访问元素内形成的 文本节点
#comment 注释节点

DOM 集合 是 只读 的
DOM 集合 是 实时 的
使用 for of 而不是 for in

elem.childNodes
elem.firstChild
elem.lastChild
elem.hasChildNodes()

elem.parentNode
elem.previousSibling
elem.nextSibling
elem.hasParentNode()
elem.hasPreviousSibling()
elem.hasNextSibling()

只想 访问 元素节点
elem.children
elem.firstElementChild
elem.lastElementChild
....

**搜索元素**
elem.getElementById()
elem.getElementsByClassName()
elem.getElementsByTagName()

elem.querySelector(css)
elem.querySelectorAll(css)  
elem.matches(css)
elem.closest(css)

**节点属性**

nodeName
tagName
innerHTML       将元素中的 HTML 获取为 字符串形式，仅对 元素节点 有效
innerHTML +=    会导致 重新加载内容
outerHTML       元素的完整 HTML 代码
textContent     元素的纯文本内容

nodeValue / data  文本节点内容
