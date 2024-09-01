const coloresFondo = ['gray', 'lightblue', 'lightgreen', 'coral', 'red'];
const coloresParrafo = ['white', 'blue', 'red', 'green', 'orange'];
let indiceFondo = 0;
let indiceParrafo = 0;


const container = document.querySelector('.container');
const parrafo = document.querySelector('.parrafo');

function cambiarColor() {
    // Cambiar el color de fondo del div con clase "container"
    container.style.backgroundColor = coloresFondo[indiceFondo];
    indiceFondo = (indiceFondo + 1) % coloresFondo.length;

    // Cambiar el color del texto del párrafo con clase "parrafo"
    parrafo.style.color = coloresParrafo[indiceParrafo];
    indiceParrafo = (indiceParrafo + 1) % coloresParrafo.length;
};
