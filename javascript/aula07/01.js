function classificar_aluno() {
    // armazenando valor do input
    var nota = Number(in_nota.value);

    // condições de classificação
    if (nota < 5) {
        alert('Aluno precisa de muita ajuda');
    }
    if (nota >= 5) {
        if (nota <= 7) {
            alert('Aluno na média')
        }
    }
    if (nota > 7) {
        if(nota <= 9.5) {
            alert('aluno acima da média');
        }
    }
    if (nota > 9.5) {
        alert('Aluno fora da curva');
    }
}