// app-shell.js
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");

    const showImages = (images) => {
        let output = "";
        images.forEach(({name, image}) => {
            output += `
                <div class="card">
                    <img class="card-avatar" src=${image} />
                    <h1 class="card-title">${name}</h1>
                </div>
            `;
        });
        container.innerHTML = output;
    };

    // Precargar el shell de la aplicación y almacenarlo en caché
    showImages([]);
});
