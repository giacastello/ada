
var datos = [
    ['Gia','Castello', 26],
    ['Nicolas','Gericke',29],
    ['Simba','Hakuna', 7],
]


$(document).ready(function(){
    //$('#add').on('click', function(){ // Lo eliminamos porque 
        for(var i= 0;i<datos.length; i++){
            var tr='<tr id="registro_'+i+'">'+'<td>'+datos[i][0]+'</td>'+'<td>'+datos[i][1]+'</td>'+'<td>'+datos[i][2]+'</td>'+'<td>'+'<button type="button" name="editar" class="botonEditar" data-rg="#registro_'+i+'">'+'&#9998;'+'</button>'+'</td>'+'<td>'+'<button type="button" name="Eliminar" class="botonEliminar" data-rg="#registro_'+i+'">'+'&#x1F5D1'+'</button>'+'</td>'+'</tr>';
        $('#tablis').append(tr);
        }
    //});

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
     //NEW REGISTRO
     $('#add').on('click',function(){
        var nuevo=[];
        var n = $('#nn').val();
        nuevo.push(n);
        nuevo.push($('#an').val());
        nuevo.push($('#en').val());
        datos.push(nuevo);
        console.log(datos);
    })
});

   


