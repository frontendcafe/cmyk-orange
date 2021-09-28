/************** Navbar - start ***************/

$("#buscar").hide();

//click en icono lupa
$(".iconoLupa").click(function(){
    $(".iconoLupa i").hide(); // oculta icono lupa
    $(".iconoLupa").attr("style","padding-left: 0 !important");
    
    $("#buscar").removeClass("mobileHidden"); //muestra input buscar
    $("#buscar").children().removeClass("mobileHidden");
    $("#buscar").attr("style","width: 60% !important");
    
    $("#logonsb").attr("style","display: none !important"); // oculta Logo + COLAB ORANGE
    
    $(".logoHidden").attr("style","display: inline !important"); // muestra logo solo
});

//click fuera de icono lupa
$(".outNav").click(function() {
    $(".iconoLupa i").show(); // muestra icono lupa
    $(".iconoLupa").attr("style","padding-left: 130px !important"); // lupa hacia el lado derecho
    
    $("#buscar").addClass("mobileHidden"); // oculta input buscar
    $("#buscar").children().addClass("mobileHidden");
    $("#buscar").attr("style","width: 0 !important");
    
    $("#logonsb").attr("style","display: inline !important"); // muestra Logo + COLAB ORANGE
    
    $(".logoHidden").attr("style","display: none !important"); // oculta logo solo
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
        
        $("#logonsb").show(); // muestra COLAB ORANGE
        $("#logonsb").attr("style","margin-left: 166px !important");
        
        $(".logoHidden").hide();
        
        $(".navMobile > button > span").removeClass("navbar-toggler-icon"); // oculta icono hamburguesa
        
        $(".xTag").attr("style","display: block !important"); // muestra icono X
        
        contHam++;
    }
    else if (contHam == 2) { // segundo click
        $(".iconoLupa i").show(); // muestra icono lupa
        $(".iconoLupa").attr("style","padding-left: 130px !important");
        
        $("#logonsb").attr("style","margin-left: 12px !important"); // logo naranja + COLAB ORANGE
        
        $(".navMobile > button > span").addClass("navbar-toggler-icon"); // muestra icono hamburguesa
        
        $(".xTag").hide(); // oculta icono X
        
        contHam = 1;
    }
});

/************** Navbar - end ***************/