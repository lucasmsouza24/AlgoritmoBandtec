function finalizar_compra() {
    var quantidade_macas = Number(input_qtd_macas.value);
    var custo_unidade = 0.75;

    // estrutura de decisão
    if(quantidade_macas >= 10) {
        // bloco do código que só será executado se a condição for true
        custo_unidade = 0.68;
    }

    var total_compra = quantidade_macas * custo_unidade;
    alert(`Valor total da compra: ${total_compra}`);

}