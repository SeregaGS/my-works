$(document).ready(function(){
  $('#carousel').owlCarousel({
    items     : 1,
    itemsDesktop : [1000,1],
    itemsDesktopSmall : [900,1],
    itemsTablet: [600,1],
    itemsMobile : false,
    loop      : true,
    nav       : true,
    autoPlay  : 5000,
    navigation : true,
    navigationText : false
  });
  $('#clients-carousel').owlCarousel({
    items     : 6,
    loop      : true,
    nav       : false,
    autoPlay  : 5000,
    navigation : false,
    navigationText : false
  });

  $('.number-link, .prices-link').magnificPopup({
  type:'inline',
  midClick: true
});
});
