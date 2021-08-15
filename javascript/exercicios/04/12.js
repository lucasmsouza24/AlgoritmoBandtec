function analisar_peso() {
    // armazenando valores dos inputs
    var qtd_homens = Number(in_qtd_homens.value);
    var qtd_mulheres = Number(in_qtd_mulheres.value);

    // calculando peso estimado
    var peso_estimado = (qtd_homens * 80) + (qtd_mulheres * 60);

    // exibindo resultado
    show_result.innerHTML = `<p>Este elevador suporta 800 Kg e o peso estimado desta lotação é de ${peso_estimado}kg</p>`;

    // exibindo aviso caso peso estimado seja maior que 800
    if (peso_estimado > 800) {
        show_result.innerHTML += "<p id='warning'>Será necessário descer alguém para que o elevador se movimente</p>";
        warning.style.color = "blue";
    }   
}