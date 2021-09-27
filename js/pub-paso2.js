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


/* Navbar - start */

$("#buscar").hide();

//click en icono lupa
$(".iconoLupa").click(function(){
    $(".iconoLupa i").hide(); // oculta icono lupa
    $(".iconoLupa").attr("style","padding-left: 0 !important");
    
    $("#buscar").removeClass("mobileHidden"); //muestra input buscar
    $("#buscar").children().removeClass("mobileHidden");
    $("#buscar").attr("style","width: 60% !important");
    
    $("#logonsb").siblings().hide(); // oculta COLAB ORANGE
});

//click fuera de icono lupa
$(".divPubp2").click(function() {
    $(".iconoLupa i").show(); // muestra icono lupa
    $(".iconoLupa").attr("style","padding-left: 130px !important");
    
    $("#buscar").addClass("mobileHidden"); // oculta input buscar
    $("#buscar").children().addClass("mobileHidden");
    $("#buscar").attr("style","width: 0 !important");
    
    $("#logonsb").siblings().show(); // muestra COLAB ORANGE
});

var contHam = 1

//click en hamburguesa
$(".hamburguesa").click(function(){
    if (contHam == 1) { // primer click
        $(".iconoLupa i").hide(); // oculta icono lupa
        $(".iconoLupa").attr("style","padding-left: 0 !important");
        
        $("#buscar").addClass("mobileHidden"); // oculta input buscar
        $("#buscar").children().addClass("mobileHidden");
        $("#buscar").attr("style","width: 0 !important");
        
        $("#logonsb").siblings().show(); // muestra COLAB ORANGE
        $("#logonsb").attr("style","margin-left: 166px !important");
        
        $(".navMobile > button > span").removeClass("navbar-toggler-icon"); // oculta icono hamburguesa
        
        $(".xTag").attr("style","display: block !important"); // muestra icono X
        
        contHam++;
    }
    else if (contHam == 2) { // segundo click
        $(".iconoLupa i").show(); // muestra icono lupa
        $(".iconoLupa").attr("style","padding-left: 130px !important");
        
        $("#logonsb").attr("style","margin-left: 0 !important"); // logo naranja + COLAB ORANGE
        
        $(".navMobile > button > span").addClass("navbar-toggler-icon"); // muestra icono hamburguesa
        
        $(".xTag").hide(); // oculta icono X
        
        contHam = 1;
    }
});

/* Navbar - end */

/************** Publicacion paso 2 - end ***************/