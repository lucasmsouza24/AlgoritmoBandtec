function area() {
    // armazenando valor do input
    var raio = Number(in_raio.value);

    // raio ao quadrado
    raio **= 2;
    
    // raio ao quadrado * pi (area)
    raio *= 3.14;

    // exibindo resultado
    display.innerHTML = `area: ${raio.toFixed(2)} m`
}