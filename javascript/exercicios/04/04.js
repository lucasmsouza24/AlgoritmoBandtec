function calc_refris() {
    // resgatando input 
    var qtd_refris_diario = Number(input_qtd_refris_diario.value);

    // calculando consumo anual de refrigerante 
    var qtd_refris_anual = qtd_refris_diario * 365;

    // exibindo resultado
    show_result.innerHTML = `<p>Você consome ${qtd_refris_anual} latinhas de refri por ano</p>`;

    if (qtd_refris_anual >= 500) {
        show_result.innerHTML += "<p>Cuidado com a diabete!<p>"
    }
}