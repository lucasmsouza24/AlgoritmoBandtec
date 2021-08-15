function repetir() {
    var c = 0;
    while (c < 100) {
        display.innerHTML += `<p>${idfrase.value} ${c}</p>`;
        c++;
    }
}