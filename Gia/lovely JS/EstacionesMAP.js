var estaciones = ["primavera", "verano", "otoño", "invierno"];
var uppercaseadas = estaciones.map(function(uppercase){
  return uppercase.toUpperCase();
});
console.log("estaciones originales: " + estaciones);
console.log("uppercaseadas: " + uppercaseadas);
