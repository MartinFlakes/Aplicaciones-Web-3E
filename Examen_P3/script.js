let game=document.getElementById("game");
let dates=document.getElementById("dates");
let descripcion = document.getElementById("descripcion");
let post = document.getElementById("post");

form_modal.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  acceptData();
};

let games={};
let dates_games={};
let descripciones={};

//Comprobación
let acceptData = () => {
  games["text"]= game.value;
  dates_games["text"]=dates.value;
  descripciones["text"] = descripcion.value;
  createPost();
  modal_close();
};

//Crear
let createPost = () => {

  post.innerHTML += `
    <div>
      <p>${games.text}</p>
      <p>Fecha de lanzamiento: ${dates_games.text}</p>
      <p>${descripciones.text}</p>
      <span>
        <i onclick="editpost(this)" class="fas fa-edit"></i>
        <i onclick="deletepost(this)" class="fas fa-trash-alt"></i>
      </span>
    </div>
  `;
  descripcion.value = "";
  game.value="";
};

//Editar
let editpost = (e) => {
  game.value=e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
  descripcion.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
  modal_open();
}

let deletepost = (e) => {
  e.parentElement.parentElement.remove();
}

let deleteAll =(e)=>{
  e.parentElement.remove();
}

//Modal
let modal_open=()=>{
  modal.showModal();
};

let modal_close=()=>{
  modal.close();
};