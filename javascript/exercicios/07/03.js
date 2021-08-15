function analisar_time() {
    // armazenando valor do select
    var time_selecionado = select_time.value;

    // verificando time selecionado e exibindo mensagem correspondente
    if (time_selecionado == 'time_corinthians') {
        display.innerHTML = 'Salve o Corinthians';
        display.style.backgroundColor = 'black';
        display.style.color = 'white';
    } else if (time_selecionado == 'time_palmeiras') {
        display.innerHTML = 'Salve o alviverde imponente';
        display.style.backgroundColor = 'green';
        display.style.color = 'white';
    } else if (time_selecionado == 'time_santos') {
        display.innerHTML = 'Agora que dá a bola é o Santos';
        display.style.backgroundColor = 'white';
        display.style.color = 'black';
    } else if (time_selecionado == 'time_sao_paulo') {
        display.innerHTML = 'Salve o Tricolor paulista';
        display.style.backgroundColor = 'black';
        display.style.color = 'red';
    }
}