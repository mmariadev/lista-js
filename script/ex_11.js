function ex11() {
    let salario = Number(prompt("Digite o salário:"));
    let taxa;

    if (salario <= 1000) {
        taxa = 0.08;
    } else if (salario <= 1500) {
        taxa = 0.085;
    } else {
        taxa = 0.09;
    }

    let desconto = salario * taxa;
    let salarioLiquido = salario - desconto;

    alert(
        `Salário informado: R$ ${salario.toFixed(2)}\n` +
        `Taxa aplicada: ${taxa * 100}%\n` +
        `Desconto: R$ ${desconto.toFixed(2)}\n` +
        `Salário líquido: R$ ${salarioLiquido.toFixed(2)}`
    );
}