// SE o aluno tiver nota >= 6
    //      SE o aluno tiver frequencia >= 70
    //          mostrar: "parabens, aprovado"
    // SE aluno não atender os requisitos
    //      mostrar: "Infelizmente, reprovado"
    function verificar_situacao() {
        // armazenando valores dos inputs
        var nota = Number(in_nota.value);
        var freq = Number(in_frequencia.value);

        // verificação
        if (nota >= 6 && freq >= 70) {
            alert("Parabens, aprovado!");            
        } else{
            alert("Infelizmente, reprovado!")
        }
    }