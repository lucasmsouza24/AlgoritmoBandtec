function result() {
    var buduia = Number(ze_buduia_votos.value);
    var bigodenha = Number(maria_bigodenha_votos.value);
    var brancos = Number(brancos_votos.value);
    var nulos = Number(nulos_votos.value);
    var total = buduia + bigodenha + brancos + nulos
    display.innerHTML = `<h3>Total de votos: ${total}</h3> 
    <p>Zé Buduia: ${buduia * 100 / total}% (${buduia} votos)</p> 
    <div style="background-color: blue; height: 20px; width: ${(buduia * 100 / total) * 4}px;"></div>
    <p>Maria Bigodenha: ${bigodenha * 100 / total}% (${bigodenha} votos)</p>
    <div style="background-color: red; height: 20px; width: ${(bigodenha * 100 / total) * 4}px;"></div>
    <p>Inválidos: ${(nulos + brancos) * 100 / total}% (${brancos + nulos} votos)</p>
    <div style="background-color: black; height: 20px; width: ${((brancos + nulos) * 100 / total) * 4}px"></div>`;
}