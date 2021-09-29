/************** About us - start ***************/

/************** Popper Js - Desktop - start ***************/

/* Inicializacion del Popper Js - start */
const numTeam = 4; // cantidad de personas en el Equipo

for (let i = 1; i <= numTeam; i++) { // inicializa el POPPER JS para el TOOLTIP de cada miembro del equipo
  const buttonx = document.querySelector('#teamBtn'+i);
  const tooltipx = document.querySelector('#tooltip'+i);
  
  const popperInstancex = Popper.createPopper(buttonx, tooltipx, {
    placement: 'top-start',
  });
}
/* Inicializacion del Popper Js - end */


/* Boton "Leer mas" - start */
let contBtn = 1; // contador de click en boton "Leer mas"

$(".teamBtn").click(function(){ // click en boton LEER MAS
  if (contBtn == 1) {
    $(this).siblings().show(); // muestra tooltip en 1er click
    contBtn++;
  }
  else if (contBtn == 2) {
    $(".tool").hide(); // oculta tooltip en 2do click
    contBtn = 1;
  }
});
/* Boton "Leer mas" - end */

/************** Popper Js - Desktop - end ***************/


/************** Popper Js - Mobile - start ***************/

/* Inicializacion del Popper Js - start */
const numTeam2 = 3; // cantidad de personas en el Equipo

for (let i = 1; i <= numTeam2; i++) { // inicializa el POPPER JS para el TOOLTIP de cada miembro del equipo
  const buttony = document.querySelector('#mobBtn'+i);
  const tooltipy = document.querySelector('#toolmob'+i);
  
  const popperInstancey = Popper.createPopper(buttony, tooltipy, {
    placement: 'top-start',
  });
}
/* Inicializacion del Popper Js - end */

/* Boton "Leer mas" - start */
let contmobBtn = 1; // contador de click en boton "Leer mas"

$(".aboutBtn").click(function(){ // click en boton LEER MAS
  if (contmobBtn == 1) {
    $(this).siblings().show(); // muestra tooltip en 1er click
    contmobBtn++;
  }
  else if (contmobBtn == 2) {
    $(".tool").hide(); // oculta tooltip en 2do click
    contmobBtn = 1;
  }
});
/* Boton "Leer mas" - end */

/************** Popper Js - Mobile - end ***************/

/************** About us - end ***************/