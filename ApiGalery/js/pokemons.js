for (let a = 0; a < 12; a++) {
    const randomnumber = Math.floor(Math.random() * 1010) +1; //Genera un número random entre 1 y 1010
    console.log(randomnumber);  
    const URL = 'https://pokeapi.co/api/v2/pokemon/' + randomnumber;
    
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        const name = data.forms[0].name;
        const sprite = data.sprites.other["official-artwork"].front_default;
        const type = data.types[0].type.name;
        const pokedex = randomnumber;
        function firstmayus(word){
            let wordM = word.charAt(0).toUpperCase() + word.slice(1);
            return wordM;
        }
        const article = document.createRange().createContextualFragment(
            // html.
            `
        <article>
            <div class="img-container">
            <h2>${firstmayus(name)}</h2>
            <h2>${pokedex}</h2>
            <img src="${sprite}" alt="personaje">

            <span>${firstmayus(type)}</span>
            </div> 
        

        </article>
        `);
        const main = document.querySelector("main");
        main.append(article);
    });
    
}

//Creacion de un nav
nav.innerHTML=`
    <ul>
         <li>
            <a href="/Leccion1/Elementosbasicos.html">Elementos</a>
        </li>
        <li>
            <a href="/Leccion2/Index.html">Inicio</a>
        </li>
        <li>
            <a href="/Leccion2/maquetado2-2.html">Maquetado</a>
        </li>
            
    </ul>`
;