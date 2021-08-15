function calc_orc() {
    var xcano = Number(input_metros_de_cano.value);
    var nicanor = 10 * xcano + 50;
    var rotirute = 9.8 * xcano + 600;
    display.innerHTML = `<h4>Para desentupir ${xcano} metros de cano</h4>O serviço pela Nicanor sai por R$ ${nicanor} <br> O serviço pela Rotirute sai por R$ ${rotirute} <br> A diferença de valores é de R$ ${nicanor - rotirute}`;
    input_metros_de_cano.value = '';
}