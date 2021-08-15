function calc_pg() {
    // armazenando valores dos inputs
    var primeiro_termo = Number(in_primeiro_termo.value);
    var razao = Number(in_razao.value);
    var termo_desejado = Number(in_termo_desejado.value);

    // calculando valor do termo desejado
    var valor = primeiro_termo 
    valor *= razao; 
    valor **= (termo_desejado - 1);

    // exibindo resultado
    display.innerHTML = `O ${termo_desejado}º termo nessa PG será ${valor}`
}