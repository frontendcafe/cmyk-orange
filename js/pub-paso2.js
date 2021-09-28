/************** Publicacion paso 2 - start ***************/

/* Select change listener - start */
$("#formSelect").change(function(){ // Se activa ante cualquier cambio o seleccion del SELECT
    var seleccion = $("#formSelect option:selected").text(); // el "texto" de la opcion seleccionada se almacena en la variable "seleccion"
    
    // se relaciona los nombres de los ID de cada una de la opciones a seleccionar y los ID de las etiquetas de lenguajes a mostrar o ocultar
    $('#span'+ seleccion).show(); // muestra ID de etiqueta
    $('#span'+ seleccion).siblings().show(); // muestra al hermano del ID de etiqueta
    $('#span'+ seleccion).parent().show(); // muestra al padre del ID de etiqueta
});
/* Select change listener - end */

/* Ocultar etiqueta con "x" - start */
$(".btnClose").click(function(){ // Se activa ante un click en "x" de la etiqueta... <b class="btn btnClose">x</b>
    $(this).parent().hide(); // oculta al padre de class="btnClose" de ESTE (this) instante... posible caso: el padre seria <div class="input-group mb-3"> Si se oculta al padre, por ende, se ocultan los hijos
});
/* Ocultar etiqueta con "x" - end */

/************** Publicacion paso 2 - end ***************/