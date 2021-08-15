function estudar_atacante() {
    // armazenando valores dos inputs
    var qtd_partidas = Number(in_qtd_partidas.value);
    var qtd_gols = Number(in_qtd_gols.value);

    // calculando média de gols
    var media = qtd_gols / qtd_partidas;

    // exibindo resultados
    if (media < 0.2) {
        // melhor mudar de posição
        display1.innerHTML = "melhor mudar de posição";
    } else {
        if (media <= 0.6) {
            // mediano
            display1.innerHTML = "Atacante mediano";
        } else {
            // atacante de futuro
            display1.innerHTML = "Atacante de futuro";

        }
    }
    display2.innerHTML = `Sua média de gols/partida é de ${media.toFixed(1)}`;
}