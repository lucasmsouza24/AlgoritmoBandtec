function verificar_ajuda() {
    if(Number(in_renda_ind.value) <= 1050 && Number(in_renda_ind.value) <= 2100) {
        alert("Você terá direito!");
    } else {
        alert("Você NÃO terá direito");
    }
}