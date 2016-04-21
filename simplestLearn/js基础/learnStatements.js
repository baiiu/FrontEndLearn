var firstNumber = prompt("输入一个值：", "");
var operator = prompt("输入操作符：", "+");
var secondNumber = prompt("再输入一个值：", "");

firstNumber = parseInt(firstNumber);
secondNumber = parseInt(secondNumber);

var result = 0;
switch (operator) {
    case "+":
        result = firstNumber + secondNumber;
        break;
    case "-":
        result = firstNumber - secondNumber;
        break;
    case "*":
        result = firstNumber * secondNumber;
        break;
    case "/":
        result = firstNumber / secondNumber;
        break;
}

alert(result);
