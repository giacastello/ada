  var planetas = [
    Mercurio,
    Venus,
    Tierra,
    Marte,
    Júpiter,
    Saturno,
    Urano,
    Nepturno
    Plutón,
  ];

  planetas.forEach((e,i,array) => { //parámetros:elemento, indice, array
    console.log("El planeta es " + e + "y está ubicado en " i + " " + array);
  });



  //Método MAP

  var numeros = [1,2,3,4,5,6,7];
  var numerosMultiplicados = numeros.map(function(numero){
    return numero*2;
  });
console.log("Array original: " + numeros);
console.log("Array x 2: " + numerosMultiplicados);

var numeros = [1,2,3,4,5,6,7];
var numerosMultiplicados = numeros.map(function(numero){
  return numero+10;
});
console.log("Array original: " + numeros);
console.log("Array + 10: " + numerosMultiplicados);
