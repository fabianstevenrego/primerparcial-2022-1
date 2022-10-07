
function guardarLocalStorage(){

    let nombre;
    let cantidad;
            nombre = document.getElementById("titulo").value;
            cantidad =  document.getElementById("cantidad").value;
localStorage.setItem("nombre",nombre); 
localStorage.setItem("cantidad",cantidad); 
}

const boton = document.querySelector("#comprar");
boton.addEventListener("click", function(evento){
    guardarLocalStorage()
});
