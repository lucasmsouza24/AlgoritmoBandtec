function analisar_conta() {
    // armazenando valores dos inputs
    var saldo_conta = Number(in_saldo_conta.value);
    var debito = Number(in_debito.value);

    // calculando saldo atual
    var saldo_atual = saldo_conta - debito;
    
    // exibindo resultado
    show_result.innerHTML = `<p>O saldo atual da conta corrente é R$ ${saldo_atual}</p>`;
    show_result.style.color = "black";
    show_result.style.fontWeight = "normal";

    // alterando cores caso saldo seja negativo
    if (saldo_atual < 0) {
        show_result.style.color = "red";
        show_result.style.fontWeight = "bold";
    }
}