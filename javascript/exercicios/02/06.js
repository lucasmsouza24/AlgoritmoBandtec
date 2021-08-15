// função de exibição dos resultados
function show_results() {
    // obtendo valores dos inputs
    var valor_passagem = Number(input_passagem.value);
    var qtd_viagens = Number(input_viagens_feitas.value);
    var distancia = Number(input_distancia.value);

    // calculando gasto das viagens de ônibus
    var viagens_bus = qtd_viagens * 0.9;
    var viagens_bus_custo = viagens_bus * valor_passagem;

    // calculando gasto das viagens de 99
    var viagens_99 = qtd_viagens * 0.1;
    var viagens_99_custo = viagens_99 * 0.75 * distancia;

    // exibindo resultados
    display.innerHTML = `<h4>Você vai gastar R$ ${viagens_99_custo + viagens_bus_custo} por mês com transporte.</h4>`;
}