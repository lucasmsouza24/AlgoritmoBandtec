function divisao() {
    var n1 = Number(in_n1.value);
    var n2 = Number(in_n2.value);
    var n3 = n1 / n2;

    // Number.toFixed
    show_result.innerHTML = `${n1} / ${n2} = ${n3.toFixed(2)}`;

}