

/*5- Dada una variable que puede ser una letra, determinar si es una vocal.*/

var vocales = prompt("Ingresa una letra vocal");
switch(vocales){
  case "a" :
  case "A" :
  case "e" :
  case "E" :
  case "i" :
  case "I" :
  case "o" :
  case "O" :
  case "u" :
  case "U" :
    alert ("Es una vocal");
    break;

  default:
   alert ("Esa letra NO es una vocal"); break;
}
