var frase = "";

    function btnRegistrar() {
        frase = in_frase.value;
        in_frase.value = "";
    }

    function btnExibir() {
        display.innerHTML = "<p>" + frase +"</p>";
    }