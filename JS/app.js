
const DOG_URL = "https://dog.ceo/api/breeds/image/random";

let doggo = document.querySelector(".pic_container");

async function getNewDoggo(){
    const promise = await fetch(DOG_URL);
    const processedResponse = await promise.json();
    const img = document.createElement("img");
    img.src = processedResponse.message;
    img.alt = "Random cute dog picture";
    doggo.appendChild(img);
}

document
    .querySelector(".get")
    .addEventListener("click", getNewDoggo);