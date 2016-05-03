# **1. CSS布局属性**
布局属性与盒子属性都是CSS最基本、最核心的概念。布局属性建立在盒子模型的基础上。

CSS有三种基本的布局属性：
- 流动属性Flow
- 浮动属性Float
- 定位属性Position
- z-index属性

## **1-1 流动属性Flow**
流动属性是默认的网页布局模式。

两个典型特征：
- 块状元素自上而下的按顺序垂直延伸分布
- 内联元素从左到右水平分布显示，占满一行后分行显示

## **1-2 浮动属性Float**
_The float CSS property specifies that an element should be taken from the normal flow and placed along the left or right side of its container, where text and inline elements will wrap around it._ 设置了float属性的元素将会根据属性值在父容器内进行重排，text和display为inline元素将会包裹在它旁边。 该属性会把该元素从flow流中拽出来。

可以设置CSS属性 `div{folat:left;}` 来设置该元素浮动。该属性使用于除了定位元素以外的所有元素。 语法取值： `none,left,right。`默认为none，不能漂浮。

left属性： _the element must float on the left side of its containing block._

How floats are positioned:

_As mentioned above, when an element is floated it is taken out of the normal flow of the document. It is shifted to the left or right until it touches the edge of its containing box or another floated element._
一旦设置了float:left它就会一直往左靠，直到到达父控件边缘或其他float的元素。

## **1-3 定位属性Position**
_The position CSS property chooses alternative rules for positioning elements_ position属性提供了多种方式对元素进行定位。并没有把元素拽出来。设置了位移属性的相对定位元素，他在页面中仍然是正常的、静态的，仍属于自然流。在这种情况下，其他元素不会占用相对定们元素当初的位置。

很多情况下，你需要控制更多元素的位置，而且超过了浮动所能提供的范围，这个时候我们就需要发挥“position”属性的作用。它让html元素在网页中精确定位，CSS使用了一组定位属性来支持层布局属性。

层属性有以下几种形式：
- 默认值，无特殊定位，遵循html规则(position:static)
- 绝对定位(position : absolute)
 将元素从文档流中拖出来，使用left、right、top、bottom属性相对于其 最接近的一个具有定位属性的**父包含块** 进行绝对定位。如果不存在这样的包含块，则相对于body元素，即相对于浏览器窗口。
 拖拽出来的意思就是其他子元素会占用该元素的位置。
- 相对定位(position:relative)
 使用left、right、top、bottom属性确定元素在正常文档流中的偏移位置。相对定位的完成过程是首先按static方式生成一个元素，然后相对于以前的位置移动，即以给元素设置位移offset，偏移前的位置保留不动（子元素会跟着偏移，而其他元素不会。）
- 固定定位(position:fixed)
 相对于视图本身移动(浏览器网页窗口)。所以，它不会随浏览器窗口滚动条的滚动而变化。固定定位最常见的一种用途就是在页面中创建一个固定头部、或者脚部、或者固定页面的一个侧面。


## **1-4 z-index属性**
当你的元素有定位时，他们有时候会放置在另一个元素的顶部。要改变这些元素是一个 *怎么样的层叠顺序*，要知道z轴，z轴是用“z-index”属性来控制的。

给元素设置“z-index”属性，首先要在这个元素上设置了“position”属性值为“relatvie”、“absolute”或者“fixed”之一。




# CSS特殊属性：

```
* {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
```

此元素的内边距和边框不再会增加它的宽度。

即 该元素的实际宽度 = marginLeft + elementWidth + marginRight;

# 清除浮动
在做task003时，遇到父div元素不能完整包裹多个具有float属性的子元素，这时需要该父元素清除浮动。在教程的指导下，使用`overflow:auto` 清除浮动。当然还有更多方法：

- 添加无意义标签 `<br style="clear:both;" />` 清除
- 使用伪类元素

可以看这篇文章了解更详细：[HTML和CSS高级指南之二——定位详解](http://www.w3cplus.com/css/advanced-html-css-lesson2-detailed-css-positioning.html)



# 总结：
综合使用这些布局属性完成网页布局，他们不是独立的，而是互相联系并影响的，需要综合使用。


> 教程：

> [Learn CSS Positioning in Ten Steps](http://www.barelyfitz.com/screencast/html-training/css/positioning/)

> 学习CSS布局:  [学习CSS布局](http://zh.learnlayout.com/)

>资料：

>[HTML和CSS高级指南之二——定位详解](http://www.w3cplus.com/css/advanced-html-css-lesson2-detailed-css-positioning.html)
