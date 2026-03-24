function ex05(){
    let numeroInteiro = parseInt(prompt("Digite um número inteiro:"));
    if (numeroInteiro % 2 === 0) {

        numeroInteiro = numeroInteiro + 1;
        console .log("O número era par, adicionei +1 para se tornar ímpar: " + numeroInteiro);
        alert("O número era par e agora é ímpar, o novo número é: " + numeroInteiro);
    } else {
        numeroInteiro = numeroInteiro - 1;
        console.log("O número era ímpar, subtraí -1 para se tornar par: " + numeroInteiro);
        alert("O número era ímpar e agora é par, o novo número é: " + numeroInteiro);
    }
}