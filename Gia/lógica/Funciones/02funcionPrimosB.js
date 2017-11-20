
function primos(N){
  for (var i=N-1;i>1;i--){
    var x = N % i;//voy a dividir por i hasta que i valga 2
    if(x === 0){
      return false;
    }
  }
  return true;
}

console.log(primos(13));
