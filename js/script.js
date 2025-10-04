window.addEventListener('load', windowLoad)

document.addEventListener('click', documentActions)

let isMobile

function windowLoad() {
   isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
   isMobile.any() ? document.body.setAttribute('data-touch', '') : null

   slidersInit();
}

function documentActions(e) {
   const targetElement = e.target
   // if (targetElement.closest('.menu__arrow')) {
   // 	targetElement.closest('.menu__item').classList.toggle('active')
   // }
   if (targetElement.closest('.icon-menu')) {
      document.body.classList.toggle('menu-open')
      document.body.classList.toggle('scroll-lock')
      document.documentElement.classList.toggle('menu-open')
   }
}


function slidersInit() {
   if (document.querySelector('.slider-reviews')) {
      const swiper = new Swiper('.slider-reviews', {
         slidesPerView: 3,         // 3 слайди в ряд
         loop: true,
         grid: {
            rows: 2,               // 2 ряди
            fill: "row",           // заповнення по рядках
         },
         spaceBetween: 30,
         pagination: {
            el: ".swiper-pagination",
            clickable: true,
         },
         // адаптив
         breakpoints: {
            320: {
               slidesPerView: 1.1,
               spaceBetween: 10,
               grid: { rows: 1 }
            },
            768: {
               slidesPerView: 2,
               spaceBetween: 20,
               grid: { rows: 2 }
            },
            1170: {
               slidesPerView: 3,
               spaceBetween: 30,
               grid: { rows: 2 }
            }
         }
      })
   }
}





