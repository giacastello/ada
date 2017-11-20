/*


// :) Ejercicio 1
//Leer el nombre de un alumno y 5 calificaciones, obtener el promedio. mostrar el nombre del alumno con su promedio


var alumno = "pepe"; //nombre
var notas = [3, 5, 7, 9, 10]; //notas
var suma = 0; //promedio que se llena con el for
var len = notas.length;

console.log(`tengo esta cantidad de notas: ${len}`); // items en el array

for (var i = 0; i < notas.length; i++) { // recorre el array -tabla 1-
	suma = notas[i] + suma;  // cada vez que i se mueve, promedio va a cambiar de valor a la suma de i anteriores
}

console.log(`Las notas sumadas son: ${suma}`);

var promedio = suma / notas.length;

console.log(`El promedio de ${alumno} es ${promedio}`);




// :)Ejercicio 2
//Realizar un algoritmo para la conversiÛn de dÛlares a pesos, ingresando el monto a convertir y la cotizacion del dia

var monto = parseFloat(prompt('ingrese su monto en dólares'));//prompt: pop up para pedir string. 
//hay que pasar el prompt a números con decimales (parseFloat) o con numeros enteros (parseInt)
var cotizacion = parseFloat(prompt('ingrese la cotización del dia'));

var conversion = monto*cotizacion;
alert(`su monto en pesos es ${conversion}`);



//Ejercicio 3 
//Realice el calculo del sueldo de un empleado ingresando el sueldo neto y sabiendo que se le descuenta un 15 % por cargas sociales y se le suma un 10% si tuvo asistencia perfecta (preguntar si  tuvo ausencias)

var sueldoNeto = parseFloat(prompt('ingrese sueldo neto'));
var cargasSociales = (sueldoNeto*15) / 100;
cargasSociales = sueldoNeto - cargasSociales;
var asistencia = prompt('¿tuviste faltas? (si/no)')
if (asistencia === 'si'){
    console.log(`Su sueldo final es ${cargasSociales}`)
} else {
    var sueldoPerfecto = sueldoNeto + ((sueldoNeto*10)/100);
    console.log(`su sueldo final es ${sueldoPerfecto}`)
}



//:)  Ejercicio 4
//a)En una tienda de ropa se cobra con varios medios de pago pero tienen diferencia de recargos, en efectivo se cobra el precio normal, con debito un 5%, con credito un 10% y cheque un 20%
var total = parseFloat(prompt(`precio`));
var tipoPago = prompt(`ingresar tipo de pago`);


var debito = total+((total*5)/100);
var credito = total+((total*10)/100);
var cheque = total+((total*15)/100);

if (tipoPago == 'efectivo') {
    console.log(`el monto total es ${total}`);
} else if (tipoPago == 'credito') { 
    console.log(`el monto total es ${credito}`);
} else if (tipoPago == 'debito') { 
    console.log(`el monto total es ${debito}`);
} else { 
    console.log(`el monto total es ${cheque}`);
} 


// b) Para una contestadora telefonica programar las siguientes opciones: 
// 		opcion						respuesta
//	1. conocer su deudad			"su deuda es " ...
//	2. comprar nuevos productos		"sera atendido en instantes"
//	3. solicitar ayuda			"todos los operadores se encuentran ocupados"
//	4. dar la baja				"opcion invalida"
//  5. salir				"gracias por usar nuestro servicio"

    var opcion = prompt('ingresar opción del 1 al 5');
switch(opcion){
    case '1': 
    console.log(`Su deuda es: `);
    break;
    case '2':
    console.log(`Será atendido en instantes.`);
    break;
    case '3':
    console.log(`Operación invalida.`);
    break;
}

// c) se pide que la persona ingrese el monto a financiar y la cantidad de cuotas segun nuestra tabla
// 1 cuota 	0%
// 12 cuotas	20%
// 24 cuotas	45%
// 36 cuotas	70%
// como ejemplo si alguien ingresa como monto 1000 le queda a abonar en 
// 1 cuota		1000
// 12 cuotas	100
// 24 cuotas	60,41
// 36 cuotas	47,22


// :) Ejercicio 5
// Pedirle a la persona un numero de 1 al 10 y luego mostrar por pantalla los numeros siguientes hasta llegar a 10. Ejemplo si escribibio 6, mostrar 7, 8, 9, 10.

var numeroIngresado = parseInt(prompt(`ingrese un número del 1 al 10`));
var i;
for (i=numeroIngresado; i<11; i++) {
console.log(i); // va a imprimir TODAS las veces que ingrese al for. 
} 

// :) Ejercicio 6 
// Leé números ingresados por el usuario ingresando 0 para terminar. EmitÌ, al finalizar, cu·ntos fueron mayores a 10, cu·ntos menores o iguales a 10.

var numerosIngresados = [];
var num;

while (num != 0) {
    num = parseInt(prompt(`ingresar número`));
    numerosIngresados.push(num);
}
console.log (`los numeros ingresados son ${numerosIngresados}`);

var mayor10 = 0;
var menor10 = 0;
var i;
for (i = 0; i<numerosIngresados.length; i++){
    if (numerosIngresados[i] <= 10){
    menor10 += 1; // (menor10++;) o (menor10 = menor10+1)
    } else {
        mayor10 += 1;
    }
}

console.log(menor10);
console.log(mayor10);


// :) Ejercicio 7
realizar un algoritmo que muestre la tabla de multiplicar del 1 al 10, de un numero ingresado por el usuario
ejemplo si ingreso 2 que muestre
2 x 1 = 2
2 x 2 = 4
....
2 x 10 = 20
// Solución:
var numeroIngresado = parseFloat(prompt('ingrese un número del 1 al 10'));
for (i=0; i<11; i++) {
    console.log(` ${numeroIngresado} X ${i} = ${numeroIngresado * i}`);
}
  
//Ejercicio 8
//se escriben el promedio y el nombre de 10 alumnos, al finalizar muestre el nombre y promedio del mejor.



// agrego las variables que necesito como resultado.
var total = 1; // es el valor que voy a parar con un while a 10
var nombres = [];
var notas = [];
var mayor;
var i;

while (total < 3) { // va a preguntar y pushear hasta que se cumpla esta condición
    var nombre = prompt('ingrese nombre de alumno'); //nombre
    var promedio = parseFloat(prompt('ingrese promedio de alumno')); //notas  

    nombres.push(nombre);
    console.log(nombres);
    notas.push(promedio);
    console.log(notas);

    total++; // Este es el contador que suma 1 a total en cada vuelta.
}


for (i = 0; i < notas.length; i++) {
    if (notas[i] > notas[i]+1) {
    mayor = notas[i];
    } // el i de el array notas
    console.log(nombres[i]);
}

console.log(`El promedio mayor es el de ${mayor}`)


// El promedio sale undefined.

 



Ejercicio 9
para una fiesta infantil se limita la entrada a 4 - 10 aÒos, siendo la capacidad 10 personas. impedir que ingresen gente de otra edad y cuando se llene la capacidad


var invitados = [];
var edad;
var total = 1;
var i;

while (total < 11) {
    edad = parseFloat(prompt('ingrese su edad'));
if (edad[i] < 4 || edad[i] > 10){
  console.log("No puede ingresar. Su edad está fuera del rango");
} else {
    console.log("Time to partyyyyyyy");
    invitados.push(edad);
    total ++;
}
}

console.log (`los invitados tienen las siguientes edades ${[invitados]}`)

// no bannea a menores de 4
// no bannea a mayores de 10



// :) ejercicio 10. 
calcular la suma total del precio de 10 articulos
 
var listaPrecios = [];
var precio;
var total= 1;
var suma = 0;
while (total < 11) { // va a preguntar y pushear hasta que se cumpla esta condición
    var precio = parseFloat(prompt('ingrese precio')); //notas  
    listaPrecios.push(precio);
    console.log(listaPrecios);
total++; // Este es el contador que suma 1 a total en cada vuelta.
}

for (var i= 0; i < listaPrecios.length; i++) {
    suma = listaPrecios[i] + suma;
}

console.log(`Las notas sumadas son: ${suma}`)



// Ejercicio 11 
// mostrar por pantalla todos los numeros pares entre 2 y 50
var numeros = 0;
while (numeros <= 50) {
    numeros = numeros + 2;
    console.log (numeros);
}
 // me muestra más de 50


// Ejercicio 12 
// mostrar por pantalla el promedio de precios de una cantidad de sitios ingresada por el usuario, mostrar tambien cual es el menor precio



// Ejercicio 13 
// Escribir el factorial de un numero (el factorial de 8 es 8*7*6*5*4*3*2*1)
*/
var numero = parseFloat(prompt('ingrese número a factorizar'));
function factorial (){
for (i = numero; i= 1; i--){
    var multiplicar = (numero(i) * numero(i-1));
    console.log(`multiplicar`);
}

}


// no imprime multiplicar 


/*
Ejercicio 14  se le pide a la persona que ingrese un nunero y le informa si ese numero es primo o no

ejercicio 15 
mostrar por pantalla todos los numeros primos entre 1 y 100 (los numeros primos son los que solo son divisibles por 1 y por ellos mismos)


Ejercicio 16 una terminal de entradas de cine le permite a la persona comprar cuantas entradas quiera hasta que asÌ lo indique. Las entradas de menores cuesta 90 y la de mayores 150. Al finalizar muestra el total a pagar.

Ejercicio 17 en un sitio web se valida por nombre de usuario y contraseÒa  impedir que el usuario ingrese hasta poner los datos correctos. Si intenta m·s de 3 veces errÛneamente mostrar mensaje  de bloqueo de cuenta

Ejercicio 18
realizar un juego de 2 jugadores, el primero ingresa un numero del 1 al 10
el segundo jugador intenta adivinar el numero para lo cual tiene 3 oportunidades, ante cada oportunidad fallida el programa le devuelve si el numero ingresado es mayor o menor al numero misterioso

Ejercicio 19
realizar un algoritmo que permita agregar codigo de producto, cantidad y precio hasta que finalice con el codigo 0000. mostrar el total sumado y la cantidad de articulos comprados. si el monto supera los 1500$ aplicarle un 10% de descuento. 

ejercicio 20
Realizar un ejercicio que genere al azar un numero entre 0 y 20. luego brinde 5 oportunidades para acertar ese numero. en cada oportunidad fallida dira si el numero es mayor o menor a modo de ayuda. al acertar el numero el algoritmo finalizara con un mensaje de felicitacion o en caso de agotarse las 5 oportunidades mostrara "lastima se acabaron las oportunidades el numero era... "y mostrara el numero generado al azar.

ejercicio 21
Construir un algoritmo que pida una palabra al usuario y le diga cuantas vocales tiene. (ayuda usar funciones longitud y subcadena)

ejercicio 22
Escribir en un arreglo de 10 posiciones los numeros del 1 al 10

ejercicio 23
escribir en un arreglo de 8 posiciones las notas de un alumno y luego mostrar su promedio

ejercicio 24 
Escribir en un arreglo de 10 posiciones nombres y luego pedirle al usuario una posicion y mostrar por pantalla el nombre correspondiente a esa posicion

Ejercicio 25
esrcibir un algoritmo que se le pida al usuario ingresar valores para 2 arreglos de 5 posiciones llamados A1 y A2. luego compararlos posicion por posicion y decir quien "gano" y por cuanto, ejemplo
A1=[3,5,6,4,8]  A2=[1,6,4,8,9]   3>1,5<6, 6>4, 4<8, 8<9  gano A2 por 3 a 2

Ejercicio 26 NO HACER
NO HACER NO HACER NO HACER En un arreglo de 10 posiciones cargar numeros al azar de 0 al 50 y luego ordenar el arreglo

ejercicio 27
En un arreglo de 10 posiciones cargar el nombre de destinos de vuelos, luego pedirle a una persona que ingrese un destino y responder si ese destino esta o no en la lista

ejercicio 28
En 1 arreglo de 8 posiciones llamado "partidos" ingresar los nombres de los distintos partidos que estuvieron en la eleccion, luego en otro arreglo de 8 posiciones ingresar la cantidad de votos de cada partido haciendo corresponder la cantidad de votos con el partido, luego indicar que partido fue el mas votado y con cuantos votos.

ejercicio 29
realizar un algoritmo con un subproceso que reciba 2 numeros y te devuelva la suma de los numeros intermedios. 
por ejemplo SumaIntermedios(3,9)=4+5+6+7+8=30

ejercicio 30
Programar el subproceso SacarRepetidos del siguiente algoritmo (donde si hay algun numero repetido deja el primero que encuentre y a las copias les pone un 0)

Algoritmo ejer30
dimension A[20]
para i<-1 hasta 20 con paso 1 hacer
	escribir "ingrese numero"
	leer a[i]
fin para
SacarRepetidos(A,20)
para i<-1 hasta 20 con paso 1 hacer
	escribir a[i]
fin para
fin Algoritmo

Ejercicio 31
Escribir un subproceso que invierta las letras de una palabra ingresada por un usuario y utilizarlo en un algoritmo

Ejercicio 32
realizar un subproceso que dados 3 numeros obtenga el promedio de ellos y muestre el valor entero de ese promedio y utilizarlo en un algoritmo
*/

