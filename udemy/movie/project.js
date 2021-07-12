const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
 

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