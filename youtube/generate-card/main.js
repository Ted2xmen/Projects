let bodyElement = document.body;
//
let cardElement = document.createElement("div");
let imageContainer = document.createElement("div");
let infoContainer = document.createElement("div");
let imageElement = document.createElement("img");
let headingElement = document.createElement("h5");
let paragraphElement = document.createElement("p");
let btnElement = document.createElement("a");

// className 

cardElement.className = "card";
imageContainer.className = "image-container";
infoContainer.className = "info-container";
imageElement.className = "image";
headingElement.className = "heading";
paragraphElement.className = "paragraph";
btnElement.className = "btn";

imageElement.src = "https://source.unsplash.com/random";
btnElement.setAttribute("href", "#");
// attribute and innertext
imageElement.setAttribute("alt", "image from Unsplash");
// headingElement.innerText = "deneme";
paragraphElement.innerText = "lorem lorem lorem lorem lorem lorem";
btnElement.innerText = "Learn MORE";


// appendchild and append
bodyElement.appendChild(cardElement);
cardElement.append(imageContainer, infoContainer);
// birden çok olunca append
imageContainer.appendChild(imageElement);
infoContainer.append(headingElement,paragraphElement, btnElement);


// for loop and json data fetch

fetch('db.json')
  .then(response => response.json())
  .then(json => 
    
    
    
        JSON.stringify(
            
            console.log(json[1].title)
            

            
            ));


  
