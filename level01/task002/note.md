## **前言**
这块开始深入学习CSS，从基础开始。大概就是整理一下所有的资料，形成知识，便于以后查阅。

---
**CSS基础知识：**

## **CSS概念**
- Cascading Style Sheets (CSS) 是一门指定文档该如何呈现给用户的语言，将网页内容和显示样式进行分离，方便维护。
- 文档 是信息的集合，它使用一门 标记语言 作为结构。一个文档并不等同于一个文件。它甚至可能不会保存在一个文件中。
- CSS 并非仅仅用于浏览器，也不仅限于视觉展现。按照 CSS 的正式术语来讲，将文档呈现给用户的程序称为用户代理(UA)。浏览器只是用户代理的其中之一。
- CSS将文档信息的内容 和 如何展现它的细节 相分离。
- 使用CSS时，通常要避免使用标记语言的属性特性，即不使用html本身的属性，以便所有的文档样式信息保存在同一地方。

## **CSS如何工作**
浏览器在展现一个文档的时候，必须要把文档内容和相应的样式信息结合起来展示，处理过程：

1. 浏览器先将标记语言和CSS转换成DOM (文档对象模型)结构。这时DOM 就代表了电脑内存中的相应文档，因为它已经融合了文档内容和相应的样式表。
2. 然后浏览器把 DOM的内容展示出来。

## **CSS语法：**
**1. CSS基础语法：**
`selector {declaration1; declaration2; ... declarationN}`
选择器 {至少一条声明;}

图示：

![CSS语法基础](http://www.w3school.com.cn/i/ct_css_selector.gif)


## **CSS层叠和继承**
### **三种样式：**
**层叠**共有三种主要的样式来源：

- 浏览器对HTML定义的默认样式。
- 用户定义的样式。
- 开发者定义的样式，可以有三种形式：
	- 定义在外部文件（外链样式）：本教程中案例主要是通过这种形式定义样式。
	- 在页面的头部定义（内联样式）：通过这种形式定义的样式只在本页面内生效。
	- 定义在特定的元素身上（行内样式）：这种形式多用于测试，可维护性较差。


三种方式的**优先级**，从高到低依次为：

1. 网页开发者定义的样式
2. 网页阅读者定义的样式
3. 浏览器的默认样式。

### **开发者定义的样式详解：**

**开发者样式三种形式：**
```java
// 外部样式
<head>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>

// 内部样式
<head>
  <style type="text/css">
    p {
      margin: 10px;
    }
  </style>
</head>

// 内嵌样式(可在动态效果中同 JavaScript 一同使用)
<p style="color: red">Sample Text</p>
```

#### **1. 样式权值介绍：**
在开发者自定义的三种方式中，如果样式如果作用于同一个标签，会取决于哪一个呢？

**覆盖原则：**
浏览器会根据权值来判断使用哪种CSS样式，谁权值高，就使用谁。

**权值规则：**

- 标签的权值为1
- 类选择器权值为10
- ID选择器权值最高，为100
- 继承的权值为0.1（有些文献这么说，可以理解为继承权值最低），即对继承的元素来说，子元素自身的样式优先级高于从父级继承来的样式。

#### **2. 样式层叠原则：**
那如果三种方式中，样式的权值也一样，那么会使用哪种样式呢？

此时会根据就近原则来判断。谁离标签近，就使用谁。
所以就是：**行内样式 > 嵌入样式 > 外部样式。**

#### **3. 特殊情况：**
使用 `!important` 设置该样式最高权值。
```
//示例：

	p{color:red!important;}//设置最高权值
```

## **CSS选择器**
具体在：
[选择器](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference#选择器)

- 基本选择器
	- 元素选择器 elementname
	- 类选择器 .classname
	- ID选择器 #idname
	- 通配选择器 * ns|* *|*
	- 属性选择器 [attr=value]
- 组合选择器
	- 分组选择器（在w3c上有）
	- 相邻兄弟选择器 A + B
	- 通用兄弟选择器 A ~ B
	- 子选择器 A > B
	- 后代选择器 A B
- 伪元素
- 伪类


---

**CSS布局知识：**
## **CSS元素分类**
在CSS中，HTML标签元素大体被分为三种类型：
1.块状元素

- 特点：
	- 每个块级元素都是从新的一行开始，并且其后的元素也另占一行
	- 元素的高度、宽度、行高，以及边距都可设置
	- 元素宽度默认占满父容器，可以设置
- 常见的有： `<div>,<p>,<hX>,<ol>,<ul>,<dl>,<table>,<address>,<blockquote>,<form>` 等。
- 可以设置CSS属性  `a{display:block;}` 将标签设置为块状元素。

2.内联元素(行内元素)

- 特点：
	- 和其他元素都在一行上
	- 元素的 宽高 和 边距 都不可设置
	- 元素的宽度就是包裹内容，不可改变。
- 常见的有： `<a>,<span>,<br>,<i>,<em>,<strong>,<lable>,<q>,<var>,<cite>,<code>`
- 可以设置CSS属性  `a{display:inline;}` 将标签设置为块状元素。

3.内联块元素

- 特点
	- 和其他元素都在一行上
	- 元素的宽高、行高、和边距 都可设置
	- 元素宽度默认包裹内容
- 常见的有： `<img>,<input>`
- 可以设置CSS属性  `a{display:inline-block;}` 将标签设置为块状元素。

## **CSS盒子模型**
标准盒子模型(注意height指的是element的高度):

![CSS盒子模型](http://www.w3school.com.cn/i/ct_boxmodel.gif)

该元素的实际宽度 =
marginLeft + borderLeftWidth + paddingLeft + elementWidth + paddingRight + borderRightWidth + marginRight.

## **CSS布局模型**
布局模型与盒子模型都是CSS最基本、最核心的概念。布局模型建立在盒子模型的基础上。

CSS有三种基本的布局模型：

- 流动模型Flow
- 浮动模型Float
- 层模型Layer

### **流动模型Flow**
流动模型是默认的网页布局模式。

两个典型特征：
- 块状元素自上而下的按顺序垂直延伸分布
- 内联元素从左到右水平分布显示，占满一行后分行显示

### **浮动模型Float**
可以设置CSS属性 `div{folat:left;}` 来设置该元素浮动。该属性使用于除了定位元素以外的所有元素。
语法取值： `none,left,right。`默认为none，不能漂浮。

### **层布局模型Layer**
让html元素在网页中精确定位，CSS使用了一组定位属性来支持层布局模型。

层模型有以下几种形式：

- 默认值，无特殊定位，遵循html规则(position:static)
- 绝对定位(position : absolute)
将元素从文档流中拖出来，使用left、right、top、bottom属性相对于其 最接近的一个具有定位属性的**父包含块** 进行绝对定位。如果不存在这样的包含块，则相对于body元素，即相对于浏览器窗口。
- 相对定位(position:relative)
使用left、right、top、bottom属性确定元素在正常文档流中的偏移位置。相对定位的完成过程是首先按static方式生成一个元素，然后相对于以前的位置移动，偏移前的位置保留不动（子元素会跟着偏移，而其他元素不会。）
- 固定定位(position:fixed)
相对于视图本身移动(浏览器网页窗口)。所以，它不会随浏览器窗口滚动条的滚动而变化。

## **单位和值**
更多请看： [CSS 单位](http://www.w3school.com.cn/cssref/css_units.asp)


### 长度单位：
目前比较常用的有： px，em ， %百分比 。

在 CSS 中，em 是非常有用的单位，因为它可以自动适应用户所使用的字体。

### 颜色值
1.英文命令颜色
`p{color:red;}`

2.RGB颜色
`p{color:rgb(255,0,0)}`
`p{color:rgb(100%,0%,0%)}`

3.十六进制颜色
`p{color:#ff0000;}`



<br />
>学习资料：

>[W3C CSS](http://www.w3school.com.cn/css/index.asp)

>[CSS入门教程](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Getting_started)

>[慕课网： HTML+CSS基础课程](http://www.imooc.com/learn/9)
