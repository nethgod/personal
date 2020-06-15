$(document).ready(function() {

  windowsSize();
  $(window).resize(windowsSize);
  $(window).resize(function(){
    if($('.header__mobileMenu').css('display')!='none'){
      $('.header__mobileMenu').slideToggle(300, function(){$(this).stop(true);});
    }
  });

  function windowsSize(){
    if ($(window).width() <= '1024'){
        $('.baby-store').text('Интернет-магазин детской одежды');
        $('.btn-container__btn').text('Узнать стоимость');
        $('.fly-tag--div2').text('</>');
        if(!$("button").is(".header__burger")){
          $('.header__container').prepend('<button class="header__burger"></button>');
        }
        $(".header__burger").removeClass("hidden");
        $(".swiper-pagination").removeClass("hidden");
        $('.header__burger').on('click', function(){
          $('.header__mobileMenu').slideToggle(300, function(){$(this).stop(true);});
        });

        $(document).mouseup(function (e){ 
          var div = $(".header__burger"); 
          if (!div.is(e.target) 
            && div.has(e.target).length === 0
            && $('.header__mobileMenu').css('display')!='none'
            && !$('.header__burger').is(e.target)
            && $('.header__burger').hasClass('header__burger')) { 
              $('.header__mobileMenu').slideToggle(300, function(){$(this).stop(true);});
              $('.header__mobileMenu').css('display')=='flex';
          }
        });
    }

    if ($(window).width() > '1024'){
        $('.baby-store').text('Сайт магазина детской одежды');
        $('.btn-container__btn').text('Заказать проект');
        $('.fly-tag--div2').text('<div>');
        $(".header__burger").addClass("hidden");
        $('.swiper-pagination').addClass("hidden");
    }

    if ($(window).width() <= '768'){
      $('.header__btn').text('');
    }

    if ($(window).width() > '768'){
      $('.header__btn').text('Заказать звонок');
    }

    if ($(window).width() <= '576'){
      $('.price-container__title').html(`
        Адаптивная вёрстка<br>под все устройства<br>и браузеры от 1000<br>рублей всего<br>за 4 часа.*
        <span class="price-container__title--sub">* Срок и стоимость могут отличаться<br>&ensp;
        от заявленных и рассчитываются<br>&ensp;&ensp;индивидуально, в зависимости<br>&ensp;&ensp;от сложности задач.</span>`);
    }

    if ($(window).width() > '576'){
      $('.price-container__title').html(`Адаптивная вёрстка под все устройства<br> и браузеры от 1000 рублей всего за 4 часа.*
                                        <span class="price-container__title--sub">* Срок и стоимость могут отличаться от заявленных и рассчитываются  индивидуально,<br> 
                                        &ensp;в зависимости от сложности задач.</span>`);
    }

    if ($(window).width() <= '375'){
      $('.about-info__title--prof').html('Frontend-разработчик и веб-<br>верстальщик');
      $('.babyImg').attr("src","img/baby-mob.png");
      $('.hypImg').attr("src","img/hyp-mob.png");
      $('.fishImg').attr("src","img/fish-mob.png");
      $('.btn-container__btn').text('Заказать проект');
      
      $('.mail-link').html(`
        <a href="mailto:dmitry@alekseev.com">
          <i class="fa fa-envelope fa-fw" aria-hidden="true"></i>
          dmitry@alekseev.com
        </a>`)
      }

      if ($(window).width() > '375'){
      $('.about-info__title--prof').html('Frontend-разработчик и веб-верстальщик');
      $('.babyImg').attr("src","img/Rectangle2.png");
      $('.hypImg').attr("src","img/Rectangle4.png");
      $('.fishImg').attr("src","img/Rectangle3.png");
      $('.btn-container__btn').text('Узнать стоимость');
      $('.mail-link').html(`
        <a href="mailto:dmitry@alekseev.com">
              <i class="fa fa-envelope fa-fw" aria-hidden="true"></i>
                &ensp;dmitry@alekseev.com
            </a>
            <br>`)
      }
    }

  $('.header__btn, .about-info__btn, .about-work__btn, .btn-container__btn, .social__btn').click( function(event){
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

    if($('.GET-name').hasClass('error')){
      $('.GET-name').toggleClass('error');
    }

    if($('.GET-number').hasClass('error')){
      $('.GET-number').toggleClass('error');
    }

    $('body').toggleClass('stop-scrolling stop-scrolling__mob');
    $('.myModal__form')[0].reset();
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

    })
  })


});

