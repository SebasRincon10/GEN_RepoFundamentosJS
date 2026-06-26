//→ Parte 1. LOS DATOS DEL CLIENTE
console.log(
`
-------------------------------
|PARTE 1. LOS DATOS DEL CLIENTE|
--------------------------------
`
);

let cliente ="Sebastian Rincon";
let ciudad = "Bogotá";
let prime = true;

console.log('Buen día',cliente,'el domicilio será enviado a la ciudad de',ciudad);

//→ Parte 2. LOS PRODUCTOS DEL PEDIDO 
console.log(
`
-----------------------------------
|PARTE 2. LOS PRODUCTOS DEL PEDIDO|
-----------------------------------
`
);

let productos=['Monitor','CPU','Mouse'];
console.log('Los productos que solicitaste son',productos[0],',',productos[1],',',productos[2]);
console.log('Tu primer producto solicitado es',productos[0]);

productos.push('Teclado');
console.log('Los productos que solicitaste son',productos);

productos.pop();
console.log('Los productos actualizados que solicitaste son',productos);
console.log('En total pediste',productos.length,'productos');

//→ Parte 3. EL PEDIDO COMPLETO COMO UNA FICHA
console.log(
`
--------------------------------------------
|PARTE 3. EL PEDIDO COMPLETO COMO UNA FICHA|
--------------------------------------------
`
);

let estado='En recorrido';
let pedido={
  nombre:cliente,
  ciudad:ciudad,
  prime:prime,
  productos:productos,
  estado:estado
};
console.log(pedido);
console.log(pedido.nombre);
pedido.estado='Entregado'
console.log(pedido);
console.log(pedido.productos[0]);

//→ Parte 4. EL COBRO
console.log(
`
------------------
|PARTE 4. EL COBRO|
------------------
`
);

let subtotal=3500000;
let domicilio=30000;
const propina=0.19;
let total=subtotal+domicilio;
console.log(total);
console.log('El costo de los productos es $',subtotal,'\nincluido el domicilio de $',domicilio,'\nEl valor total es $',total,'\nEl valor con propina sugerida $',total+(total*propina));
 
subtotal="3500000"
domicilio=30000;
total=subtotal+domicilio;
console.log(total);
//! Esto paso porque el dato de subtotal esta entrando como texto y al sumarlo con un número lo que hace es concatenar el texto con el número
console.log('Esto paso porque el dato de subtotal esta entrando como texto y al sumarlo con un número lo que hace es concatenar el texto con el número');

subtotal=parseInt(subtotal);
total=subtotal+domicilio;
console.log(total);
