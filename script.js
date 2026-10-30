
let botonNaranja = document.getElementById("naranja");
let botonNegro = document.getElementById("negro");
let botonAmarillo = document.getElementById("amarillo");

botonNaranja.addEventListener("click", function() {
    document.body.style.backgroundColor = "orange";
});

botonNegro.addEventListener("click", function() {
    document.body.style.backgroundColor = "black";
});

botonAmarillo.addEventListener("click", function() {
    document.body.style.backgroundColor = "yellow";
});
