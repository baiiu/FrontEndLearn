## **前言**
开始学习前端知识，从HTML开始。

## **HTML概念**
- HTML 是一种标记语言（Hyper Text Markup Language）。它告诉浏览器如何显示内容。没有了HTML，网页不可能存在。HTML是一个把所有东西包含起来的外壳。
- HTML没有描述内容的样式和格式，只是内容本身和其意义。
- HTML把内容和表现分开，HTML使用预先定义的元素集合来识别内容形态。

## **HTML元素**
- HTML由不同元素的集合组成，元素是最基本的构造区块。元素定义了它们所包含内容的**语义**。元素包含了两个相匹配的元素标签之中所有的内容，也包含了标签本身。
- 一些元素都有着明确的含义， 例如 “这是一张图片”，“这是一个标题” 或者 “这是一个有序列表”。 另外一些则没这么特殊。
- 大部分的元素都支持元素嵌套，构成了一个层次结构。 该层次化结构称为 DOM: Document Object Model--文档对象模型。

## **HTML标签**
HTML 为由一对尖括号（<>）所括起来的内容以特定含义. 这样的标识称为一个 标签（tag）。

W3C上HTML标签总结：[HTML 参考手册](http://www.w3school.com.cn/tags/index.asp)


## **基本格式：**
```html
<!DOCTYPE html>  <!--声明文档类型，必须顶行写-->
<html>
  <head>
	<meta charset="utf-8">
	<meta name="keywords" content="xxx">
	<meta name="description" content="xxx">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Hello HTML</title>

	<link rel="stylesheet" type="text/css" href="theme.css" />
	<script src="myScript.js"></script>

  </head>

  <body>
      Hello HTML.
  </body>

</html>
```

- ` <!DOCTYPE html> ` 必须首行定格
- `<title>` 为文档标题
- `<meta charset="utf-8">` 文档解码格式
- `<meta name="keywords" content="xxx">` 和 	`<meta name="description" content="xxx">` 提供给搜索引擎使用
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` 移动端浏览器宽高缩放
- `<link>` 标签可以引入 favicon 和样式表 CSS 文件
- `<script>` 标签可以引入外部js文件

<br />

## **HTML字符实体**
[HTML 字符实体](http://www.w3school.com.cn/html/html_entities.asp)


版权符号： &copy;
注册商标： &reg;
商标： &trade;


## **HTML文档类型 doctype**
一个HTML文档一定需要在第一行做出文档类型断言(doctype declaration)。就像这样：

	<!DOCTYPE html>

现在解析HTML有三种模式：quirks mode, almost standards mode, and full standards mode。
浏览器根据文档所标明的DOCTYPE来决定使用哪种模式解析。我们现行的方法解析方式就是full standards mode，它完成支持HTML和CSS的特性，而且H5也这么推荐。

所有在文档首行就写明 `<!DOCTYPE HTML>` 来表示用full standards mode解析。注意必须是文档**首行**。

注意：

- <!DOCTYPE> 声明没有结束标签
- <!DOCTYPE> 声明对大小写不敏感

更多资料：

- [Quirks Mode and Standards Mode](https://developer.mozilla.org/en-US/docs/Quirks_Mode_and_Standards_Mode)
- [W3C doctype](http://www.w3school.com.cn/tags/tag_doctype.asp)


## **HTML语义化**
- 用正确的标签做正确的事情，明白每个标签的用途，在什么情况下使用此标签合理。
- 让页面的内容结构化，便于对浏览器、搜索引擎解析；在没有样式CCS情况下也以一种文档格式显示，并且是容易阅读的。

**语义化好处：**
1. 搜索引擎的爬虫依赖于标记来确定上下文和各个关键字的权重，利于 SEO。
2. 使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。
3. 更容易让屏幕阅读器读出网页内容。屏幕阅读器会根据标签来调整语气。这就是机器在读内容，让机器了解你在写什么。

更多资料：

- [携程： 再谈语义化](http://ued.ctrip.com/blog/talk-about-semantic.html)
- 熟读W3C上HTML标签说明： [HTML 参考手册](http://www.w3school.com.cn/tags/index.asp)



<br />
>学习资料

>[W3C HTML](http://www.w3school.com.cn/html/index.asp)

>[HTML 入门](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Introduction)

>[慕课网：HTML学习](http://www.imooc.com/learn/9)
