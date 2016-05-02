## **1. CSS布局属性**
布局属性与盒子属性都是CSS最基本、最核心的概念。布局属性建立在盒子模型的基础上。

CSS有三种基本的布局属性：

- 流动属性Flow
- 浮动属性Float
- 层属性Layer

### **1-1 流动属性Flow**
流动属性是默认的网页布局模式。

两个典型特征：
- 块状元素自上而下的按顺序垂直延伸分布
- 内联元素从左到右水平分布显示，占满一行后分行显示

### **1-2 浮动属性Float**
*The float CSS property specifies that an element should be taken from the normal flow and placed along the left or right side of its container, where text and inline elements will wrap around it.*
设置了float属性的元素将会根据属性值在父容器内进行重排，text和display为inline元素将会包裹在它旁边。
该属性会把该元素从flow流中拽出来。


可以设置CSS属性 `div{folat:left;}` 来设置该元素浮动。该属性使用于除了定位元素以外的所有元素。
语法取值： `none,left,right。`默认为none，不能漂浮。

left属性：
*the element must float on the left side of its containing block.*

How floats are positioned:

*As mentioned above, when an element is floated it is taken out of the normal flow of the document. It is shifted to the left or right until it touches the edge of its containing box or another floated element.*
一旦设置了float:left它就会一直往左靠，直到到达父控件边缘或其他float的元素。




### **1-3 层布局属性Layer**
*The position CSS property chooses alternative rules for positioning elements*
position属性提供了多种方式对元素进行定位。并没有把元素拽出来。

让html元素在网页中精确定位，CSS使用了一组定位属性来支持层布局属性。

层属性有以下几种形式：

- 默认值，无特殊定位，遵循html规则(position:static)
- 绝对定位(position : absolute)
将元素从文档流中拖出来，使用left、right、top、bottom属性相对于其 最接近的一个具有定位属性的**父包含块** 进行绝对定位。如果不存在这样的包含块，则相对于body元素，即相对于浏览器窗口。
- 相对定位(position:relative)
使用left、right、top、bottom属性确定元素在正常文档流中的偏移位置。相对定位的完成过程是首先按static方式生成一个元素，然后相对于以前的位置移动，偏移前的位置保留不动（子元素会跟着偏移，而其他元素不会。）
- 固定定位(position:fixed)
相对于视图本身移动(浏览器网页窗口)。所以，它不会随浏览器窗口滚动条的滚动而变化。

## CSS特殊属性：
```
* {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
```
此元素的内边距和边框不再会增加它的宽度。

即 该元素的实际宽度 = marginLeft + elementWidth + marginRight;


## 总结：
综合使用这些布局属性完成网页布局，他们不是独立的，而是互相联系并影响的，需要综合使用。

---
>参考

>[Learn CSS Positioning in Ten Steps
](http://www.barelyfitz.com/screencast/html-training/css/positioning/)

>学习CSS布局:  [学习CSS布局](http://zh.learnlayout.com/)



















ee
