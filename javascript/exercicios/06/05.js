function exibir_potencia() {
    // armazenando valores dos inputs
    var a = Number(in_a.value);
    a **= Number(in_b.value);

    // exibindo valor
    display.innerHTML = `${in_a.value} ** ${in_b.value} = ${a}`;
}