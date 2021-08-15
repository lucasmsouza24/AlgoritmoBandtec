function verificar_situacao() {
    var idade = Number(in_idade.value);
    var peso = Number(in_peso.value);

    if (idade > 15 && peso <= 100) {
        display.innerHTML = "Você poderá brincar :)";
    } else {
        display.innerHTML = "Você não poderá brincar :( ";
    }
}