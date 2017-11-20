var letrasGriegas = ['alfa','beta','gama','delta'];
var laLista = document.getElementById('laLista');
var lis = document.getElementsByTagName('li');

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