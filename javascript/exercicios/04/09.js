function calcular_valor_conta() {
    // consultando input
    var potencia_mensal = Number(in_kwh.value);
    // calculando valor mensal a ser pago
    var valor_mensal = potencia_mensal * 0.85;

    // aplicando desconto de 10% caso o usuário tenha gasto menos de 100kWh por mês
    if(potencia_mensal < 100) {
        valor_mensal *= 0.9;
    }

    alert(`Sua conta de luz sairá por: R$ ${valor_mensal}`);
}