## **1. CSS布局属性有哪些**

- 浮动属性Float
- 定位属性Position
- z-index属性

**必须要明确：**

1. 首先，当我们使用定位属性，即`position`属性时，我们就可以通过`left,right,bottom,right`来对元素进行定位(这点我有时会忘记)。

2. 然后，有些属性是会把元素从文档流中拖出来，而有些不会。那么这两者的区别是什么呢？ 从文档流中拖出来，就意味着这个元素本身的空间就没有了，其他元素就占领了该空间。

3. `left,right,bottom,right` 这些属性值可以为负。

### **1-1 浮动属性Float**
`float:left|right|none`

设置了float属性的元素将会根据属性值在父容器内进行重排，text和display为inline元素将会包裹在它旁边。
该属性使用于除了定位元素以外的所有元素。

float属性可以用来处理高度不定的情况，也可以使用该属性实现多列并排。
可以使用`clear`属性清除浮动，让使用了该属性的元素按照正常排列。

其他资料：
_The float CSS property specifies that an element should be taken from the normal flow and placed along the left or right side of its container, where text and inline elements will wrap around it._

left属性： _the element must float on the left side of its containing block._

How floats are positioned:

_As mentioned above, when an element is floated it is taken out of the normal flow of the document. It is shifted to the left or right until it touches the edge of its containing box or another floated element._
一旦设置了float:left它就会一直往左靠，直到到达父控件边缘或其他float的元素。





### **1-2 定位属性Position**

- `position:static`
遵循html本身的布局规则。没啥用。

- `position:relative`
该属性**并不会**把元素从文档流中拖出来。
使用`left`等属性进行元素偏移时，仅仅偏移的是它的视图，它仍然占据原始位置（即其他同级元素并不会跟着它一起偏移，还是不动，还是在原来的位置）。
一般没啥用，说不定也会有用。

- `position:absolute`
该元素**会**把元素从文档流中拖出来，相对于其 最接近的一个具有定位属性属性的父包含块进行绝对定位。
其他元素会占据该元素的位置。

- `position:fixed`
相对于视图本身移动(浏览器网页窗口)。所以，它不会随浏览器窗口滚动条的滚动而变化。固定定位最常见的一种用途就是在页面中创建一个固定头部、或者脚部、或者固定页面的一个侧面。



### **1-3 z-index属性**
当你的元素有定位时，他们有时候会放置在另一个元素的顶部。要改变这些元素是一个 _怎么样的层叠顺序_，要知道z轴，z轴是用"z-index"属性来控制的。

给元素设置"z-index"属性，首先要在这个元素上设置了"position"属性值为"relatvie"、"absolute"或者"fixed"之一。

## 2. CSS特殊属性：


1.设置盒模型

```
* {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
```

此元素的内边距和边框不再会增加它的宽度。

即 该元素的实际宽度 = marginLeft + elementWidth + marginRight;

2.`max-width`属性：
使用 max-width 替代 width 可以使浏览器更好地处理小窗口的情况。

3.`width:calc(100% - 380px);`
使用函数计算宽度，这样会方便很多


## 3. 清除浮动方法
在做task003时，遇到父div元素不能完整包裹多个具有float属性的子元素，这时需要该父元素清除浮动。在教程的指导下，使用overflow:auto 清除浮动。当然还有更多方法：

- 添加无意义标签 `<br style="clear:both;" />` 清除
- 使用伪类元素

可以看这篇文章了解更详细：[HTML和CSS高级指南之二----定位详解](http://www.w3cplus.com/css/advanced-html-css-lesson2-detailed-css-positioning.html)

## 4. CSS居中总结
教程：

[Centering in CSS: A Complete Guide](https://css-tricks.com/centering-css-complete-guide/)

[代码生成工具](http://howtocenterincss.com/)

## 总结：
综合使用这些布局属性完成网页布局，他们不是独立的，而是互相联系并影响的，需要综合使用。在实战中熟练。

> 教程：
> [Learn CSS Positioning in Ten Steps](http://www.barelyfitz.com/screencast/html-training/css/positioning/)

> [10步掌握CSS定位](http://www.see-design.com.tw/i/css_position.html)

> [学习CSS布局](http://zh.learnlayout.com/)

> 资料：
> [HTML和CSS高级指南之二----定位详解](http://www.w3cplus.com/css/advanced-html-css-lesson2-detailed-css-positioning.html)
