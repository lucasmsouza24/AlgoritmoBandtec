function classificar_aluno() {
    // armazenando valor do input
    var nota = Number(in_nota.value);

    // condições de classificação
    if(nota < 0) {
        display.innerHTML = 'Valor inválido';
        display.style.color = 'gray';
    }
    else if (nota < 5) {
        display.innerHTML = 'Aluno precisa de muita ajuda';
        display.style.color = 'red';
    }
    else if (nota <= 7) {
        display.innerHTML = 'Aluno na média';
        display.style.color = 'orangered';
    }
    else if (nota <= 9.5) {
        // alert('aluno acima da média');
        display.innerHTML = 'aluno acima da média';
        display.style.color = 'green';
    }
    else if (nota <= 10) {
        // alert('Aluno fora da curva');
        display.innerHTML = 'Aluno fora da curva';
        display.style.color = 'blue';
    } else {
        display.innerHTML = 'Valor inválido';
        display.style.color = 'gray';
    }
}
