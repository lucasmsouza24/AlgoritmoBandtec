function depositar() {
    // armazenando valor do input
    var valor_deposito = Number(in_val_deposito.value);
    var valor_atual = Number(cofreValor.innerHTML);
    var qtd_depositos = Number(historico_qtd_depositos.innerHTML);
    qtd_depositos++;

    // exibindo novo valor
    cofreValor.innerHTML = (valor_atual + valor_deposito).toFixed(2);

    // adicionando depósito ao histórico
    add_deposito(valor_deposito);
    historico_qtd_depositos.innerHTML = qtd_depositos;

    // limpando input
    in_val_deposito.value = "";
}

function sacar_tudo() {
    // verificando quantidiade de saques 
    var qtd_saques = Number(historico_qtd_saques.innerHTML);

    // atualizando quantidade de saques
    qtd_saques++;
    historico_qtd_saques.innerHTML = qtd_saques;

    // adicionando saque ao histórico
    historico_saques.innerHTML += `<p class="saque">saque: R$ ${cofreValor.innerHTML}</p>`;
    cofreValor.innerHTML = (0).toFixed(2);
}

function add_deposito(val_deposito) {
    historico_saques.innerHTML += `<p class="deposito">deposito: R$ ${val_deposito.toFixed(2)}</p>`
}