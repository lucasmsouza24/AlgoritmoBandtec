function calc_seguro() {
    // resgatando valores
    var qtd_infracoes = Number(input_qtd_infracoes.value);
    var valor_carro = Number(input_valor_carro.value);

    // o valor do seguro é igual à 1,5% do valor do carro
    var seguro = 0.015 * valor_carro;

    // se o motorista teve menos de 3 infrações, tem um desconto de 10% no valor do seguro
    if(qtd_infracoes < 3) {
        seguro *= 0.9
    }

    // exibindo resultado
    show_result.innerHTML = `Seu seguro custará: R$ ${seguro}`;
}