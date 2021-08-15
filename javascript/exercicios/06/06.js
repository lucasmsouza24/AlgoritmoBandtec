function exibir_raiz() {
    // armazenando valores dos inputs
    var a = Number(in_a.value);
    a **= (1/Number(in_b.value));

    // exibindo valor
    display.innerHTML = `A raiz ${in_b.value}º de ${in_a.value} é ${a}`;
}