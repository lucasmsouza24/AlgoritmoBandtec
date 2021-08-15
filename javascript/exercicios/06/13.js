function comer_pao() {
    // armazenando valores
    var qtd_paes_comidos = Number(span_pao_frances.innerHTML);
    var total_kcal = Number(span_total_calorias.innerHTML);
    
    // atualizando quantidade de paes comidos
    qtd_paes_comidos++;
    span_pao_frances.innerHTML = qtd_paes_comidos;

    // atualizando total calorias
    total_kcal += 50;
    span_total_calorias.innerHTML = total_kcal;
}

function comer_carne_bovina() {
    // armazenando valores
    var qtd_carne_bovina_comidos = Number(span_carne_bovina.innerHTML);
    var total_kcal = Number(span_total_calorias.innerHTML);
    
    // atualizando quantidade de paes comidos
    qtd_carne_bovina_comidos++;
    span_carne_bovina.innerHTML = qtd_carne_bovina_comidos;

    // atualizando total calorias
    total_kcal += 100;
    span_total_calorias.innerHTML = total_kcal;
}

function comer_carne_soja() {
    // armazenando valores
    var qtd_carne_soja_comidos = Number(span_carne_soja.innerHTML);
    var total_kcal = Number(span_total_calorias.innerHTML);
    
    // atualizando quantidade de paes comidos
    qtd_carne_soja_comidos++;
    span_carne_soja.innerHTML = qtd_carne_soja_comidos;

    // atualizando total calorias
    total_kcal += 30;
    span_total_calorias.innerHTML = total_kcal;
}

function comer_arroz_feijao() {
    // armazenando valores
    var qtd_arroz_feijao_comidos = Number(span_arroz_feijao.innerHTML);
    var total_kcal = Number(span_total_calorias.innerHTML);
    
    // atualizando quantidade de paes comidos
    qtd_arroz_feijao_comidos++;
    span_arroz_feijao.innerHTML = qtd_arroz_feijao_comidos;

    // atualizando total calorias
    total_kcal += 120;
    span_total_calorias.innerHTML = total_kcal;
}

function restart() {
    span_pao_frances.innerHTML = 0
    span_carne_bovina.innerHTML = 0
    span_carne_soja.innerHTML = 0
    span_arroz_feijao.innerHTML = 0
    span_total_calorias.innerHTML = 0
}