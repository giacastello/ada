var botonListar = document.getElementById('listar');

//creo un evento addEventListener que tiene dos parámetros (evento, función)
botonListar.addEventListener('click',agregar);
botonListar.addEventListener('click',eliminar);
function agregar() {
    for(i=0;i<letrasGriegas.length;i++){
        var li = document.createElement('li');
        li.textContent = letrasGriegas[i];
        laLista.appendChild(li);
    }
}

function eliminar() {
    for(i=0;i<letrasGriegas.length;i++){
        laLista.removeChild (lis[0]);
    }
}