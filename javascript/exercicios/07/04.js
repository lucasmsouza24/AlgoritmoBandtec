function verificar_calorias() {
    // armazenando valores dos inputs
    var qtd_paes = Number(in_qtd_paes.value);
    var qtd_bolachas = Number(in_qtd_bolachas.value);
    var qtd_copos = Number(in_qtd_copos.value);

    // calculando calorias individuais
    var kcal_paes = qtd_paes * 50;
    var kcal_bolachas = qtd_bolachas * 80;
    var kcal_copos = qtd_copos * 70;

    // calorias no total
    var kcal_total = kcal_paes + kcal_bolachas + kcal_copos;
    
    // display.innerHTML = `Você está consumindo ${kcal_total} kcal`;

    // resultados possíveis
    // Parabéns, vai sair em forma da quarentena!", caso as calorias sejam menores do que 200
    if (kcal_total < 200) {
        display.innerHTML = "Parabéns, vai sair em forma da quarentena!";
    }
    // Cuidado, vai ficar mais "fofinho(a)" após quarentena!
    else if (kcal_total <= 400 ) {
        display.innerHTML = 'Cuidado, vai ficar mais "fofinho(a)" após quarentena!';
    }
    // Bom, acho que muitos não vão te reconhecer após a quarentena
    else {
        display.innerHTML = "Bom, acho que muitos não vão te reconhecer após a quarentena";
    }

    console.log(kcal_total);
}