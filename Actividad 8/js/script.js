// Variables
const canciones = ["Tema1", "Tema2", "Tema3", "Tema4", "Tema5"];
const artistas = ["Artista1", "Artistia2", "Artista3", "Artista4", "Artista5"];
const listaCanciones = document.getElementById("Lista");


canciones.forEach((cancion, idx) => {
    console.log(`${cancion} - id: ${idx}`);
    listaCanciones.innerHTML += `<div class="Lista-cancion">${cancion} - id: ${idx}</div>`;
});
