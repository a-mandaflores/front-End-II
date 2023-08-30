

document.addEventListener("DOMContentLoaded", function(){
    const nota1 = document.querySelector("#nota1")
    const nota2 = document.querySelector("#nota2")
    const nota3 = document.querySelector("#nota3")
    const botao = document.querySelector("#botao") 
    const resultado = document.querySelector("#resultado")  

    botao.addEventListener("click", function(){
        const numeroDigitado1 = parseFloat(nota1.value);
        const numeroDigitado2 = parseFloat(nota2.value);
        const numeroDigitado3 = parseFloat(nota3.value);
        if(isNaN(numeroDigitado1) || isNaN(numeroDigitado2) || isNaN(numeroDigitado3)){
            resultado.textContent = "Existe espaços vazio"
        }else{
            const notas = (numeroDigitado1*2) + (numeroDigitado2*3) + (numeroDigitado3*5)
            const pesos = 2 + 3 + 5
            const result = notas / pesos
            resultado.textContent = "Resultado: " + result;
       }   

    })
})