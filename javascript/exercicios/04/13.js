function verificar_nivel() {
    // armazenando valores dos inputs
    var serie_titulo = in_serie_titulo.value;
    var total_episodios = Number(in_total_episodios.value);

    // calculando total de horas que o usuário já consumiu
    var total_horas = (total_episodios * 22) / 60;

    // exibindo mensagem
    show_result.innerHTML = `<p>Vejo que você gosta da série ${serie_titulo}</p>`;
    
    // mostrando mensagem adicional caso o usuário já tenha consumido mais de 30 horas da série especificada
    if (total_horas > 30) {
        show_result.innerHTML += "<p>Uau, você realmente gosta dessa série!</p>";
    }
}