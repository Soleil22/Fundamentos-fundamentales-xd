const parte1 = document.getElementById("contenedor1")
parte1.innerHTML += `   
<div class="on">
<img class="perfilUser" src="paz.png" alt="">
<input class="comenta" id="show" onclick="showModal()" type="button" value="¿Qué estás pensando, Sol?">
</div>`

const parte2 = document.getElementById("parte2")
parte2.innerHTML += ` 
<div class="modal" id="modal_container">
<h1>Crear publicación</h1>
<img class="x" id="hideModal" onclick="hideModal()" src="cerrarpubli.png" alt="">
<img class="perfilUser2" src="paz.png" alt="">
<p class="nombre">Sol Ange García</p>
<input class="comenta2" id="nuevoComentario" type="text" placeholder="¿Qué estás pensando, Sol?">
<button id="publicar" class="publicarBtn">Publicar</button>
</div> 
` 

const on = document.getElementById("show")
const ventana = document.getElementById("modal_container")
const oscuro = document.getElementById("overlay")
const off = document.getElementById("hideModal")
const comentario = document.getElementById("contenedorPublicar")
const btnPubli = document.getElementById("publicar")
const texto = document.getElementById("nuevoComentario")

on.addEventListener('focus', showModal)
function showModal(){
    ventana.classList.add('mostrarModal')
    oscuro.classList.add('mostrarOverlay')
}

off.addEventListener('click', hideModal)
function hideModal(){
    ventana.classList.remove('mostrarModal')
    oscuro.classList.remove('mostrarOverlay')
    texto.value = ""
}

btnPubli.addEventListener('click', comentar)

function comentar (){
    const comentarPublicar = `
    <div class="publicar2">
    <img class="perfilUser3" src="paz.png" alt="">
    <p class="nombre2">Sol Ange García</p>
    <div class="variable">
    <p class="texto">${texto.value}</p>
    </div>
    </div> `
    comentario.innerHTML+= comentarPublicar
    off()
}

texto.addEventListener('input', cambioBtn)

function cambioBtn(){
    if (texto.value){
        btnPubli.classList.add("publicarBtn2")
        btnPubli.classList.remove("publicarBtn1")
    }
    else{
        btnPubli.classList.add("publicarBtn")
        btnPubli.classList.remove("publicarBtn2")
    }
}