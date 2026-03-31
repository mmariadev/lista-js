function ex09() {
let a = Math.floor(Math.random() * 100);
let b = Math.floor(Math.random() * 100);

if (a > b) {
    alert(`Ordem decrescente dos valores gerados é: ${a}, ${b}`);
} else {
    alert(`Ordem decrescente dos valores gerados é: ${b}, ${a}`);
}
}