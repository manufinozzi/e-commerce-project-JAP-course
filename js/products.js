//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL).then(function(resultObj) {
        if (resultObj.status === 'ok') {
            Productsarray = resultObj.data;
        }
    })
});

/*
Para la entrega número 1:

1- Obtener la información. Para eso utilizar FETCH o la función GETJSONDATA definida en init.js
2- Hacer procedimiento para insertar en HTML el primer producto
3- Hacer procedimiento en HTML para insertar todos los productos
*/

