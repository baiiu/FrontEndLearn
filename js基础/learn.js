//alert("hello,js");


/*
变量声明：
*/
// 使用var声明变量
var x;

//undefined.变量没有被赋值
alert(x);



/*
+ 可以连接字符串
字符串参与 - * / 时会转为数字类型
*/

//在同一个作用域内，可以重新声明变量
var x = "12";
var y = 1;
alert(x + y);
alert(x - y);

/*
JS中的逻辑运算符只有 && 和  || 和 ！
& 和 | 是位运算符

JS也支持三元运算符
*/
alert (2 > 1 ? x : y);

/*
使用 typeof 查看该变量数据类型
*/
alert (typeof x);

/*
语句：

if语句：非0和非null数据，等同于true.
      所有在书写比较代码时，这样写： 1 == x
*/
if(x = 1) {
  alert(x);
}
