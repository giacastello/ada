function changeColor (color){
  var e = document.getElementById('test'); //document: ver donde estoy, y me quedo con el id test
  e.style.color=color;// style es la propiedad del nodo html, y me paro en color.
}

function validar () {
    var nombre = document.getElementById('nombre');
    var contraseña = document.getElementById('contraseña');
    if (nombre.value == "" || contraseña.value.length == 0) {
        alert("Tenés que completar el campo");
    }
}
