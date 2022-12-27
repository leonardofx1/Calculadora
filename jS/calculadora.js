const numeros = document.querySelector('.container__numeros')
const display = document.querySelector('.display')
const operador = document.querySelector('.container__aritimeticos')
const result = document.querySelector('.btn__result')
const clean= document.querySelector('.btn__clean')

const exiberResultado = () => {
    const resultado = display.innerText
    const  resultadoOperacao = eval(resultado)
    display.innerText = resultadoOperacao
}
const limiteNumerico = () => {
    const limiteNumerico = display.innerText.length > 10
    if(limiteNumerico){
        const corte  = display.innerText.slice(0,10) 
        display.innerText = `${corte}...`
    }
}

numeros.addEventListener('click', e => {
    const num = e.target.innerText;
    display.innerText += num;
})
operador.addEventListener('click' ,e => {
    const operAritmeticos = ['-','+','/','*']
    const contemOperador = operAritmeticos.some((item => display.innerText.includes(item)))
    contemOperador ? display.innerText.length -1 : display.innerText += e.target.innerText
})

result.addEventListener('click', () => {
    exiberResultado()
    limiteNumerico()
})
clean.addEventListener('click', () => {
    display.innerText = ''
})
