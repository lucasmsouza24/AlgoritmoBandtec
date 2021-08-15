function orcamento() {
    var area = Number(input_m2_grama.value);

    // Grama Esmeralda
    var esmeralda_val = 9.7 * area;
    var esmeralda_frete = 150;
    var esmeralda_total = esmeralda_val + esmeralda_frete;

    // Grama Batatais
    var batatais_val = 8.7 * area;
    var batatais_frete = 200;
    var batatais_total = batatais_val + batatais_frete;

    // Grama São Carlos
    var saocarlos_val = 10.7 * area;
    var saocarlos_frete = 100;
    var saocarlos_frete = saocarlos_val + saocarlos_frete;

    display.innerHTML = `<h4>Para ${area} m² de grama, nosso orçamento é:</h4> Grama Esmeralda = R$ ${esmeralda_val}, frete = R$ ${esmeralda_frete}, valor total = R$ ${esmeralda_total} <br> Grama Batatais = R$ ${batatais_val}, frete = R$ ${batatais_frete}, valor total = R$ ${batatais_total} <br> Grama São Carlos = R$ ${saocarlos_val}, frete = R$ ${saocarlos_frete}, valor total = R$ ${saocarlos_frete}`;

    input_m2_grama.value = "";
}