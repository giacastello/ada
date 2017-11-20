
function potencia(base, exponente){ //función, nombre, (parámetros)

var resultado=1; // Le damos una variable par alojar el resultado.
  for(i=0;i<exponente;i++){ // cuándo arrranca, hasta donde y cada cuánto.
    resultado = resultado*base; // los igualo para que cambie el valor de la variable resultado.
  }
  return resultado; //aloja resultado en return
}
var operacion = potencia (10,4); // invoca la operación e ingreso parámetros.
console.log(operacion);
