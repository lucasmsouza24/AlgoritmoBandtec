function avaliar_aluno() {
    // armazenando valores dos inputs
    var nome = in_nome.value;
    var idade = Number(in_idade.value);

    // mostrando msg caso usuario tenha 18 anos ou mais
    if (idade >= 18) {
        display.innerHTML = `${nome} vamos tirar a CNH?`;
    } else {
        // calculando porcentagem da idade em relação à maioridade
        percent_idade = idade * 100 / 18;
        // mostrando msg caso usuario seja de menor
        display.innerHTML = `${nome}, você possui ${percent_idade.toFixed(1)}% da idade necessária para tirar a CNH, vá jogar Playstation!`;
    }
}