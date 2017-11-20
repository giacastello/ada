/*6- Dados tres números, x y z, si x es mayor que y calcular la resta entre x y z, y determinar
si eso es mayor que y, de lo contrario sumar x y z (x+z) y multiplicarlo por y.*/



/******    RESOLUCIÓN  ******/

var x,y,z,total;
if (x>y){
  total= x-z;
  if (total>y){
  }
else {
    total=(x+z)*y
}
}


/******    INVIERTO EL OPERADOR ARITMETICO ******/
if(total<y){
  total=(x-z)*y;
}



/******    INVIERTO EL OPERADOR DE NEGACION ******/
if (!(total > y)){
  total= (x-z) *y;
}
