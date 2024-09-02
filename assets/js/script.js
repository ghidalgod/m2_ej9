//1
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');

text1.addEventListener('mouseover', () => {
    text2.style.display = 'block';
});

text1.addEventListener('mouseout', () => {
    text2.style.display = 'none';
});

//2
const caja2 = document.getElementById('caja2');
const imagen = document.getElementById('img');

caja2.addEventListener('click', () => {
    imagen.style.width = '200px'; // Agrandar un 100%
});

caja2.addEventListener('mouseout', () => {
    imagen.style.width = '100px'; // Volver al tamaño inicial
});

//3
const caja3 = document.getElementById('caja3');
let isLarge = false;

caja3.addEventListener('dblclick', () => {
    if (isLarge) {
        caja3.style.fontSize = '1em'; // Volver al tamaño original
    } else {
        caja3.style.fontSize = '2em'; // Agrandar el texto
    }
    isLarge = !isLarge;
    });