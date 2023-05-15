let boxNum1 = document.getElementById("box-num1");
let boxNum2 = document.getElementById("box-num2");
let res = document.getElementById('res')


let botaoSoma = document.getElementById('botao-soma')
botaoSoma.addEventListener('click', somar)

function somar(){
    let num1 = Number(boxNum1.value)
    let num2 = Number(boxNum2.value)

    let soma = num1 + num2
    if (boxNum1.value.length == 0 || boxNum2.value.length == 0) {
        alert('COMPLETE TODOS OS CAMPOS.')
    } else{
        res.innerHTML = `Resultado: ${soma}`
    }
}

let botaoMenos = document.getElementById('botao-menos')
botaoMenos.addEventListener('click', subtrair)

function subtrair(){
    let num1 = Number(boxNum1.value)
    let num2 = Number(boxNum2.value)

    let subtração = num1 - num2

    if (boxNum1.value.length == 0 || boxNum2.value.length == 0) {
        alert('COMPLETE TODOS OS CAMPOS.')
    } else{
        res.innerHTML = `Resultado: ${subtração}`
    }
}

let botaoMultiplicacao = document.getElementById('botao-vezes')
botaoMultiplicacao.addEventListener('click', multiplicacao)

function multiplicacao(){
    let num1 = Number(boxNum1.value)
    let num2 = Number(boxNum2.value)

    let multiplicacao = num1 * num2

    if (boxNum1.value.length == 0 || boxNum2.value.length == 0) {
        alert('COMPLETE TODOS OS CAMPOS.')
    } else{
        res.innerHTML = `Resultado: ${multiplicacao}`
    }
}

let botaoDivisao = document.getElementById('botao-divisao')
botaoDivisao.addEventListener('click', divisao)

function divisao(){
    let num1 = Number(boxNum1.value)
    let num2 = Number(boxNum2.value)

    let divisao = num1 / num2

    if (boxNum1.value.length == 0 || boxNum2.value.length == 0) {
        alert('COMPLETE TODOS OS CAMPOS.')
    } else{
        res.innerHTML = `Resultado: ${divisao}`
    }
}