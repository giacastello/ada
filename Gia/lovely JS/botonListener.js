var letrasGriegas =['alfa','beta', 'gama', 'delta'];
var lis = document.getElementsByTagName ('li');


var btnAgregar = document.getElementById('agregar');
var btnEliminar = document.getElementById('eliminar');

//Podemos sumarle más de un addEvent Listener por botón
//creo un evento addEventListener que tiene dos parámetros (evento, función)
btnAgregar.addEventListener('click', agregar);
btnEliminar.addEventListener('click', eliminar);

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