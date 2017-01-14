$(document).ready(function(){
  $('#carousel').owlCarousel({
    items     : 1,
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
});
