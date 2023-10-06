const container = document.querySelector(".container");

const images=[

    {name: "Python", image: "./images/py.webp"},
    {name: "C++", image: "./images/c.png"},
    {name: "CSS", image: "./images/css.png"},
    {name: "Java", image: "./images/Java2.jpg"},
    {name: "Flutter", image: "./images/Flutter.png"},
    {name: "Go", image: "./images/go.png"}
]

const showImages = () => {
    let output = "";
    images.forEach(({name, image})=>{
        (
            output += `
                <div class="card">
                    <img class="card-avatar" src=${image} />
                    <h1 class="card-title">${name}</h1>
                </div>
            `
        )
    })
    container.innerHTML = output;

}

document.addEventListener("DOMContentLoaded", showImages);


if("serviceWorker" in navigator){
    console.log("Si soporta SW")
    window.addEventListener("load", function(){
 
     this.navigator.serviceWorker
         .register("/serviceWorker.js")
         .then(res => console.log("Se registro satisfactoriamente"))
         .catch(err => console.log("No se registro el service Worker"))
    })
 
 }



 