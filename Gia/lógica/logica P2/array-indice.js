

var semana = [50, 35, 105, 40, 25];
var dias= ['lu','ma','mi','ju','vi'];
var total
for (i=0; i<semana.length; i++) { //uso la variable de control de for i para recorrer los términos.
  console.log (semana[i]);
  total+= semana [i]; //total + semana [i];
}
console.log(total);


// para sacar el promedio
prom= total/semana.length;

//para darle el valor de los días al índice:

for (i=0; i<semana.length; i++) { //uso la variable de control de for i para recorrer los términos.
  if (semana[i]>50);
  console.log(dias [i] + ":" + semana [i]);
}
