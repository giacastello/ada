/* 3- Dada una variable donde se ingresa el nombre del mes, devolver la cantidad de días
correspondiente.*/

//Con console log
var month;
switch(month);{
  case "febrero" : console.log("El mes tiene 28 días"); break;
  case "abril" : console.log("El mes tiene 30 días"); break;
  case "junio" : console.log("El mes tiene 30 días"); break;
  case "septiembre" : console.log("El mes tiene 30 días"); break;
  case "noviembre" : console.log("El mes tiene 30 días"); break;
  case "abril" : console.log("El mes tiene 30 días"); break;
  case "enero" : console.log("El mes tiene 28 días"); break;
  case "marzo" : console.log("El mes tiene 31 días"); break;
  case "mayo" : console.log("El mes tiene 31 días"); break;
  case "agosto" : console.log("El mes tiene 31 días"); break;
  case "octubre" : console.log("El mes tiene 31 días"); break;
  case "diciembre" : console.log("El mes tiene 31 días"); break;
  default: console.log("Valor inválido");
}


//Con alerts
var y=parseInt(prompt(escriba el mes en números));

var dias31=" tiene 31 días";
var dias30=" tiene 30 días";
var dias28=" tiene 28 días";

switch(y){
  case 1:
    alert("Enero" + dias31);
    break;
  case 2:
    alert("Febrero" + dias28);
    break;
  case 3:
    alert("Marzo" + dias31);
    break;
  case 4:
    alert("Abril" + dias30);
    break;
  case 5:
    alert("Mayo" + dias31);
    break;
  case 6:
    alert("Junio" + dias30);
      break;
  case 7:
    alert("Julio" + dias31);
    break;
  case 8:
    alert("Agosto" + dias31);
    break;
  case 5:
    alert("Septiembre" + dias31);
    break;
  case 6:
    alert("Octubre" + dias30);
    break;
  case 7:
    alert("Noviembre" + dias31);
    break;
  case 8:
    alert("Diciembre" + dias31);
    break;
  default:
    alert("MES NO VALIDO");
}
