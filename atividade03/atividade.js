
var notas = []

var materias = parseFloat(prompt('Quantas materias você vai registrar: '))

let i = 0 
while(i < materias){
    var nota = parseFloat(prompt('Informe a nota:'))
    notas.push(nota)    
    i++
}

let contador = 0
    notas.filter((i)=>{
        contador += i
    })
    
let media = contador / notas.length 
console.log(media)

if(media > 8){
    alert('Parabens você passou')
}else if(media >= 4){
    alert('Você está de recuperação')
    let nota = prompt('Informe sua nota da prova de recuperação:')
    let soma = (nota + media) / 2
    let resultado = soma >= 5 ? alert('Parabens você passou') : alert('Você reprovou')
}else{
    alert('Reprovado')
}
