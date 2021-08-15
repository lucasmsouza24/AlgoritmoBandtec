function verificar_clima() {
    // armazenando valor do input
    var temperatura = Number(in_temperatura.value);

    // verificando se temperatura é menor que 10
    if(temperatura < 10) {
        display.innerHTML = "Apropriada p/ conservar alimento";
        tag_img.src = "06-maca-boa.jpg";
    } else {
        display.innerHTML = "Inapropriada p/ conservar alimento";
        tag_img.src = "06-maca-estragada.jpg";
    }
}