'use strict';

/* EJERCICIO 1. Se pide dar al menos una manera de acceder a los siguientes elementos: */

//console.log(document.getElementById('cuerpo-tabla'));
//console.log(document.getElementById('producto'));
//console.log(document.getElementById('cantidad'));
//console.log(document.getElementById('precio-unitario'));
//console.log(document.getElementById('descuento'));
//console.log(document.getElementById('agregarLinea'));

/* EJERCICIO 2. Se pide insertar valores en los inputs Producto, Cantidad, Precio unitario y Descuento
y mostrarlos por consola, utilizando una función que se ejecute cuando se pulse el botón Agregar. */

let inputProducto = document.getElementById('producto');
let inputCantidad = document.getElementById('cantidad');
let inputPrecioUnitario = document.getElementById('precio-unitario');
let inputDescuento = document.getElementById('descuento');

let botonAgregar = document.getElementById('agregarLinea');

let insertarValores = function(event)
{   
    event.preventDefault();
    // Mostramos por pantalla los valores introducidos en los inputs
    console.log(inputProducto.value);
    console.log(inputCantidad.value);
    console.log(inputPrecioUnitario.value);
    console.log(inputDescuento.value);
}

botonAgregar.addEventListener("click", insertarValores);

/* EJERCICIO 3. Se pide que al pulsar el botón Agregar se añada una nueva línea al final de la tabla,
de momento vacía o con valores dados por defecto al crear la línea. En esta nueva línea, debes insertar
un botón Borrar. */

let cuerpoTabla = document.getElementById('cuerpo-tabla');

/*botonAgregar.addEventListener("click", function(event)
{
    event.preventDefault();
    // Creamos una variable con la estructura html de una nueva row de la tabla con valores por defecto
    let nuevaFila = `<tr>
                        <td><input class="form-control" type="text" name="producto" id="producto2" value="Producto por defecto..."/></td>
                        <td><input class="form-control" type="number" name="cantidad" id="cantidad2" value=1 /></td>
                        <td><input class="form-control" type="text" name="precio-unitario" id="precio-unitario2" value=10 /></td>
                        <td><input class="form-control" type="text" name="descuento" id="descuento2" value=0 /></td>
                        <td><a href="" id="borrarLinea" class="btn btn-danger"> Borrar </a></td>
                    </tr>`

    cuerpoTabla.insertRow().innerHTML = nuevaFila;
});*/

/* EJERCICIO 4. Se pide que al pulsar el botón Agregar, se muestren en la tabla los valores introducidos en el input. */

botonAgregar.addEventListener("click", function(event)
{
    event.preventDefault();
    // Creamos una variable con la estructura html de una nueva row de la tabla con los valores introducidos en los inputs
    let nuevaFila = `<tr>
                    <td><input class="form-control" type="text" name="producto" id="producto2" value="${inputProducto.value}"/></td>
                    <td><input class="form-control" type="number" name="cantidad" id="cantidad2" value="${inputCantidad.value}" /></td>
                    <td><input class="form-control" type="text" name="precio-unitario" id="precio-unitario2" value="${inputPrecioUnitario.value}" /></td>
                    <td><input class="form-control" type="text" name="descuento" id="descuento2" value="${inputDescuento.value}" /></td>
                    <td><a href="" id="borrarLinea" class="btn btn-danger"> Borrar </a></td>
                </tr>`

    cuerpoTabla.insertRow().innerHTML = nuevaFila;
});

/* EJERCICIO 5. Se pide que al pulsar el botón Borrar, se elimine la fila insertada en el ejercicio 4 y se limpien los inputs. */

let borrarFila = function(event)
{
    event.preventDefault();

    cuerpoTabla.innerHTML = ''; // Eliminamos las filas y limpiamos los inputs
}

let botonBorrar = document.getElementById('borrarLinea');

if(botonBorrar) // Comprobamos que botonBorras no sea null antes de añadir el EventListener para evitar errores
{
    botonBorrar.addEventListener("click", borrarFila, false);
}