function analisar_conta() {
    // armazenando valores dos inputs
    var saldo = Number(in_saldo.value);
    var debito = Number(in_debito.value);

    var novo_saldo = saldo - debito;

    // mostrando novo saldo
    display.innerHTML = `o saldo atual da conta corrente é R$ ${novo_saldo.toFixed(2)}`;

    // alterando cor se novo_saldo for negativo
    if (novo_saldo < 0) {
        display.style.color = "red";
        display.style.fontWeight = "bold";
        display.style.fontStyle = "normal";
    } else {
        display.style.color = "blue";
        display.style.fontWeight = "normal";
        display.style.fontStyle = "italic";
    }
}