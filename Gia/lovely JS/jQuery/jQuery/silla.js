
// tomar todo el documento cuando está cargado (ready) y llama a una función de callback

// una vez cargado el documento
$(document).ready(function(){
//al cliquear en un elemento button
    $("button").click(function(){
//Ocultar () elemento
        $("p").hide();
    });
});


// Desaparecer gatitos
$(document).ready(function(){
        $("img").click(function(){
            $(this).hide();
            $(this).display();
        });
    });

//para modificar el texto
$(document).ready(function(){
    $('figcaption').click(function(){
        $(this).toggleClass('texto');
        $(this).addClass('texto');
        $(this).removeClass('texto');

    });
});