const boton = document.querySelector("#miBoton");
// Agregar listener
boton.addEventListener("click", function (evento) {
	// Aquí todo el código que se ejecuta cuando se da click al botón
	// El evento del click

    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    //este es el enpoint consumirlo con fetch')
    .then(response => response.json())
    .then(data =>{ 
        let element = document.getElementById('contenido');
        for (let i = 0; i < data.length; i++) {
            element.innerHTML +=`<tr>
            <td> ${data[i].idDrink}</td>
            <td>${data[i].strDrink}</td>
            <td> ${data[i].strTags}</td>
            <td>${data[i].strCategory}</td>
        </tr>
`;
        }
    })
	console.log("El evento es: ", evento);
	// Para acceder al botón usamos this
	// Por ejemplo cambiemos el texto
	this.innerText = "obtenidos";

    document.getElementById('miBoton').style.display = 'none';

});
