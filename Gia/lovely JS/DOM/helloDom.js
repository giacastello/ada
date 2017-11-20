getElementById('id') //element en singular
getElementsByClassName('className')



var cajas = document.getElementsByClassName('caja');// aca estoy guardando TODOS los elementos HTML que comparten la clase caja.
var primeraCaja = document.getElementById('primeraCaja');//llamo al nodo de primeraCaja. Ahora puedo hacerle cambios desde JS, porque ya tengo sus elementos.

//cajas[0].textContent =   "hola mundo";

//primeraCaja es un div, innerHTML es una función, y el H1 es el contenido del div.
//Ahora puedo modificar primeraCaja porque antes la llamé con getElementById
primeraCaja.innerHTML = '<h1> Hola mundo </h1>';//innerHTML sirve para darles características a la caja


var caja = document.createElement('div');

var contenido = document.createTextNode('Nueva caja');//este elemento lo creo desde aca, y lo guardo en una variable.

//agrego 'hola' de contenido al div caja, y se lo pongo como hijo
caja.appendChild(contenido);

//con el método setAttribute podemos crear atributos para los elementos.
//los parámetros de setAttribute son (tipo, nombre)
caja.setAttribute('class','caja naranja')
caja.className = "caja naranja";
caja.style.backgroundColor = "orange";


var contenedor = document.getElementById('contenedor');
contenedor.appendChild(caja);


primeraCaja.style.backgroundColor = 'blue';

//insertBefore recibe dos parámetros (elemento y posición)
contenedor.insertBefore(caja,cajas[2]);


contende.replaceChild(caja, cajas[2]);
contenedor.removeChild(caja[3]);
