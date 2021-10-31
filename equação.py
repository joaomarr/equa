#from cmath import sqrt
a = int(input("Digite o valor de A: "))
b = int(input("Digite o valor de B: "))
c = int(input("Digite o valor de C: "))

delta = b**2-4*a*c
raiz_delta = delta**0.5

if delta<0:
    print("Delta negativo")
else: 
    x1 = (-b+raiz_delta)/2*a
    x2 = (b+raiz_delta)/2*a

    print("As raizes são, ", x1, "e", x2)