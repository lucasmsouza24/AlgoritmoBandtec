function ver_pares() {
    var c = 1;
    while(c <= 100) {
        if(c % 2 == 0) {
            display.innerHTML += `<p>${c}</p>`;
        }
        c++;
    }
}