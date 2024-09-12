//EN JS

let a = 1;
let b = 10;
let c = 24;
let x1;
let x2;

//let opcion = 2;
let opcion = prompt("¿Qué valor deseas ver? Ingresa 1 para x1 o 2 para x2:");

switch (opcion)

{
     case 1:
          x1 = (-b + Math.pow(Math.pow(b, 2) - 4 * a * c, (1/2))) / (2 * a);
          console.log("x1 = "+x1);
          break;

     case 2: 
          x2 = (-b - Math.pow(Math.pow(b, 2) - 4 * a * c, (1/2))) / (2 * a);
          console.log("x2 = "+x2);
          break;


};
