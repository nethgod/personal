$(document).ready(function() {

  var scroll = $(this).scrollTop();

  windowsSize();
  $(window).resize(windowsSize);
  $(window).resize(function(){
    if($('.header__mobileMenu').css('display')!='none'){
      $('.header__mobileMenu').slideToggle(300, function(){$(this).stop(true);});
    }
  });

  function windowsSize(){
    if ($(window).width() <= '1024'){
        $(".swiper-pagination").removeClass("hidden");
        $(".swiper-container").removeClass("swiper-no-swiping");
    }

    if ($(window).width() <= '768'){
      $('.header__btn').text('');
    }

    if ($(window).width() > '768'){
      $('.header__btn').text('Заказать звонок');
    }
  }

  $('.header__btn, .about-info__btn, .about-work__btn, .btn-container__btn, .social__btn').click( function(event){
    scroll = $(document).scrollTop();
    event.preventDefault();
    $('.myOverlay').fadeIn(297,	function(){
      $('.myModal') 
      .css('display', 'block')
      .animate({opacity: 1}, 198);
    });
    $('body').toggleClass('stop-scrolling stop-scrolling__mob');
    
  });

  $('.myModal__closeBtn, .myOverlay').click( function(){
    $('.myModal').animate({opacity: 0}, 198, function(){
      $(this).css('display', 'none');
      $('.myOverlay').fadeOut(297);
    });

    $('.modalDone').animate({opacity: 0}, 198, function(){
      $(this).css('display', 'none');
    });

    if($('.GET-name').hasClass('error')){
      $('.GET-name').toggleClass('error');
    }

    if($('.GET-number').hasClass('error')){
      $('.GET-number').toggleClass('error');
    }

    $('body').toggleClass('stop-scrolling stop-scrolling__mob');
    $('.myModal__form')[0].reset();
    $('html, body').animate({
      scrollTop: scroll }, 1);
  });

  $(".nav__item").on("click","a", function (event) {
    var el = $(this);
    var dest = el.attr('href');
    if(dest !== undefined && dest !== '') {
        $('html').animate({ 
            scrollTop: $(dest).offset().top
        }, 1000
        );
    }
    return false;
  });

  $('input[type="tel"]').inputmask({"mask": "+7(999) 999-99-99"});

  $('form').each(function(){
    $(this).validate({
      errorPlacement(error, element){
        return true;
      },
      focusInvalid: false,
      rules: {
        number:{
          required: true,
        },
        name:{
          required: true,
          minlength: 2,
          maxlength: 12,
        },
      },
      submitHandler: function(form){
        let th = $(form);

        $.ajax({
          type: 'POST',
          url: 'mail.php',
          data: th.serialize(),
        }).done(() => {

            th.trigger('reset');

            $('.myModal').animate({opacity: 0}, 198, function(){
              $(this).css('display', 'none');
            });

            $('.myOverlay').fadeIn(297, function(){
              $('.modalDone') 
                .css('display', 'block')
                .animate({opacity: 1}, 198);
            });
          });

          return false;
      }
    })
  });

  $('.header__burger').on('click', function(){
    $('.header__mobileMenu').slideToggle(300, function(){$(this).stop(true);});
    $('.header__burger').toggleClass('burger-close');
  });

  $(document).mouseup(function (e){ 
      var div = $(".header__burger"); 
      if (!div.is(e.target) 
        && div.has(e.target).length === 0
        && $('.header__mobileMenu').css('display')!='none'
        && $('.header__burger').hasClass('header__burger')) { 
          $('.header__mobileMenu').slideToggle(300, function(){$(this).stop(true);});
          $('.header__mobileMenu').css('display')=='flex';
          $('.header__burger').toggleClass('burger-close');
        }
  });


});

