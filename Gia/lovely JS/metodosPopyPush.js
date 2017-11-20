var notas = ['do','re','mi','fa','sol'];
// Métodos PUSH (agregar) y POP (eliminar)

//Push agrega las ('notas')
var notasPush = notas.push('la','si'); // notasPush guarda el nuevo length

// notas pop ();
//notas[4] = 'la';
//notas [5] = 'si';

console.log(notasPush); // retorna 6
console.log(notas);
console.log('¿El valor que retorna push es igual a length?'  + notasPush == notas.length); // compara 6 con la longitud del array (true/false)
console.log('array con push:' + notas);

var notaSi = notas.pop; //POP remueve la última

console.log(notas);

console.log(notas.indexOf("re"));// indexOf me devuelve el valor del indice donde se encuentra lo que le pedí.

var reIndice = notas.indexOf('re'); // 1
var reMuestro = notas[reIndice]; //para llamar al dato de indice 1
console.log(reMuestro);//me muestra el dato de indice 1

//
//
if(notas.indexOf('crema') > -1){
  console.log('tenemos stock');
} else {
  console.log("no tenemos, vuelva pronto");
}
