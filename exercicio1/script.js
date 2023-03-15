// EXERCICIOS - FUNÇÕES DE ARRAY E CALLBACK
// exercicio 1

const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// 1) criando função para colocar tudo em caixa alta
function valoresCaixaAlta(objeto){
    const objetoAlterado = {
        nome: objeto.nome.toUpperCase(),
        profissao: objeto.profissao.toUpperCase(),
        username: objeto.username.toUpperCase(),
        senha: objeto.senha.toUpperCase()
    }
    return objetoAlterado
}

console.log(valoresCaixaAlta(objeto))

// opção para não escrever tanto, iterando o objeto utilizando for in
/*
const deixarMaiusculo = (obj) => {
    const newObj = {}

    for (let propriedade in obj){
        newObj [propriedade] = obj [propriedade].toUpperCase()
    }
    return newObj
}
*/


// 2) criando função para escrever frase referenciada
function textoCorrido(objeto){
    const frase = `O nome é ${objeto.nome}, a profissão é ${objeto.profissao}, o username é ${objeto.username} e a senha é ${objeto.senha}`

    return frase
}

console.log(textoCorrido(objeto))

// 3) criando funções que utilizem funções callback
function callback(objeto, callback){
    const valor = callback(objeto)
    console.log(valor)
}

callback(objeto, valoresCaixaAlta)
callback(objeto, textoCorrido)
