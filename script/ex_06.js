function ex06(){
    let letraAlfabeto = prompt("Digite uma letra qualquer do alfabeto:").toLowerCase();
    if (letraAlfabeto === "a" || letraAlfabeto === "e" || letraAlfabeto === "i" || letraAlfabeto === "o" || letraAlfabeto === "u") {
        alert("A letra " + letraAlfabeto + " é uma vogal.");
    } else {
        alert("A letra " + letraAlfabeto + " é uma consoante.");
    }
}