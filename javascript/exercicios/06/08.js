function calcular_preju() {
    // armazenando valores dos inputs
    var valor_avista = Number(in_avista.value);
    var taxa_juros = Number(in_taxa_juros.value);
    var qtd_parcelas = Number(in_qtd_parcelas.value);

    // calculando
    var primeiro_termo = valor_avista / qtd_parcelas;
    var soma_parcelas = primeiro_termo;
    var razao = 1 + (taxa_juros / 100);
    var q = razao;

    var sn = (primeiro_termo * (razao ** qtd_parcelas - 1)) / (razao - 1)

    display.innerHTML = `Seu carro vai sair por um total de $${sn.toFixed(2)}. Após 1 mês, ele já vai valer só R$${valor_avista * 0.8}. Porque comprou financiado, vai pagar o correspondente a ${(sn / valor_avista).toFixed(2)} carros`;

}