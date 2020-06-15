const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper (slider, {
	slidesPerView: 2,
	spaceBetween: 80,
	loop: true,
	navigation: {
    	nextEl: '.swiper-button-next',
    	prevEl: '.swiper-button-prev',
  	},
  pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },

  	breakpoints: {
  		1440: {
      		slidesPerView: 3,
			spaceBetween: 30,
			loop: true
  		},
  		1024: {
  			slidesPerView: 2,
  			spaceBetween: 35,
  			pagination: {
    			el: '.swiper-pagination',
    			type: 'bullets',
  			},
  		},
      768: {
        slidesPerView: 2,
        spaceBetween: 35,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 35,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
        },
      }
  },

})