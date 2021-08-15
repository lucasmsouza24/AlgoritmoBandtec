function calc_media() {
    // consultando notas
    var n1 = Number(input_n1.value);
    var n2 = Number(input_n2.value);
    var n3 = Number(input_n3.value);

    // calculando media
    var media = (n1 + n2 + n3) / 3;

    // exibindo media
    show_result.innerHTML = `<p>Sua média é: ${media}</p>`;

    // alterando exibição caso nota seja maior que 9.4
    if (media > 9.5) {
        show_result.innerHTML += `<p>Parabéns, você é fora de série!</p>`;
    }
}