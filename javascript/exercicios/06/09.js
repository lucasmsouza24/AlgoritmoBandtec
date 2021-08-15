function infec_ontem() {
    // armazenando valor do input
    var qtd_infec_hj = Number(in_qtd_pessoas_infectadas_hj.value);

    // calculando quantas pessoas estavam infectadas no dia anterior
    var qtd_infec_ontem = qtd_infec_hj - 35

    // arredondando valor para 0 caso valor negativo
    if(qtd_infec_ontem < 0) {
        qtd_infec_ontem = 0;
    }

    // exibindo resultado
    display.innerHTML = `Ontem haviam ${qtd_infec_ontem} pessoas infectadas pelo SkolVírus.`
}

function infec_amanha() {
    // armazenando valor do input
    var qtd_infec_hj = Number(in_qtd_pessoas_infectadas_hj.value);

    // calculando quantas pessoas estarão infectadas amanhã
    var qtd_infec_amanha = qtd_infec_hj + 35;

    // exibindo resultados
    display.innerHTML = `Amanhã haverão ${qtd_infec_amanha} pessoas infectadas pelo SkolVírus.`
}

function infec_um_mes() {
    // armazenando valor do input
    var qtd_infec_hj = Number(in_qtd_pessoas_infectadas_hj.value);

    // calculando quantas pessoas estarão infectadas em 30 dias
    var qtd_infec_mes = qtd_infec_hj + (35 * 30);

    // exibindo resultado
    display.innerHTML = `Em 30 dias haverão ${qtd_infec_mes} pessoas infectadas`;
    
}