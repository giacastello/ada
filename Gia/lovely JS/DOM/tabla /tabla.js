//tengo botones con la misma clase, y diferentes ids

// trabajando con JQUERY, la primera linea de código debe ser SIEMPRE doc ready:
$(document).ready(function(){ //accedemos al doc linkeado, y cuando esté listo se corre la sig función
    $('.botonEliminar').on('click',function(){ //referencio la clase, y cuando clickee, va a ejecutar la función 
            var btnId = $(this).prop('id'); //creo una variable para el botón. This hace el cambio en el botón clickeado. (prop también puede estar como attr)
            alert ('botón' + btnId);
    });
});