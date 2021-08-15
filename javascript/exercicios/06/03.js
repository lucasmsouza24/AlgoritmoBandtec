function raiz_quadrada() {
    // armazenando valor do input num
    var num = Number(in_num.value);

    // calculando raiz quadrada
    num **= 1/2;

    // exibindo resultado
    display1.innerHTML = num;
}  

function raiz_cubica() {
    // armazenando valor do input num
    var num = Number(in_num.value);

    // calculando raiz cubica
    num **= 1/3;

    // exibindo resultado
    display2.innerHTML = num;
}