// json
const lista_Canciones = [
    {
        artista: "Artista1",
        url: "",
        img: "",
        titulo: "Tema1"
    },
    {
        artista: "Artista2",
        url: "",
        img: "",
        titulo: "Tema2"
    },
    {
        artista: "Artista3",
        url: "",
        img: "",
        titulo: "Tema3"
    },
    {
        artista: "Artista4",
        url: "",
        img: "",
        titulo: "Tema4"
    },
    {
        artista: "Artista5",
        url: "",
        img: "",
        titulo: "Tema5"
    },
];

//-------------------------------------------------------------------------
// Variables
const divListaCanciones = document.getElementById("ListaCanciones");
const btnTema3 = document.querySelector("#btnTema3");
const divsCanciones = document.querySelectorAll(".Lista-cancion");
const divPlayingSong = document.getElementById("playingSong");

// botones
const btnSig = document.querySelector("#btnSig");
const btnAnt = document.querySelector("#btnAnt");
const btnPlay = document.querySelector("#btnPlay");
const btnPausa = document.querySelector("#btnPausa");

//audio
const audioPlayer = document.querySelector("audio");
const lista_mp3 = [];
let idCancionActual = 0;


//------------------------------------------------------------------------
//FUNCIONES
//lista de canciones


btnTema3.addEventListener("click", () => {
    idCancionActual = 2;
    imprimirReproduciendo(2);
});

document.addEventListener("click", (event) => {
    console.log(event.target.id);
});



// reproducir
function imprimirReproduciendo() {
    const song = lista_Canciones[idCancionActual].titulo;
    const artist = lista_Artistas[idCancionActual].artista;
    const url = lista_Canciones[idCancionActual].url;
    console.log("Artista: " + artist + " canción: " + song);
    divPlayingSong.innerHTML = `<div>
    idcancionActual: ${idCancionActual} <br/>
        cancion: ${song} <br/>
        artista ${artist}
        </div>`;
    audioPlayer.src = url;
};

// boton siguiente
btnSig.addEventListener("click", () => {
    if (idCancionActual == lista_Canciones.length - 1) {
        idCancionActual = 0;
    } else {
        idCancionActual++;
    }
    imprimirReproduciendo();
});

// boton anterior
btnAnt.addEventListener("click", () => {
    if (idCancionActual == 0) {
        idCancionActual = lista_Canciones.length - 1;
    } else {
        idCancionActual--;
    }
    imprimirReproduciendo();
});

//boton reproducir
const handleReproducir = () => {
    audioPlayer.play();
}
btnPlay.addEventListener("click", handleReproducir);

//boton pausar
const handelePausar = () => {
    audioPlayer.pause();
}
btnPausa.addEventListener("click", handelePausar);



//-- mi codigo
lista_Canciones.forEach((cancion, idx) => {
    console.log(`${cancion} - id: ${idx}`);
    const song = cancion.titulo;
    const artist = cancion.artista;
    contenidoHTML += `<div id="song_${idx}" class="Lista-cancion">
                        ${song} <br>
                        ${artist}
                        </div>`;
});


divsCanciones.forEach((divCancion, i) => {
    divCancion.addEventListener("click", (event) => {
        idCancionActual = i;
        imprimirReproduciendo();
    });
});