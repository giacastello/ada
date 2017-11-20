//indice: es la posición de un elemento en referencia a algo (un array por ejemplo)
// variable es la

// Tabla del 9----------------------------------------------------------

// WHILE
var i = 0; //
var a = 0; // Mi acumulador comienza en cero
var n = 10; // Hasta el término al que va a llegar.

while (i<=n){
  a=i*9;
  console.log (a);
  i++;
}


// FOR
var total=0;
for (n=1;n<10;n++){ // acumulador comienza en 1, termina en el menor a 10, e incrementa de a uno.
  total = n*9; // multiplico cada término por 9.
  console.log(total); // e imprimo el total.
}
//Las variables van dentro del parentesis


//Do-While
var i=1; //
var total=0;
do {
  total=9*i;
  i=1+i;
}
while (i<=10);

// Promedio de 50----------------------------------------------------------------

//FOR
var suma=0;
var prom=0;
var n=50;
if (n>0){
for (i=1; i<=n; i++){ //i siempre es un entero
  suma= suma+i;
}
prom = suma/n;
console.log(prom);
}



//WHILE


var i=1;
while (i<=50){
  total=total + i;
  i++;
}
prom = total/50;


// calcular el factorial de n------------------------------------------------------
var n = 5; //total de enes para multiplicar. Representa al numero de términos
var factorial = 1; // donde inician mis factoriales
var i; // variable que va a seguir a n,
for (i=1; i<=n; i++) { //le digo a i, que siga a n de a uno mientras sea menor que n
  factorial=factorial*i; // asigno el nuevo valor de factorial a factorial. Piso el valor anterior con el actual.
}
console.log(factorial);

//si n=cero, e i=1, no entra en el for.
