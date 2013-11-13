var s = "string",
    t = s - 1, //NaN Not a Number
    i = 1/0, //Infinity
    i2 = -1/0; //Infinity

//var s = confirm("He said: \"Don't\" ");
/*var s = prompt("Как дела?");

alert("У тебя все " + s);*/

/*var a = "123dddd",
    b = 96;

alert(typeof(a));

alert(parseInt(a) + b);
alert(parseInt(a) - b);
alert(parseInt(a) % b);*/

//Побитовые операторы
var a = 0,
    b = 300;
    
a & b;
a | b;
a ^ b;

//3 знака = - сравнение без приведения типов

var login = prompt("Введите логин");
if (login == "evgeni") {
    pass = prompt("Введите пароль");
} else {
    alert ("Goodbye!!!");
}

if (pass != 0 && pass == "123") {
    alert ("asd;flkjasd;flkj");
} else {
    alert ("Goodbye!!!");
}