//función constructora para el listado de productos
class Producto {
    constructor(id, nombre, precio, img){
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
    }
    sumaIva(){
        this.precio = this.precio * 1.30;
    }
}

//Listado de productos
const productos = [];


productos.push(new Producto("1", "azucar", "150"));
productos.push(new Producto("2", "fideos", "250"));
productos.push(new Producto("3", "harina", "500"));
productos.push(new Producto("4", "aceite", "1500"));
productos.push(new Producto("5", "whisky", "3500"));


//Utilización de la función interna del constructor para el recago IVA en los productos
for (const producto of productos) {
    producto.sumaIva();
}