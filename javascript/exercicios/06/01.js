function calc_imc() {
    // armazenando valores dos inputs
    var peso = Number(in_peso.value);
    var altura = Number(in_altura.value);

    // calculando imc e armazenando dentro da variável peso
    // (isso não faria sentido se não fosse a exigência do enunciado)
    peso /= altura ** 2;

    // exibindo resultado
    display.innerHTML = `IMC: ${peso.toFixed(1)}`;
}