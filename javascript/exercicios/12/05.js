function btnTabuada() {
    var c = 0;
    var k = in_tabuada.value;
    while (c <= 10) {
        display.innerHTML += `<p>${k} x ${c} = ${k * c}</p>`;
        c++;
    }
}