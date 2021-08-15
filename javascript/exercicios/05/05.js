function analisar_freq() {
    // armazenando valor do input
    var freq = Number(in_freq.value);

    // verificando se o aluno é um turista ou presente
    if (freq < 50) {
        // turista
        display.innerHTML = "<img id='img05' src='05-turista.jpg'>";
    } else {
        // estudioso
        display.innerHTML = "<img id='img05' src='05-estudioso.jpg'>";
    }

    img05.style.width = "300px";
}