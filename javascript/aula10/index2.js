function btnClick() {
    if (input_num.value >= 2) {
        var c = 0;
        while (c < input_num.value) {
            display.innerHTML += "<p>frase qualquer</p>";
            c++;
        }
    } else {
        display.innerHTML += "<p>frase qualquer</p>";
    }
}