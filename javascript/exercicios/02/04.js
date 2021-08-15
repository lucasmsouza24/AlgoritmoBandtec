// calculo e exibição de resultados
function showTable() {
    var baseNumber = Number(base_number.value);
    display.innerHTML = `<h3>Tabuada do ${baseNumber}</h3>
    <p>1 x ${baseNumber} = ${1 * baseNumber}</p>
    <p>2 x ${baseNumber} = ${2 * baseNumber}</p>
    <p>3 x ${baseNumber} = ${3 * baseNumber}</p>
    <p>4 x ${baseNumber} = ${4 * baseNumber}</p>
    <p>5 x ${baseNumber} = ${5 * baseNumber}</p>
    <p>6 x ${baseNumber} = ${6 * baseNumber}</p>
    <p>7 x ${baseNumber} = ${7 * baseNumber}</p>
    <p>8 x ${baseNumber} = ${8 * baseNumber}</p>
    <p>9 x ${baseNumber} = ${9 * baseNumber}</p>`;
}