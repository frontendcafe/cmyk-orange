/************** About us - start ***************/

/* Popper Js - start */
const button = document.querySelector('.teamBtn');
const tooltip = document.querySelector('#tooltip');

const popperInstance = Popper.createPopper(button, tooltip, {
  placement: 'top',
});


function show() {
  tooltip.setAttribute('data-show', '');

  // We need to tell Popper to update the tooltip position
  // after we show the tooltip, otherwise it will be incorrect
  popperInstance.update();
}

function hide() {
  tooltip.removeAttribute('data-show');
}

const showEvents = ['click', 'focus'];
const hideEvents = ['mouseleave', 'blur'];

showEvents.forEach((event) => {
  button.addEventListener(event, show);
});

hideEvents.forEach((event) => {
  button.addEventListener(event, function(){
    tooltip.addEventListener(event, hide);
  });
});
/* Popper Js - end */

/************** About us - end ***************/