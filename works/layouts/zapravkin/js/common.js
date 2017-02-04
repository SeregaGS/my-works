$(document).ready(function(){
  $('#carousel').owlCarousel({
    items     : 1,
    itemsDesktop : [1000,1],
    itemsDesktopSmall : [900,1],
    itemsTablet: [600,1],
    itemsMobile : false,
    loop      : true,
    nav       : true,
    // autoPlay  : 5000,
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

  $('.number-link, .prices-link, .privacy-policy-link').magnificPopup({
    type:'inline',
    midClick: true
  });

  // $("#burger").click(function(){
  //   $(".navigation-wrapp, .burger-wrap-close, .number").css({"display": "block"}).show();
  //   $(".burger-wrap").css({"display": "none"}).hide();
  // });
  // $("#burger-close").click(function(){
  //   $(".navigation-wrapp, .burger-wrap-close, .number").css({"display": "none"}).hide();
  //   $(".burger-wrap").css({"display": "block"}).show();
  // });
  // $(".navigation-link").click(function(){
  //   $(".navigation-wrapp, .burger-wrap-close, .number").css({"display": "none"}).hide();
  //   $(".burger-wrap").css({"display": "block"}).show();
  // });
  // if (screen.width >= "1024") {
  //   $("#burger").click(function(){
  //     $(".navigation-wrapp, .burger-wrap-close, .number").css({"display": "block"}).show();
  //     $(".burger-wrap").css({"display": "none"}).hide();
  //   });
  //   $("#burger-close").click(function(){
  //     $(".navigation-wrapp, .burger-wrap-close, .number").css({"display": "none"}).hide();
  //     $(".burger-wrap").css({"display": "block"}).show();
  //   });
  //   $(".navigation-link").click(function(){
  //     $(".navigation-wrapp, .burger-wrap-close, .number").css({"display": "none"}).hide();
  //     $(".burger-wrap").css({"display": "block"}).show();
  //   });
  // };
  $("#burger").click(function(){
    $(".navigation-wrapp, .burger-wrap-close, .number").css({"display": "block"}).show();
    $(".burger-wrap").css({"display": "none"}).hide();
  });
  $("#burger-close").click(function(){
    $(".navigation-wrapp, .burger-wrap-close, .number").css({"display": "none"}).hide();
    $(".burger-wrap").css({"display": "block"}).show();
  });
  
  $("#nav .navigation").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
       //узнаем высоту от начала страницы до блока на который ссылается якорь
         top = $(id).offset().top;
       //анимируем переход на расстояние - top за 1500 мс
       $('body,html').animate({scrollTop: top+10}, 1500);
   });
});
