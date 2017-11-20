/*Escribir una función que, dado un número pasado como parámetro, determine si es primo

https://www.numerosreales.com/  */


function primos(n){
  if (n==1) {
    console.log('El número ${n} NO es primo');
    return false;
  }
  else if(n === 2){
    console.log('El número ${n} SI es primo');
  }
  else {
    for (var x = 2; x < n; x++) { // same as ( )
      if(n % x === 0){ //si cuando a ese numero lo divido por x (2, 3, 4 hasta n) y no da 0, no es primo.
        console.log('El número ${n} NO es primo');
        return false;
      }
    }
    console.log('El número ${n} SI es primo');
    return true;
  }
}
console.log(primos(13));
