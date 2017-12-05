
function validar(campo){ // campo es el nombre de la funcion que voy a crear después de que la función corra.
    //saca todos los espacios vacíos del campo.
   if (campo.length ==0){
       return false; //cuando llega al return, se corta la función que vale lo que dice el return
   } 
   return true;
}

function enviarDatos() {
    if(validar() == true){
        var datosJson= JSON.stringify(datosForm);
        console.log(datosForm);
    }
}

var datosForm; // declaro funcion global

$(document).ready(function(){
    
    $('#boton').on('click', function(evento){ //evento es el parámetro donde se va a alojar preventDefault
       evento.preventDefault(); //prevengo que se submitee el botón, o cualquier evento de ese click.
       /*datosForm={'nombre':$('#nombre').val(),'Apellido':$('#apellido').val(),'Edad':$('#edad').val(),}
       */
        //parámetros
        if (validar($('#nombre').val()) == false){
            alert("Por favor completa con tu nombre");
        }
        if (validar($('#apellido').val()) == false){
            alert("Por favor completa con tu apellido");
        }
        if (validar($('#edad').val()) == false){
            alert("Por favor completa con tu nombre");
        };

    }) ;    

    

 
});



