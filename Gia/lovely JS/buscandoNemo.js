

var nombre = 'Nemo';
var nombres = ['Lala', 'Po', 'Dipsy','Nemo'];
// variables globales
//banderas: variable v/f para saber si encuentro o no algo

function buscandoNemo(nombre, nombres){ //todas las variables dentro de la función, solo viven en la función.
  for(i=0, i<nombres.length;i++){
    if (nombre==nombres[i]){
      encontrado=true;
    }
  }
  return encontrado;
}
if (buscandoNemo(nombre,nombres)==true) {
  console.log('encontré a Nemo')
}

/*
// optimizado:

var nombre = 'Nemo';
var nombres = ['Lala', 'Po', 'Dipsy','Nemo'];

function buscandoNemo(nombre, nombres){
  var i;
  for(i=0, i<nombres.length;i++){
    if (nombre==nombres[i]){
      return true;
    }
  }
  return false;
}
if (buscandoNemo(nombre,nombres)==true) {
  console.log('encontré a Nemo')
}
*/
