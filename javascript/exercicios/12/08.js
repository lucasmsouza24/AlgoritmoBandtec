function rotinaMensal() {
        
    var dia = 1;
    var dia_musculacao = 1;
    var variacao = Number(intervalo.value);

    while (dia <= 30) {
        var atividade = "Comer, dormir, etc.";
        if (dia_musculacao == dia){
            atividade = "<b>Musculação</b>";
            dia_musculacao += variacao;
        }
        display.innerHTML += `<p>Dia ${dia} - ${atividade}</p>`;
        dia++;
        console.log(variacao);
    }
    
}