// Obtén una referencia al botón por su ID
var boton = document.getElementById("pokeboton");

// Asigna una función al evento click del botón
boton.addEventListener("click", function() {
    
    const randomnumber = Math.floor(Math.random() * 1010) +1; //Genera un número random entre 1 y 1010
    console.log(randomnumber);
    
    const URL = 'https://pokeapi.co/api/v2/pokemon/' + randomnumber; //Concatena el numero random
    
    const cards = document.querySelectorAll("img"); //Variable de una lista donde estan todos los img
    
    const names = document.querySelectorAll("h3"); //Variable de nombres
    
    const tipo = document.querySelectorAll("p"); //Variable de tipo
    
  //Imagen
    //Esta función recorre cada objeto de la lista cards para remplazar cada uno
    cards.forEach((item) =>{
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            item.src = data.sprites.front_default;
        });
    });
//Nombre
names.forEach((item) =>{
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        const pokenombre = data.forms[0].name;

        item.innerHTML = "Name: " + pokenombre.charAt(0).toUpperCase() + pokenombre.slice(1); //Acentua la primera letra
    });
});
//Tipo
tipo.forEach((item) =>{
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        const pokenombre = data.types[0].type.name;

        item.innerHTML = "Type: <br>"+ pokenombre.charAt(0).toUpperCase() + pokenombre.slice(1); //Acentua la primera letra
    });
});
});
//Hace la solicitud a la api
/*fetch(URL)
    .then(res => res.json()) //Accede a la promesa principal
    .then(data => { //Accede a la segunda promesa
        const img = document.querySelector('img'); //Declara una variable del html
        img.src = data.sprites.front_default; //Accede al atributo a remplazar de la variable
    });*/