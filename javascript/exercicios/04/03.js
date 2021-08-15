function verificar_situacao() {
    // regatando quantidade de filhos
    var qtd_filhos = Number(input_qtd_filhos.value);

    // msg caso não tenha filhos
    if (qtd_filhos == 0) {
        var msg = "Sem descendentes";
    }

    // msg caso filho único
    if (qtd_filhos == 1) {
        var msg = "Filho único";
    }

    // msg caso tenha 2 ou mais filhos
    if (qtd_filhos >= 2) {
        var msg = "Crescei e multiplicai-vos!";
    }

    // mostrando resultado
    show_result.innerHTML = msg;
}