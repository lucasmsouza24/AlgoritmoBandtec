function divisao() {
    var primeiro_numero = Number(in_primeiro_numero.value);
    var segundo_numero = Number(in_segundo_numero.value);
    var resultado_divisao = primeiro_numero / segundo_numero;

    span_resultado.innerHTML = `O resultado de ${primeiro_numero} dividido por ${segundo_numero} é: ${resultado_divisao.toFixed(2)}<br><br> <p>é um numero pequeno</p>`;

    /* 
        Com o que vimos até agora E sem utilizar mais de 1 IF:
        Exiba "É ... um número pequeno (igual a qualidade dos filmes da Marv
el"), quando:
        O número for menor ou igual a 10;
    */

    if (resultado_divisao > 10) {
        span_resultado.innerHTML = `O resultado de ${primeiro_numero} dividido por ${segundo_numero} é: ${resultado_divisao.toFixed(2)}<br><br> <p>é um número bem grande</p>`;
    }

}