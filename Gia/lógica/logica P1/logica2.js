/* 2- Dada una variable y que puede contener un número de 1 a 7, determinar a que día de
la semana corresponde. Incluir la opción si la variable toma un valor no válido (por
ejemplo 0 u 8).*/

/*Con if*/

 if (N<0 && N>7){
  console.log ("numero inválido");
  }

  if (N==1) {console.log("Lunes");}
  if (N==2) {console.log("Martes");}
  if (N==3) {console.log("Miércoles");}
  if (N==4) {console.log("Jueves");}
  if (N==5) {console.log("Viernes");}
  if (N==6) {console.log("Sabado");}
  if (N==7) {console.log("Domingo");}

/*Con switch*/

var (y);
switch (y) {
  case 1 : console.log("Lunes");
    break;
  case 2: console.log("Martes");
    break;
  case 3: console.log("Miércoles");
    break;
  case 4: console.log("Jueves");
    break;
  case 5: console.log("Viernes");
    break;
  case 6: console.log("Sabado");
    break;
  case 7: console.log("Domingo");
    break;
  default: console.log("Número inválido")
}
