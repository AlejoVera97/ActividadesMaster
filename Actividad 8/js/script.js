

// Variables
const lista_Canciones = ["Tema1", "Tema2", "Tema3", "Tema4", "Tema5"];
const lista_Artistas = ["Artista1", "Artistia2", "Artista3", "Artista4", "Artista5"];
const divListaCanciones = document.getElementById("ListaCanciones");
const btnTema3 = document.querySelector("#btnTema3");
const divsCanciones = document.querySelectorAll(".Lista-cancion");
const divPlayingSong = document.getElementById("playingSong")



const btnSig=document.querySelector("#btnSig");
const btnAnt=document.querySelector("#btnAnt");



lista_Canciones.forEach((cancion, idx) => {
    console.log(`${cancion} - id: ${idx}`);

    const song = lista_Canciones[idx];
    const artist = lista_Artistas[idx];

    divListaCanciones.innerHTML += `<div id="song_${idx}" class="Lista-cancion">
                                 ${song} <br> 
                                 ${artist}
                                </div>`;
});



btnTema3.addEventListener("click", () => {
    console.log("Cancion", lista_Canciones[2]);
    console.log(`Artista:, ${lista_Artistas[2]}`);

    imprimirReproduciendo(2);


});


document.addEventListener("cklick", (event) => {
    console.log(event.target.id);
});




divsCanciones.forEach((divCancion, i) => {
    divCancion.addEventListener("click", () => {
        imprimirReproduciendo(i);
    });
});



function imprimirReproduciendo() {
    const song = lista_Canciones[idCancionActual];
    const artist = lista_Artistas[idCancionActual];
    console.log("Artista: " + artist + " canción: " + song);

    divPlayingSong.innerHTML = `<div>
        cancion: ${song} <br/>
        artista ${artist}
        </div>`;
};



let idCancionActual=0;
btnSig.addEventListener("click", () =>{
    idCancionActual++;
    //revisar que no me pase de la ultima cancion ( comience por la primera)
    imprimirReproduciendo();
})


btnSig.addEventListener("click", () =>{
    idCancionActual--;
    imprimirReproduciendo();
})
