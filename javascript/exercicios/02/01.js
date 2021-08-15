// cálculo e exibição dos valores
function calc_sono() {
    var sonoTotal = Number(sono_total.value);
    display.innerHTML =  `<h3>Ao dormir ${sonoTotal} horas, você dormiu:</h3><p>${sonoTotal * 0.05} horas na fase 1,</p> <p>${sonoTotal * 0.45} horas na fase 2</p> <p>${sonoTotal * 0.3} horas na fase 3</p> <p>${sonoTotal * 0.2} horas na fase REM</p>`
}