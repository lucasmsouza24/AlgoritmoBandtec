function simular() {
    var estado_rua_a = select_rua_a.value; 
    var estado_rua_b = select_rua_b.value;
    
    if(estado_rua_a == "1" && estado_rua_b == "1") {
        display.innerHTML = "Risco de colisão";
    } else if (estado_rua_a == "0" && estado_rua_b == "0") {
        display.innerHTML = "Risco de engarrafamento";
    } else {
        display.innerHTML = "Fluxo perfeito";
    }
}