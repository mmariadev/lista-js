function ex07(){

    let resposta = prompt("Bem vindo a nossa sorveteria, você deseja ver o cardápio? 1=sim ou 2=não");
    if (resposta === "1") {
        prompt(`Código   Sabor        Preço\n
     a       Chocolate   R$ 1,50\n
     b       Morango     R$ 2,50\n
     c       Creme       R$ 2,50\n
     d       Manga       R$ 3,20\n
     e       Melancia    R$ 3,40\n
     f       Vanilla ice R$ 3,00\n
     g       Céu azul    R$ 3,60\n
     h       Brownie     R$ 4,00\n
     i       Hawaiano    R$ 5,00\n`);
     let codigo = prompt("Digite o código do sabor que deseja comprar:");
     switch(codigo.toLowerCase()) {
        case "a":
            alert("Você escolheu o sabor Chocolate, o preço é R$ 1,50");
            break;
        case "b":
            alert("Você escolheu o sabor Morango, o preço é R$ 2,50");
            break;
        case "c":
            alert("Você escolheu o sabor Creme, o preço é R$ 2,50");
            break;
        case "d":
            alert("Você escolheu o sabor Manga, o preço é R$ 3,20");
            break;
        case "e":
            alert("Você escolheu o sabor Melancia, o preço é R$ 3,40");
            break;
        case "f":
            alert("Você escolheu o sabor Vanilla ice, o preço é R$ 3,00");
            break;
        case "g":
            alert("Você escolheu o sabor Céu azul, o preço é R$ 3,60");
            break;
        case "h":
            alert("Você escolheu o sabor Brownie, o preço é R$ 4,00");
            break;
        case "i":
            alert("Você escolheu o sabor Hawaiano, o preço é R$ 5,00");
            break;
     }
    } else {
        alert("Obrigado pela visita!");
    }
}