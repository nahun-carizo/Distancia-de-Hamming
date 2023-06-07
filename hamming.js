function distanciaHamming(var1, var2) {
    var arr1 = var1.split("");
    var arr2 = var2.split("");
    var len1 = arr1.length;
    var len2 = arr2.length;
    
    if (len1 < len2) {
      for (var i = 0; i < len2 - len1; i++) {
        arr1.unshift("0");
      }
    }
    if (len1 > len2) {
      for (var j = 0; j < len1 - len2; j++) {
        arr2.unshift("0");
      }
    }
    
    var dist = 0;
    for (var e = 0; e < arr1.length; e++) {
      if (arr1[e] != arr2[e]) {
        dist++;
      }
    }
    
    return dist;
  }
  
  var var1 = prompt("Ingresa el primer número:");
  var var2 = prompt("Ingresa el segundo número:");
  var aux = distanciaHamming(var1, var2);
  console.log("La distancia de Hamming entre " + var1 + " y " + var2 + " es " + aux);
  