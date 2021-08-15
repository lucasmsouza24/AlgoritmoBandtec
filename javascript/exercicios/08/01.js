function btn_preco() {
    var nome = in_nome.value;
    var total = Number(select_bebida.value) + Number(select_comida.value);

    display.innerHTML = `Olá, ${nome}. Seu almoço vai custar um total de R$ ${total}`;
}