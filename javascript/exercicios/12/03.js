function filosofar() {
    if(in_frase.value == "") {
        alert("Mas qual a frase?");
    } else {
        var c = 0;
        while (c < in_repeticoes.value) {
            display.innerHTML += `<p>${in_frase.value}</p>`;
            c++;
        }
    }
 }