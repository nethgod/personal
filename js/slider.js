const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper (slider, {
	slidesPerView: 2,
	spaceBetween: 80,
	loop: true,
	navigation: {
    	nextEl: '.swiper-button-next',
    	prevEl: '.swiper-button-prev',
  	},

  	breakpoints: {
  		1440: {
      		slidesPerView: 3,
			spaceBetween: 30,
			loop: true
  		},
  		1025: {
  			slidesPerView: 2,
  			spaceBetween: 35,
  		},
      768: {
        slidesPerView: 2,
        spaceBetween: 35,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 35,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
      }
  },

})