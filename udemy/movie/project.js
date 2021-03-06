const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelectorAll(".card-body")[1];
 const clear = document.querySelector("#clear-films");

// UI Objesini başlatma
const ui = new UI();


// Storage objesi üret
const storage = new Storage();


eventListeners();

function eventListeners(){
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });


    cardbody.addEventListener("click", deleteFilm);
    clear.addEventListener("click",clearAllFilms);



}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;


    if (title === ""  || director === "" ||url === ""){
        ui.displayMessages("Boş bırakmayın", "warning");
    }
    else {
        
        const newFilm = new Film(title,director,url);
        ui.addFilmToUI(newFilm);
        storage.addFilmToStorage(newFilm); // storage film ekleme
        ui.displayMessages("eklendi", "success");
    }

    ui.clearInput(titleElement, directorElement, urlElement);
    e.preventDefault();
    
}

function deleteFilm(e){

    if (e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessages("başarılı", "success");
    }
  

}

function clearAllFilms(){


    if(confirm("Emin misiniz?")) {

        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
        ui.displayMessages("tüm filmler silindi", "info");
    }
    }
   