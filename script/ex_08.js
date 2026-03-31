function ex08() {
let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);

    alert("A diferença entre " + a + " e " + b + " é: " + Math.abs(a - b));    

    let soma = a*2 + b*3;
    alert("A soma do dobro de " + a + " com o triplo de " + b + " é: " + soma);

    let multiplicação = a * b;
    alert("A multiplicação de " + a + " com " + b + " é: " + multiplicação);
}