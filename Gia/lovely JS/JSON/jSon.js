$(document).ready(function(){
    var jdatos = {'nombre':'Jake', 'apellido':'el Perro', 'Edad':'27', 'foto':'null', 'casado':'true'};
    console.log(jdatos);
    
    var jdatosJson = JSON.stringify(jdatos);
    console.log(jdatosJson); 

    var a = "<a href='jSon.html?dato=+ jdatosJson +'> Al doc </a>";//("")por fuera, y por dentro simples '
    $('body').append(a);
    
});
