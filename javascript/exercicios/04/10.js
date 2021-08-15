function verificar_fin() {
    // armazenando valores dos inputs
    var renda_familiar = Number(in_renda_familiar.value);
    var valor_prestacao = Number(in_valor_prestacao.value);

    // calculando tamanho da parcela da prestação em relação a renda familiar
    var percent_da_renda_familiar = valor_prestacao / renda_familiar * 100;

    // exibindo resultado
    show_result.innerHTML = `<p>A prestação corresponde a ${percent_da_renda_familiar}% da renda familiar</p>`;

    // complementando resultado caso valor calculado seja maior que 30%
    if (percent_da_renda_familiar > 30) {
        show_result.innerHTML += "<p id='warning'><b>Será necessário complementar a renda familiar</b></p>"; 
        warning.style.color = "red";
    }
}