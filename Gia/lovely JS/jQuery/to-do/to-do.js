$(document).ready(function(){
    $('#btn-add').on('click',function({ //uso funciones anónimas solo cuando se usan una vez. 
        $('#new-item').val();
        $('#lista').append('<li>'+valor+'<button id="btn-borrar"> Eliminar </button> </li>');
        $('#new-item').val(" ");    
    });

    function borrar(){
        $(this).parent().remove();
    };

 
    $(document).on('click','#btn-borrar',borrar);

});