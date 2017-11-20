function primos (N){ //parámetro es una variable de la fun.
var i=2;
while ((i>1)&&(i<N)) { //mientras () hasta ()
  var x = N % i; // voy a dividir a n por i
  if(x === 0){ //y si da 0
    return false;//
  }
  i++;
} return true;
}
var numero = 13;
console.log(primos(numero));
