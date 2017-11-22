//tengo botones con la misma clase, y diferentes ids

// trabajando con JQUERY, la primera linea de código debe ser SIEMPRE doc ready:
$(document).ready(function(){ //accedemos al doc linkeado, y cuando esté listo se corre la sig función
        // $('.botonEliminar').on('click',function(){ //referencio la clase, y cuando clickee, va a ejecutar la función 
        //  var btnId = $(this).prop('id'); //creo una variable para el botón. This hace el cambio en el botón clickeado. (prop también puede estar como attr)
        // alert ('botón' + btnId);
   // });
    
   $('.botonEliminar').on('click',function(){ //referencio la clase, y cuando clickee, va a ejecutar la función 
        //  var btnId = $(this).prop('id'); //creo una variable para el botón. This hace el cambio en el botón clickeado. (prop también puede estar como attr)
        var btnId = $(this).data('rg');// same as el de arriba comentado.
        // var trId='#registro_' + btnId;// creo una variable para todo el tr con el botón de
        $(btnId).hide();//la function hide puede recibir 2 parámetros(speed,callback)
        alert('Registro' + btnId +'eliminado');
    });
    $('.botonEditar').on('click',function(){
            var fila = $(this).data('rg');
            $(fila).prop('disabled', false);
    });
    $('.botonEditar').on('click',function(){

})


});