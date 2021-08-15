// função referente ao botão da multiplicação
function multiplicar() {
    var n1 = Number(primeiro_valor.value);
    var n2 = Number(segundo_valor.value);
    alert(`${n1} * ${n2} = ${n1 * n2}`);
}

// função referente ao botão da divisão
function dividir() {
    var n1 = Number(primeiro_valor.value);
    var n2 = Number(segundo_valor.value);
    alert(`${n1} / ${n2} = ${n1 / n2}`);
}

// função referente ao botão da soma
function somar() {
    var n1 = Number(primeiro_valor.value);
    var n2 = Number(segundo_valor.value);
    alert(`${n1} + ${n2} = ${n1 + n2}`);
}

// função referente ao botão da subtração
function subtrair() {
    var n1 = Number(primeiro_valor.value);
    var n2 = Number(segundo_valor.value);
    alert(`${n1} - ${n2} = ${n1 - n2}`);
}

// função referente ao botão da potenciação 
function potencia() {
    var n1 = Number(primeiro_valor.value);
    var n2 = Number(segundo_valor.value);
    alert(`${n1} ^ ${n2} = ${n1 ** n2}`)    
}
