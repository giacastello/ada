var veintes = [20,21,22,23,24,25,26,27,28,29];
var treintas =  [30,31,32,33,34,35,36,37,38,39];
var cuarentas = [40,41,42,43,44,45,46,47,48,49];

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
