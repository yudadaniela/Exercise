/*Productos Baratos

Escribe una función llamada productosBaratos que reciba un arreglo de objetos (que representan productos) y retorne un nuevo arreglo con los nombres de los productos cuyo precio esté entre 5 y 10:

    let prods = [
        { nombre: "Arroz", precio: 5 },
        { nombre: "Pan", precio: 3 },
        { nombre: "Tomate", precio: 8 },
        { nombre: "Leche", precio: 15 }
    ];
Nota: No olvide usar console.log() para mostrar los resultados retornados por la función productosB
Entrada:    productosBaratos( prods );
Salida:     [ "Arroz", "Tomate" ]   */
let prods = [
    { nombre: "Arroz", precio: 5 },
    { nombre: "Pan", precio: 3 },
    { nombre: "Tomate", precio: 8 },
    { nombre: "Leche", precio: 15 }
];
function productosBaratos(prods) {

const rango= prods.filter(producto=>producto.precio>=5&&producto.precio<=10);
const nombre = rango.map(producto=>producto.nombre);
return rango;  
/*arrayProds=[];
for(let i=0; i<prods.length; i++){
    if(prods[i].precio>=5&&prods[i].precio<=10){
        arrayProds.push(prods[i].nombre)
    }

}
return arrayProds;*/
}
const productosBaratosProds=productosBaratos(prods);
console.log(productosBaratosProds);



