function ex10() {
    let nome = prompt("Informe seu nome completo:");
    let salario_bruto = prompt("Informe seu salário bruto:");

    let salario_liquido = salario_bruto * 0.92;

    alert(`Olá, ${nome}! Seu salário bruto é: R$ ${salario_bruto} porém com o desconto de 8% do INSS, seu salário líquido é: R$  ${salario_liquido}`);
}