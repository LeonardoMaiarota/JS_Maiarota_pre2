class Producto {
    constructor (nombre, precio, marca, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat (precio);
        this.marca = marca;
        this.cantidad = cantidad;
    }

    sumarIVA (){
        return this.precio *1.21;
    }
}

var arrayProductos =[];
do {
    var comprobacion = prompt ('Ingrese un el nombre de un producto o fin para terminar de agregar');
    if (comprobacion == "fin" || comprobacion == "FIN" || comprobacion === "Fin"){
        break;
    }
    else{
            nombreP = comprobacion;
            var precioP = prompt ('Ingrese el precio del producto en pesos');
            var marcaP = prompt ('Ingrese la marca del producto')
            var cantidadP = prompt ('Ingrese la cantidad comprada del producto');
            arrayProductos.push (new Producto (nombreP, precioP, marcaP, cantidadP));
        }
}

while (comprobacion != "fin" || comprobacion != "FIN" || comprobacion != "Fin")


console.log (arrayProductos)

for


(var producto of arrayProductos) {
console.log (producto.nombre);
    console.log ("Marca del producto: " + producto.marca);
    console.log ("Cantidad adquirida: " + producto.cantidad);
    console.log ("Precio sin IVA: " + producto.precio);
    console.log ("Precio final con IVA: " + producto.sumarIVA());
}

