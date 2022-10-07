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
            <div class="bebida">
                <img class="poster"  src="${data.drinks[i].strDrinkThumb}" alt="">
                <h3 id="titulo "class="titulo">${data.drinks[i].strDrink}</h3>
                <h3 style="color: red;">"ingredientes "</h3>
                <h5 class="titulo">${data.drinks[i].strInstructions}</h5>7
                <div class="alcohol"> <p>${data.drinks[i].strAlcoholic}</p> </div>
                <label for="cantidad" class="">cantidad</label>
                <input type="number" class="form-control" id="cantidad" aria-describedby="name">
                
                <button id="comprar" type="button"><a href="compra.html" style="text-decoration: none;">comprar</a></button>
                <br>
            </div>  
        `;
        }
    })
});
