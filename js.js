const boton = document.querySelector("#miBoton");
// Agregar listener
boton.addEventListener("click", function (evento) {
	// Aquí todo el código que se ejecuta cuando se da click al botón
	// El evento del click

    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    //este es el enpoint consumirlo con fetch')
    .then(response => response.json())
    .then(data =>{ 
        let element = document.getElementById('contenedor');
        for (let i = 0; i < data.drinks.length; i++) {
            element.innerHTML +=`
            <div class="pelicula">
                <img class="poster"  src="${data.drinks.strDrinkThumb[i]}" alt="">
                <h3 class="titulo">${data.drinks.strDrink[i]}</h3>
            </div>
        `;
        }
    })
});
