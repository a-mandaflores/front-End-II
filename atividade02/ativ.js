let alturamasc = []
let alturafem = []
let masc = []
let fem = []

for(let i = 0; i < 3; i++){
    let genero = prompt('Feminino ou Masculino (F OU M)')
    if(genero == 'M'){
        let altura = parseFloat(prompt('Qual a sua altura: '))
        masc.push(genero)
        alturamasc.push(altura)
    }else if (genero == 'F'){
        let altura = parseFloat(prompt('Qual a sua altura: '))
        fem.push(genero)
        alturafem.push(altura)
    }else{
        console.log('Informações incorretas')
    }

}

let maiorAltura = 0
for(i of alturafem){
    if(i > maiorAltura){
        maiorAltura = i
    }
}
for(i of alturamasc){
    if(i > maiorAltura){
        maiorAltura = i
    }
}

let menorAltura = 0;
for(i of alturafem){
    if(menorAltura == 0){
        menorAltura = i
    }else if(i > menorAltura){
        menorAltura = i
    }
}
let somaAltura = alturamasc.reduce((total, numero) => total + numero, 0)
let media = somaAltura / alturamasc.length


console.log("A maior altura é: ",maiorAltura)
console.log("A menor altura é: ", menorAltura)
console.log("A media da alguta masculina é: ",media)

