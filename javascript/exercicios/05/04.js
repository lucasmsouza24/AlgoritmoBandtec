function rola_pizza() {
    // regatando valores dos inputs
    var valor_pizza = Number(input_valor_pizza.value);
    var qtd_amigos = Number(input_qtd_amigos.value);
    var valor_limite = Number(input_valor_limite.value);

    // calculando valor que cada amigo vai pagar
    var valor_por_pessoa = valor_pizza / qtd_amigos;

    // exibindo resultado
    show_result.innerHTML = `<p>Cada amigo vai pagar R$ ${valor_por_pessoa.toFixed(2)} pela pizza.</p>`;

    // exibindo msg adicional caso o valor por pessoa seja maior que o valor limite
    if (valor_por_pessoa > valor_limite) {
        show_result.innerHTML += "<p>Deu ruim! Pìzza muito cara!</p>";
    } else {
        show_result.innerHTML += "<p>Uhu! Vamos pedir a pizza!</p>";
    }

}