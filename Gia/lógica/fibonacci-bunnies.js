/* <OPCION>  1 </OPCION>

function fibonacci (mes) { // tengo una función
  var n1=0;
  var n2=1;
  var n3; //pongo parámetros

  for (var i=0; i<mes; i++){ //itero
    n3= n1+n2;
    n1=n2;
    n2=n3;
  }
return n3;
}
console.log('La cantidad de conejos es ' + fibonacci(20));

*/

// ----------------------------------------------------------------------------

//  OPCION 2

function fibonacci (num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

var cantConejos = fibonacci(20);
console.log(cantConejos);
