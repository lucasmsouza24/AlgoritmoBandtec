function transformacoes() {
    var frase = in_frase.value;
    span_first_letter.innerHTML = frase[0];
    span_last_letter.innerHTML = frase[frase.length - 1];


    if(frase.indexOf("@") > -1) {
        span_tem_arroba.innerHTML = "Sim"
    } else {
        span_tem_arroba.innerHTML = "Não"
    }

    if(frase.startsWith("a") == true) {
        span_comeca_correto.innerHTML = "Sim";
    } else {
        span_comeca_correto.innerHTML = "Não";
    }

    if(frase.endsWith(".com.br") == true) {
        span_termina_correto.innerHTML = "Sim";
    } else {
        span_termina_correto.innerHTML = "Não";
    }

}