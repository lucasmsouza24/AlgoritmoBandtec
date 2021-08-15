function verificar_estacao() {
    // armazenando valor do select
    var mes_escolhido = select_meses.value;

    // verificando estação

    if (mes_escolhido == "mes12" || mes_escolhido == "mes1" || mes_escolhido == "mes2") {
        // inverno
        img_estacao.src = "https://static.mundoeducacao.uol.com.br/mundoeducacao/2020/06/inverno.jpg";
        label_estacao.innerHTML = "Inverno";
    } else if (mes_escolhido == "mes3" || mes_escolhido == "mes4" || mes_escolhido == "mes5") {
        // primavera
        img_estacao.src = "https://www.e-dublin.com.br/wp-content/uploads/2018/04/dreamstime_s_80594896-e1522327677497-795x370.jpg";
        label_estacao.innerHTML = "Primavera";
    } else if (mes_escolhido == "mes6" || mes_escolhido == "mes7" || mes_escolhido == "mes8") {
        // verão
        img_estacao.src = "https://cdn.abcdoabc.com.br/verao_5508634b.jpg";
        label_estacao.innerHTML = "Verão";
    } else {
        // outono
        img_estacao.src = "https://s3.static.brasilescola.uol.com.br/be/2021/03/outono.jpg";
        label_estacao.innerHTML = "Outono";
    }
}   