//tengo botones con la misma clase, y diferentes ids




var datos = [
        ['Gia','Castello', 26],
        ['Nicolas','Gericke',29],
        ['Simba','Hakuna', 7],
]
console.log(datos);

// trabajando con JQUERY, la primera linea de código debe ser SIEMPRE doc ready:
$(document).ready(function(){ //accedemos al doc linkeado, y cuando esté listo se corre la sig función
        // $('.botonEliminar').on('click',function(){ //referencio la clase, y cuando clickee, va a ejecutar la función 
        //  var btnId = $(this).prop('id'); //creo una variable para el botón. This hace el cambio en el botón clickeado. (prop también puede estar como attr)
        // alert ('botón' + btnId);
   // });
    
        // DELETE
   $('.botonEliminar').on('click',function(){ //referencio la clase, y cuando clickee, va a ejecutar la función 
        //  var btnId = $(this).prop('id'); //creo una variable para el botón. This hace el cambio en el botón clickeado. (prop también puede estar como attr)
        var btnId = $(this).data('rg');// same as el de arriba comentado.
        // var trId='#registro_' + btnId;// creo una variable para todo el tr con el botón de
        $(btnId).hide();//la function hide puede recibir 2 parámetros(speed,callback)
        alert('Registro' + btnId +'eliminado');
    });

         // EDIT
    $('.botonEditar').on('click',function(){
            $('input').prop('disabled',true); // deshabilita a los demás inputs
            var fila = $(this).data('rg');
            $(fila).prop('disabled', false);
    });
    $('.botonEditar').on('click',function(){
 })

        // ADD NEW
    $('#add').on('click',function(){
            var tr= '<tr id="registro_x"><td> <input disabled value="" type="text" class="rx"> </td><td> <input disabled value="" type="text" class="rx"> </td><td> <input disabled value="" type="number" class="rx"> </td><td> <button type="button" name="Editar" class="botonEditar" id="editx" data-rg=".r3">  &#9998;</button></td><td> <button type="button" name="Eliminar" class="botonEliminar" id="x" data-rg="registro_3">  &#x1F5D1; </button></td></tr>';
    $('#tablis').append(tr);
    });    

});

       
