function ibg() {
  let ibg=document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
  }
}
  
  ibg();
  
/* Fullscreen для IE
function fullscreen() {
  var height=$(Window).outerHeight()
  $('.fullscreen').css('min-height', height);
}
fullscreen();

$(window).resize(function(event) {
  fullscreen();
});
*/
