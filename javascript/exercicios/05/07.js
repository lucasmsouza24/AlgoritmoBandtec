function provar() {
    // armazenando valor do input
    var minutos = Number(in_minutos.value);

    // verificando se o arroz está perfeito
    if (minutos == 5) {
        // arroz perfeito
        display.innerHTML = "Parabéns! Arroz Perfeito";
        tag_img.src = "07-arroz-perfeito.jpg";
    } else {
        if (minutos > 10) {
            // queimado
            display.innerHTML = "Arroz queimado!";
            tag_img.src = "07-arroz-queimado.jpg";
        } else {
            // papado
            display.innerHTML = "Arroz empapado";
            tag_img.src = "07-arroz-empapado.jpg";
        }
    }
}