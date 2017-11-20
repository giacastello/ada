//En la misma posición se encuentra el mismo tipo de dato

datos1 = [“Fido”,”Gomez”,26,15000.78,true];
datos2 = [“Gervasio”,”Fernandez”,32,28.550,false];

var i;
for(i=0;i<datos1.length;i++) {

//if(typeof(datos1[i]) == number && typeof(datos2[i]) == number){

 //Método type of me devuelve el tipo de dato: caracteres, numeros o boolean.

if (((Number.isInteger(datos1[i]) && Number.isInteger(datos2[i]){
  if ((datos1[i]>(datos2[i])) {
    console.log("Fido es mayor");
  } else{
  console.log("Fido es menor");
}

//preguntar si está casado.

if (typeof(datos1[i]) == "boolean" && typeof(datos2[i])== "boolean") {
  if(datos1[i]){
    console.log("Casado");
  } else {
    console.log("Soltero");
  }

  if(datos2[i] == true){
    console.log("Casado"); //se omite true por que viene por default.
  } else {
    console.log("Soltero");
  }

}

TABLA
i--datos1[i].isInteger--datos2[i].isInteger-&&-datos1[i]> datos2[i]
0--------false--------------false--------false.
1--------false--------------false--------false.
2--------true---------------true---------true----------false
3--------false--------------false--------false.
//En este caso no llego a preguntar qué condición me dio falsa.

/*   IMPORTANTE!

== si son de igual valor
=== si son de igual valor, y del mismo tipo.

var string= "10";
var numero= 10;
console.log(string == numero) $true
console.log(string === numero) $false
 */
