var hp1_value = 50;
    var hp2_value = 50;
    var legend1_contador_value = 0;
    var legend2_contador_value = 0;
    
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
        // calculando quanto % menor hp tem em relação à maior hp
        if (hp1_value > hp2_value) {
            var hp1_percent = (hp2_value * 100) / hp1_value;

            // número aleatório entre 0 e 100
            var randomNum = Number((Math.random() * (100 - 1) + 1).toFixed(0));
            
            // ataque crítico
            if (hp1_percent < randomNum) {
                hp1_value -= 10 * 1.2;
            } else {
                // ataque normal
                hp1_value -= 10;
            }
        } else {
            // 0% de crítico (hp1 é menor ou igual à hp2)
            hp1_value -= 10;
        }

        if (hp1_value < 0) {
            hp1_value = 0;
        }

        hp1.style.width = hp1_value + "%";
        legend1_contador_value += 1;
        legend1_contador.innerHTML = legend1_contador_value;
    }

    function attack_subzero() {

        if (hp2_value > hp1_value) {
            var hp1_percent = (hp1_value * 100) / hp2_value;

            // número aleatório entre 0 e 100
            var randomNum = Number((Math.random() * (100 - 1) + 1).toFixed(0));
            
            // ataque crítico
            if (hp2_percent < randomNum) {
                hp2_value -= 10 * 1.2;
            } else {
                // ataque normal
                hp2_value -= 10;
            }
        } else {
            // 0% de crítico (hp1 é menor ou igual à hp2)
            hp2_value -= 10;
        }

        if (hp2_value < 0) {
            hp2_value = 0;
        }
        
        hp2.style.width = hp2_value + "%";
        legend2_contador_value += 1;
        legend2_contador.innerHTML = legend2_contador_value;
    }