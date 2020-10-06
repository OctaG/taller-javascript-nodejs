
for(let i = 0; i < 20; i++){
  console.log("Valor de i: " + i)
  if(i == 10){
    console.log("Mi valor es 10");
  }else if (i < 10){
    console.log("Mi valor es menor a 10");
  }else{
    console.log("Mi valor es mayor a 10");
  }
}

let x = true
let y = false

if(x || y){
  console.log("Entré porque al menos uno es verdadero");
}

if(x && y ){
  console.log("Entré porque ambos son verdaderos");
}
