/* 
vamos a hacer 3 funciones: 
 -inicio: llama a enviarDatos. 
 -enviarDatos: llama a validar.
 -validar: valida el formulario.

 y una variable var valido que tiene dos valores: true or false.
 ______________________________________________________________
___________ UNA VEZ QUE ESTA VALIDADO EL FORMULARIO____________
--------------------- CREAMOS EL JSON!!!-----------------------
_______________________________________________________________


*/

$(document).ready(inicio);



// FUNCION VALIDAR
function validar(){
	// bandera true. Si va por falso, este valor cambia y no submitea.
	var valido = true;
    // imprime true
	console.log(valido);
    

    // TEXTO
    var valor= document.getElementById("texto").value; // -> JavaScript
    // var valor= $('#texto').val(); --> JQuery

    // si el valor es nulo, o igual a cero, o es distinto (!) a letras, testeamos(metodo) el valor.
	if (valor==null || valor.length==0 || !/^[a-zA-Z ]+$/.test(valor)){
	    $("#texto").parent().addClass("has-error");
	    $("#texto").parent().find(".help-block").text("Ingrese un nombre");
	    $("#iconotexto").removeClass("glyphicon-ok");
		$("#iconotexto").addClass("glyphicon-remove");
		valido=false; // si la condicion se cumple, es false. No va a submitear.
	} else { // si no, todo bien. Y queda true.
		$("#texto").parent().removeClass("has-error");
		$("#texto").parent().addClass("has-success");
		$("#iconotexto").removeClass("glyphicon-remove");
		$("#iconotexto").addClass("glyphicon-ok");
	}

    // TELEFONO
	var telefono= document.getElementById("numero").value;
    
    // Si no es un numero, está vacío o no tiene caracteres
	if(isNaN(telefono) ||  telefono==null || telefono.length==0 ) {
		$("#numero").parent().addClass("has-error");
		$("#numero").parent().find(".help-block").text("Ingrese un telefono");
		$("#icononumero").removeClass("glyphicon-ok");
		$("#icononumero").addClass("glyphicon-remove");

		valido=false; // todo mal

     }else { // si no, todo cool.
     	$("#numero").parent().removeClass("has-error");
		$("#numero").parent().addClass("has-success");
		$("#icononumero").removeClass("glyphicon-remove");
		$("#icononumero").addClass("glyphicon-ok");
		

    }
    
    // MAIL
    var correo= document.getElementById("mail").value;
	if (correo==null || correo.length==0 || !/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(correo)) {
	    $("#mail").parent().addClass("has-error");
	    $("#mail").parent().find(".help-block").text("Ingrese un mail");
	    $("#iconomail").removeClass("glyphicon-ok");
		$("#iconomail").addClass("glyphicon-remove");
		valido=false;
	} else {
		$("#mail").parent().removeClass("has-error");
		$("#mail").parent().addClass("has-success");
		$("#iconomail").removeClass("glyphicon-remove");
		$("#iconomail").addClass("glyphicon-ok");
	}
    
    // ASUNTO
    var titulo= document.getElementById("asunto").value;
	
	if (titulo==null || titulo.length==0 || /^\s+$/.test(titulo)){
	    $("#asunto").parent().addClass("has-error");
	    $("#asunto").parent().find(".help-block").text("Ingrese un asunto");
	    $("#iconoasunto").removeClass("glyphicon-ok");
		$("#iconoasunto").addClass("glyphicon-remove");
		valido=false;
	} else {
		$("#asunto").parent().removeClass("has-error");
		$("#asunto").parent().addClass("has-success");
		$("#iconoasunto").removeClass("glyphicon-remove");
		$("#iconoasunto").addClass("glyphicon-ok");
	}
    
    // PARRAFO MENSAJE
    var info= document.getElementById("mensaje").value;
	
	if (info==null || info.length==0 || /^\s+$/.test(info)){
	    $("#mensaje").parent().addClass("has-error");
	    $("#mensaje").parent().find(".help-block").text("Ingrese un mensaje");
	    $("#iconomensaje").removeClass("glyphicon-ok");
		$("#iconomensaje").addClass("glyphicon-remove");
		valido=false;
	} else {
		$("#mensaje").parent().removeClass("has-error");
		$("#mensaje").parent().addClass("has-success");
		$("#iconomensaje").removeClass("glyphicon-remove");
		$("#iconomensaje").addClass("glyphicon-ok");
	}

    // FORMULARIO ESTA COMPLETO


    return valido;

}

// SI LOS DATOS ESTAN VALIDOS, HAGO EL JSON

// FUNCION INICIO

function inicio(){
	// $(".help-block").hide();

	$("#btnvalidar").on("click",enviarDatos);
}


// FUNCION ENVIAR DATOS
 function enviarDatos(){
 	
    // si está validado,
 	if(validar() == true){
    // crea la variable jdatos, que contiene el objeto con los .val de los campos.
    var jdatos={"nombre":$("#texto").val(),"telefono":$("#numero").val(),"Mail":$("#mail").val(),
    "Localidad":$("#localidad").val(),"Asunto":$("#asunto").val(),"Mensaje":$("#mensaje").val()};
    

    // Y ahora generamos el JSON en formato texto
    var jdatosjson= JSON.stringify(jdatos);

    console.log(jdatos);
    console.log(jdatosjson);
    
    
    } 
    else{
    	console.log("no esta validado");

    }

}    