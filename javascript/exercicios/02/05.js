// mostrando resultados
function show_price() {
    var sabor = input_sabor.value;
    var price = Number(input_preco.value);
    var qtd_amgs = Number(input_qtd_amgs.value);
    var total_price = price * 1.1;
    var price_amg = total_price / qtd_amgs;
    display.innerHTML = `<h3>Cada amigo vai colaborar com R$ ${price_amg} para a pizza de ${sabor}.</h3>`;
}