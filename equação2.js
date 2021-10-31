var a = parseInt(prompt("Dado a equação ax2 + bx + c\nDigite o valor de A: "))
var b = parseInt(prompt("Dado a equação ax2 + bx + c\nDigite o valor de B: "))
var c = parseInt(prompt("Dado a equação ax2 + bx + c\nDigite o valor de C: "))

var delta = b ** 2 - (4*a*c);

if (delta < 0) {
    alert("Essa função não possui raízes reais")
}
else if (delta > 0) {
    var x1 = (-b + sqrt(delta))/2*a;
    var x2 = (-b - sqrt(delta))/2*a;
    alert("As raízes dessa função são: \n" + x1 + "e" + x2)
}
else {
    var x = -b/2*a
    alert("Sua raíz é: \n" + x)
}