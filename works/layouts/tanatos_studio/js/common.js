$(document).ready(function() {

  $(".carouse").owlCarousel({
        navigation : true,
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem: true,
        navigationText: false
    });

  $(".navigation").hide();

  $(".buttonBurger").click(function(){
    $(".navigation").css({"opacity": "1"}).show();
  });
  $(".closed").click(function(){
    $(".navigation").css({"opacity": "0"}).hide();
  });

  $("#nav, .arroWrap").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
       //узнаем высоту от начала страницы до блока на который ссылается якорь
         top = $(id).offset().top;
       //анимируем переход на расстояние - top за 1500 мс
       $('body,html').animate({scrollTop: top+10}, 1500);
       $("#nav").css({"opacity": "0"}).hide();

   });
});
