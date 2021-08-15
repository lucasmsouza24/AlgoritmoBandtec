function verificar_nota() {
    // armazenando opção
    var option = filmes_marvel.value;

    // atribuindo nota de acordo com o filme
    var nota = 0;
    var nome_filme = "";

    if (option == "dr_strange") {
        nota = 9;
        nome_filme = "Dr. Strange";
    } else {
        if (option == "iron_man_3") {
            nota = 8;
            nome_filme = "Iron Man 3";
        } else {
            if (option == "ant_man") {
                nota = 7;
                nome_filme = "Ant Man";
            }
            else {
                if(option == "captain_american") {
                    nota = 8;
                    nome_filme = "Captain American";
                }
            }
        }
    }

    // exibindo valor
    if (option == "invalido") {
        alert("Selecione um filme!");
    } else {
        alert(`O filme ${nome_filme} tem nota ${nota} no IMDB`)
    }
}