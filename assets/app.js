//alert("Booooooom!!");
var arregloImagenes = [];
var bombas = document.getElementsByClassName("bomba");
var tablaBuscaminas = document.getElementById("tablaBuscaminas");
var boton = document.getElementById("reiniciar");

function cargarJuego(){
    for(var i = 0; i <= 15; i++){
        arregloImagenes[i] = "assets/imgs/blue.png";
    }
    arregloImagenes[0] = "assets/imgs/bomba.png";
    arregloImagenes[3] = "assets/imgs/bomba.png";
    arregloImagenes[5] = "assets/imgs/bomba.png";
    arregloImagenes[12] = "assets/imgs/bomba.png";
}
/*
function manejadoraClicks(e){
    if (e.target !== e.currentTarget){
        clickImagen(this.childElementCount);
    }
    e.stopPropagation();
}*/
function pararClicks(){
    event.stopPropagation();
}

function clickImagen(imagen){
    var indiceImagen = imagen.id;
    imagen.src = arregloImagenes[indiceImagen];
    if(indiceImagen == 0 || indiceImagen == 3 || indiceImagen == 5 ||indiceImagen == 12){
        bombaDetonada();
    }
}
       
function bombaDetonada(){
    for(var i=0; i<=3; i++){
        var indiceBomba = bombas[i].id;
        bombas[i].src = arregloImagenes[indiceBomba];
    }
    event.stopPropagation();
    setTimeout(function(){alert("Boooom!!!");},600);
} 



window.addEventListener("load",cargarJuego);
