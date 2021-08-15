function calc_invest() {
    var qtdLamp = Number(input_lampadas_necessarias.value);
    var mediaConta = Number(input_media_conta_luz.value);
    var investimento = qtdLamp * 20;
    var economia = mediaConta * 0.1;
    var retornoMeses = investimento / economia;
    display.innerHTML = `O seu investimento em lâmpadas será de R$ ${investimento} <br> A sua economia na conta de luz será de R$ ${economia} <br> Portanto, em ${retornoMeses} meses, seu investimento será retornado`;
}