// LISTA DE PRODUCTOS CON FETCH
// Se imprime un listado de productos, obtenidos de una api local, en forma de cards
const lista = document.querySelector("#listado")

fetch("js/data/productos.json")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((producto) => {
            const li = document.createElement("li")
            li.innerHTML = `
        <h4> ${producto.nombre} </h4>
        <p> ${producto.precio} </p>
        <p>Código: ${producto.id} </p>
        <hr/>
        `
            lista.append(li)
        });
    });


// Convierto los objetos a JSON y los cargo en el localstorage para su futura aplicación!
const miJson = JSON.stringify(productos);
localStorage.setItem("productos", miJson);


// BUSCADOR DE PRODUCTOS
// Al buscar el producto, el mismo se imprime en el dom y a la vez se activa una card con SweetAlert.
// El listado de productos se encuentra realizado en una función constructora, modularizada en el archivo (class.js)

// Agrego un seguidor de eventos de tipo "submit" al buscador
let miformulario = document.getElementById("formulario");
miformulario.addEventListener("submit", validarFormulario);

// realizo la "validación" del formulario para guardar el dato en el sessionstorage ingresado en él
function validarFormulario(e) {
    e.preventDefault();
    let formulario = e.target;
    sessionStorage.setItem("busqueda", formulario.children[0].value);
    location.reload();
}

// genero la variable con el dato recibido del formulario
let valor = sessionStorage.getItem("busqueda")

// Utilizo condicionales para imprimir el resultado de la busqueda ingresada en el formulario
if (valor == "azucar") {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<img class="img" src="./assets/azucar.jpg" alt=""> 
    <h3>${productos[0].nombre}</h3> 
    <p>$ ${productos[0].precio}</p>`;
    contenedor.className = "productAzucar";
    document.getElementById("card").appendChild(contenedor);
    Swal.fire({
        title: ` ${productos[0].nombre} `,
        text: ` ${productos[0].precio} `,
        imageUrl: `./assets/azucar.jpg`,
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: `Custom image`
    });
} else if (valor == "fideos") {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = ` <img class="img" src="./assets/fideos.jpg" alt=""> 
    <h3>${productos[1].nombre}</h3> 
    <p>$ ${productos[1].precio}</p>`;
    contenedor.className = "productFideos";
    document.getElementById("card").appendChild(contenedor);
    Swal.fire({
        title: ` ${productos[1].nombre} `,
        text: ` ${productos[1].precio} `,
        imageUrl: `./assets/fideos.jpg`,
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: `Custom image`
    });
} else if (valor == "harina") {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<img class="img" src="./assets/harina.jpg" alt=""> 
    <h3>${productos[2].nombre}</h3> 
    <p>$ ${productos[2].precio}</p>`;
    contenedor.className = "productHarina";
    document.getElementById("card").appendChild(contenedor);
    Swal.fire({
        title: ` ${productos[2].nombre} `,
        text: ` ${productos[2].precio} `,
        imageUrl: `./assets/harina.jpg`,
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: `Custom image`
    });
} else if (valor == "aceite") {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = ` <img class="img" src="./assets/aceite.jpg" alt=""> 
    <h3>${productos[3].nombre}</h3> 
    <p>$ ${productos[3].precio}</p>`;
    contenedor.className = "productAceite";
    document.getElementById("card").appendChild(contenedor);
    Swal.fire({
        title: ` ${productos[3].nombre} `,
        text: ` ${productos[3].precio} `,
        imageUrl: `./assets/aceite.jpg`,
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: `Custom image`
    });
} else if (valor == "whisky") {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = ` <img class="img" src="./assets/whisky.jpg" alt=""> 
    <h3>${productos[4].nombre}</h3> 
    <p>$ ${productos[4].precio}</p>`;
    contenedor.className = "productWhisky";
    document.getElementById("card").appendChild(contenedor);
    Swal.fire({
        title: ` ${productos[4].nombre} `,
        text: ` ${productos[4].precio} `,
        imageUrl: `./assets/whisky.jpg`,
        imageWidth: 300,
        imageHeight: 200,
        imageAlt: `Custom image`
    });
} else {
    swal.fire({
        title: `ERROR`,
        text: `No se han encontrado coincidencias en nuestro listado de productos. Realice una nueva búsqueda.`
    })
}




//CÓDIGO ANTERIOR
/*
    //Variable adquiridas
    let item = prompt("Ingrese el producto por el cual desea conocer el precio de venta al público: azucar, fideos, harina, aceite, whisky. En su defecto igrese ESC para salir.");
    
    //funciones
    function mostrar(mensaje){
        console.log(mensaje);
        alert(mensaje);
}

//codigo
while (item != "ESC"){
    if (item == "azucar"){
        productos.find(Producto =>{
        if(Producto.nombre === "AZUCAR"){
            mostrar(Producto.nombre + " " + Producto.precio)}
        });
    }
    else if (item == "fideos"){
        productos.find(Producto =>{
        if(Producto.nombre === "FIDEOS"){
            mostrar(Producto.nombre + " " + Producto.precio)}
        });
    }
    else if (item == "harina"){
        productos.find(Producto =>{
        if(Producto.nombre === "HARINA"){
        mostrar(Producto.nombre + " " + Producto.precio)}
        });
    }
    else if (item == "aceite"){
        productos.find(Producto =>{
        if(Producto.nombre === "ACEITE"){
        mostrar(Producto.nombre + " " + Producto.precio)}
        });
    }
    else if (item == "whisky"){
        productos.find(Producto =>{
        if(Producto.nombre === "WHISKY"){
        mostrar(Producto.nombre + " " + Producto.precio)}
        });
    }
    else{
        mostrar("Ingrese un producto de la lista")
        }
    item = prompt("Ingrese el producto por el cual desea conocer el precio de venta al público: azucar, fideos, harina, aceite, whisky. En su defecto igrese ESC para salir.");
    }
*/