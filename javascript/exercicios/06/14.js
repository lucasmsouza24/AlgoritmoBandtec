var hp1_value = 50;
    var hp2_value = 50;
    var legend1_contador_value = 0
    var legend2_contador_value = 0
    
    function start_game() {
        // exibindo imagens
        lutadores.style.display = "block";

        // exibindo barras de hp
        hp1.style.display = "block";
        hp2.style.display = "block";

        // definindo largura das barras de hp
        hp1.style.width = hp1_value + "%";
        hp2.style.width = hp2_value + "%";

        // exibindo contador de socos
        legend1_txt.style.display = "block";
        legend2_txt.style.display = "block";

    }

    function attack_scorpion() {
        hp1_value -= 5;
        hp1.style.width = hp1_value + "%";
        legend1_contador_value += 1;
        legend1_contador.innerHTML = legend1_contador_value;
    }

    function attack_subzero() {
        hp2_value -= 5;
        hp2.style.width = hp2_value + "%";
        legend2_contador_value += 1;
        legend2_contador.innerHTML = legend2_contador_value;
    }