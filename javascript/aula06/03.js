function verificar_notas() {
    // armazenando valores de seleção

    var filme_dc = filmes_dc.value;         // filme dc
    var filme_marvel = filmes_marvel.value  // filme marvel

    // armazenando notas dos filmes
    var nota_dc = Number(dc_nota.value);
    var nota_marvel = Number(marvel_nota.value);

    var percent = (nota_marvel * 100 / nota_dc) - 100 ;

    // exibindo resultado
    alert(`${filme_dc}: ${nota_dc} \n ${filme_marvel}: ${nota_marvel} \n ${filme_marvel} é ${percent}% melhor que ${filme_dc}`);
}