function passagens_8() {
    var qtd_passagens = 8;
    var tarifa_cheia = 4.4
    var val = (1 - (32.45 / 35.2)) * 100;

    console.log(val);

    // exibindo resultados
    display.innerHTML = `Ao comprar X passagens, você pagou Y% a menos. É como se tivesse ganhado Z passagens de bônus`;
}