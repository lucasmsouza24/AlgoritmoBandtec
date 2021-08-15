function analise() {
    // armazenando os dados
    // equipe 1
    var nome_equipe1 = input_equipe1_nome.value;
    var nome_projeto1 = input_equipe1_nome_projeto.value;
    var duracao_dias_projeto1 = Number(input_equipe1_duracao_dias_projeto.value);
    var custo_total1 = Number(input_equipe1_custo_total.value);
    var horas_totais1 = Number(input_equipe1_horas_total.value);
    var horas_por_dia1 = horas_totais1 / duracao_dias_projeto1;
    var custo_por_hora1 = custo_total1 / horas_totais1;

    // equipe 2
    var nome_equipe2 = input_equipe2_nome.value;
    var nome_projeto2 = input_equipe2_nome_projeto.value;
    var duracao_dias_projeto2 = Number(input_equipe2_duracao_dias_projeto.value);
    var custo_total2 = Number(input_equipe2_custo_total.value);
    var horas_totais2 = Number(input_equipe2_horas_total.value);
    var horas_por_dia2 = horas_totais2 / duracao_dias_projeto2;
    var custo_por_hora2 = custo_total2 / horas_totais2;

    // proporção entre custo por hora dos projetos
    var proporcao = custo_por_hora1 * 100 / custo_por_hora2

    // exibição da analise de tempo
    text_tempo.innerHTML = `<h4>Análise de Tempo</h4> o projeto ${nome_projeto1} foi desenvolvido em <b style="color: red;">${horas_totais1}</b> horas num período de <b style="color: red;">${duracao_dias_projeto1}</b> dias, portanto a equipe ${nome_equipe1} trabalhou em média <b style="color: red;">${horas_por_dia1}</b> horas por dia nesse projeto. <br><br>
    o projeto ${nome_projeto2} foi desenvolvido em <b style="color: blue;">${horas_totais2}</b> horas num período de <b style="color: blue;">${duracao_dias_projeto2}</b> dias, portanto a equipe ${nome_equipe2} trabalhou em média <b style="color: blue;">${horas_por_dia2}</b> horas por dia nesse projeto.`;

    // exibição da analise de custo
    text_custo.innerHTML = `<h4>Análise de Custos</h4>A equipe ${nome_equipe1} desenvolveu o projeto ${nome_projeto1} em <b style="color: red;">${horas_totais2}</b> horas a um custo de R$ <b style="color: red;">${custo_total1}</b>, portanto o custo por hora desse projeto é R$ <b style="color: red;">${custo_por_hora1}</b>. <br><br>
    A equipe ${nome_equipe2} desenvolveu o projeto ${nome_projeto2} em <b style="color: blue;">${horas_totais2}</b> horas a um custo de R$ <b style="color: blue;">${custo_total2}</b>, portanto o custo por hora desse projeto é R$ <b style="color: blue;">${custo_por_hora2}</b> <br><br>
    Observe que o custo por hora do projeto ${nome_projeto1} é <b style="color: red;">${proporcao}%</b> do custo por hora do projeto ${nome_projeto2}`;

    // exibição do gráfico de custo/hora
    var barra1_tamanho = custo_por_hora1 * 1000 / (custo_por_hora1 + custo_por_hora2);
    var barra2_tamanho = custo_por_hora2 * 1000 / (custo_por_hora1 + custo_por_hora2);
    
    grafico.innerHTML = `<div id="barra_equipe1" style="background-color: red; float: left; height: 20px; width: ${barra1_tamanho}px;"></div>
    <div id="barra_equipe2" style="background-color: blue; float: left; height: 20px;
    width: ${barra2_tamanho}px;"></div>`;
    console.log('barra1:', barra1_tamanho)
    console.log('barra2: ', barra2_tamanho);

    // relaçao de custo hora de cada projeto com o mercado
    var custo_hora_mercado = Number(input_referencia_custo_mercado.value);
    var custo_hora_relacao_mercado1 = custo_por_hora1 * 100 / custo_hora_mercado;
    var custo_hora_relacao_mercado2 = custo_por_hora2 * 100 / custo_hora_mercado;

    // exibição da analise por referência
    text_referencia.innerHTML = `<h4>Análise de referência</h4>o projeto ${nome_projeto1} com custo por hora de R$ <b style="color: red;">${custo_por_hora1}</b> é <b style="color: red;">${custo_hora_relacao_mercado1}%</b> em relação a referência de mercado ${custo_hora_mercado} <br><br>
    o projeto ${nome_projeto2} com custo por hora de R$ <b style="color: blue;">${custo_por_hora2}</b> é <b style="color: blue;">${custo_hora_relacao_mercado2}%</b> em relação a referência de mercado ${custo_hora_mercado}`;
}