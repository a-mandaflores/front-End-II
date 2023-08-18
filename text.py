alturaFeminina = []
alturaMasculina = []
generoF = []
generoM = []


i = 0
while i < 5:
    varGenero = input("informe F OU M ")

    if varGenero == "F":
        varAltura = float(input("inforome sua altura: "))
        generoF.append(varGenero)
        alturaFeminina.append(varAltura)
    elif varGenero == "M":
        varAltura = float(input("inforome sua altura: "))
        alturaMasculina.append(varAltura)
    else: 
        print("Precisa ser um genero valido")

    
    i += 1



maiorAltura = 0 

for i in alturaFeminina:
    if i > maiorAltura:
        maiorAltura = i


for i in alturaMasculina:
    if i > maiorAltura:
        maiorAltura = i

menorAltura = 0 

for i in alturaFeminina:
    if menorAltura == 0:
        menorAltura = i
    elif i > maiorAltura:
        maiorAltura = i

for i in alturaMasculina:
    if menorAltura == 0:
        menorAltura = i
    elif i > maiorAltura:
        maiorAltura = i

media = sum(alturaMasculina) / len(alturaMasculina)

print("Maior altura: ", maiorAltura)
print("Menor altura: ", menorAltura)
print("Media da altura masculina: ", media)
print("Quantas mulheres: ", len(alturaFeminina))


