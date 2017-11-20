/*Ejercicio 1 – Un sistema de fidelización de usuarios implementa la siguiente regla para la adquisición de productos del catálogo. Se pide determinar la lógica de canje.
- El producto X que se desea canjear tiene un valor determinado en cantidad de puntos.
- Si el cliente que lo quiere canjear tiene la cantidad de puntos requerida realiza
directamente el canje.
- Si el cliente tiene el 50% de los puntos, podrá completar con dinero: $1=3puntos.
en ese caso cada peso equivaldrá a 3 puntos.
- Si el cliente tiene el 50% de los puntos requeridos, pero a su vez tiene categoría
premium, la relación pesos puntos será 1 a 5. */

var canje=1000;
var puntos=500;
var premium=true;
var pesos; //puede ser una variable decimal.


// Si el cliente tiene la cantidad de puntos requerida realiza el canje.
if (puntos>= canje) {
  console.log ("Se lleva su producto");
}


// Si el cliente tiene el 50% de los puntos, podrá completar con dinero: $1 =3 puntos.
else if (puntos>= (canje*0.5) && premium == false){
  pesos=(canje-puntos)/3;
  console.log ("Usted podrá completar su canje con $"+pesos+".-")
}

// Si tiene el 50% de los puntos, y es premium podrá completar con dinero: $1 =5 puntos.
else if (puntos>= (canje*0.5) && premium == true) {
  pesos=(canje-puntos)/5;
  console.log ("Usted podrá completar su canje con $"+pesos+".-")
}

// O no le alcanza.
else {console.log("sus puntos no le alcanzan, lo sentimos.");
}


/*
In JavaScript we have the following conditional statements:

Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed
