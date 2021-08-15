// exibição de resultados
function calc_freq() {
    // resgatando os valores dos inputs
    var nome = input_nome.value;
    var aulas_totais = Number(input_aulas_totais.value);
    var qtd_faltas = Number(input_quantidade_faltas.value);

    // calculo das faltas em porcentagem e frequencia
    var faltas_pcent = qtd_faltas * 100 / aulas_totais;
    var freq = 100 - faltas_pcent

    // Exibindo resultado textual
    display_title.innerHTML = ` <h4 style="color: blue">Olá, ${nome}! Sua frequência foi de <span style="color: green;">${freq}%</span></h4> `;
    display_graph.style.width = freq + "%";

}