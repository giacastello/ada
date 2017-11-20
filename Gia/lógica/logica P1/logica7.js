/*7- Que calcule el sueldo que le corresponde al trabajador de una empresa que cobra 40.000 euros anuales, se deben realizar los cálculos en función de los siguientes
criterios:
a. b. c. d.
Si lleva más de 10 años en la empresa se le aplica un aumento del 10%.
Si lleva menos de 10 años pero más que 5 se le aplica un aumento del 7%.
Si lleva menos de 5 años pero más que 3 se le aplica un aumento del 5%. Si lleva menos de 3 años se le aplica un aumento del 3%*/


var sueldo = 40000;
var ant;
//ant > 10 es 10%+
//ant <10 y ant >5 es 7%+
//3 < ant < 5 es 5%+
// ant < 3 3%+


if (ant > 10) { sueldo = sueldo + 0.1}

else if (ant <= 10 && ant > 5) {
  sueldo = sueldo + 0.07*sueldo;
}

else if (ant <= 5 && ant > 3) {
  sueldo = sueldo + 0.05*sueldo;
}

else { //ant <=3
  sueldo = sueldo + 0.03*sueldo;
  }
