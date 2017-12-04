$(document).ready(function(){
    var datosForm; // declaro funcion global
    $('#boton').on('click', function(evento){ //evento es el parámetro donde se va a alojar preventDefault
       evento.preventDefault(); //prevengo que se submitee el botón, o cualquier evento de ese click.
       
       /*datosForm={'nombre':$('#nombre').val(),'Apellido':$('#apellido').val(),'Edad':$('#edad').val(),}
       */
   
    if (validarNombre($('#nombre').val()) == false){
        alert("mal");
    }
    }) ;    
 
});

function validarNombre(campo){ // campo es el nombre de la funcion que voy a crear después de que la función corra.
     //saca todos los espacios vacíos del campo.
    if (campo.length ==0){
        return false; //cuando llega al return, se corta la función que vale lo que dice el return
    } 
    return true;
}