//Método MAP
/*
var numeros = [1,2,3,4,5,6,7];
var numerosMultiplicados = numeros.map(function(numero){
  return numero*2;
});
console.log("Array original: " + numeros);
console.log("Array x 2: " + numerosMultiplicados);
*/


var numeros = [];
  for(i=0;i<=1000;i++){
    numeros[i]=i;
    console.log(numeros)
    var numerosSumados = numeros.map(function(numeros){
    return numeros+10;
    });
    console.log("Array original: " + numeros);
    console.log("Array + 10: " + numerosSumados);

  }//no es específico de un parámetro
