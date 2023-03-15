// EXERCICIOS - FUNÇÕES DE ARRAY E CALLBACK
// exercicio 2

const array = [27, 42, 101, 12, 9, 25, 52, 150]

//1) 
const quintuplos = array.map((elemento, indice, array) => {
    const calculo = elemento * 5
    return calculo 
})

console.log(quintuplos)

//2) 
const metades = quintuplos.map((elemento) => {
    const calculo = elemento / 2
    return calculo
})

console.log(metades)