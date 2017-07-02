$(document).ready(function(){
  $('#carousel').owlCarousel({
    items     : 1,
    itemsDesktop : [1000,1],
    itemsDesktopSmall : [900,1],
    itemsTablet: [600,1],
    itemsMobile : false,
    loop      : true,
    nav       : true,
    autoPlay  : 4500,
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
  $('.number-link, .prices-link, .privacy-policy-link, .hidden-carousel-text').magnificPopup({
    type:'inline',
    midClick: true
  });
  $("#burger").click(function(){
    $(".navigation-wrapp, .burger-wrap-close, .number").css({"display": "block"}).show();
    $("#burger.burger-wrap").css({"display": "none"}).hide();
    $(".navigation-wrapp").addClass("navigation-link-click");
  });
  $("#burger-close").click(function(){
    $(".navigation-wrapp, .burger-wrap-close, .number").css({"display": "none"}).hide();
    $("#burger.burger-wrap").css({"display": "block"}).show();
  });

  $("#nav .navigation").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
       //узнаем высоту от начала страницы до блока на который ссылается якорь
         top = $(id).offset().top;
       //анимируем переход на расстояние - top за 1500 мс
       $('body,html').animate({scrollTop: top+10}, 1500);
   });

  $("#form-bottom").validate({
    rules: {
      name: "required",
      tel: {
        required: true,
        minlength: 11
      }
    },
    messages: {
      name: "Пожалуйста, укажите Ваше имя.",
      tel: {
        required: "Пожалуйста, укажите Ваш номер телефона.",
        minlength: "Пример - 89179999999"
      }
    }
  });
  $("#forms-top-wrap").validate({
    rules: {
      name: "required",
      tel: {
        required: true,
        minlength: 11
      }
    },
    messages: {
      name: "Пожалуйста, укажите Ваше имя.",
      tel: {
        required: "Пожалуйста, укажите Ваш номер телефона.",
        minlength: "Пример - 89179999999"
      }
    }
  });
  $("#partners-prices").validate({
    rules: {
      name: "required",
      organization: {
        required: true
      },
      tel: {
        required: true,
        minlength: 11
      },
      email: {
        required: true
      },
    },
    messages: {
      name: "Пожалуйста, укажите Ваше имя.",
      organization: {
        required: "Пожалуйста, укажите Вашу организацию."
      },
      tel: {
        required: "Пожалуйста, укажите Ваш номер телефона.",
        minlength: "Пример - 89179999999"
      },
      email: {
        required: "Пожалуйста, укажите Вашу электронную почту."
      },
    }
  });
});
