const showModalButton = document.getElementById("apl-btn");
const modal = document.getElementById("application");
const closeModalButton = document.getElementById("closeModal");
const body = document.body;

if (showModalButton && modal && closeModalButton && body) {
  showModalButton.addEventListener("click", function () {
    modal.style.display = "flex";
    body.style.overflow = "hidden";
  });

  closeModalButton.addEventListener("click", function () {
    modal.style.display = "none";
    body.style.overflow = "auto";
  });
}



var swiper = new Swiper('.new-season__slider', {
    slidesPerView: 4, 
    spaceBetween: 30,
    breakpoints: {
        1025: {
            slidesPerView: 4, 
            spaceBetween: 20,
        },
        500: {
            slidesPerView: 2, 
            spaceBetween: 20,
            loop: true,
          },
          200: {
            slidesPerView: 'auto',
            spaceBetween: 30, 
            initialSlide: 0, 
            centerInsufficientSlides: true,
          },
      },
  });

  document.addEventListener('DOMContentLoaded', function () {
    const hamburgerButton = document.querySelector('.hamburger');
    const headerMenu = document.querySelector('.header-menu');
    const body = document.body;
    const navLinks = document.querySelectorAll('.nav-list__link');
  
    hamburgerButton.addEventListener('click', function () {
      headerMenu.classList.toggle('active');
      hamburgerButton.classList.toggle('active');
  
      if (body.style.overflow === 'hidden') {
        body.style.overflow = 'auto'; 
      } else {
        body.style.overflow = 'hidden'; 
      }
    });
  
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        headerMenu.classList.remove('active');
        hamburgerButton.classList.remove('active');
        body.style.overflow = 'auto'; 
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    // Находим все элементы с классами '.product-plus' и '.cart-del'
    const plusButtons = document.querySelectorAll('.product-plus');
    const cartDelButtons = document.querySelectorAll('.cart-del');
    const productBtns = document.querySelectorAll('.product-btns');
    const productCartBtns = document.querySelectorAll('.product-cart-btns');

    // Добавляем обработчик события для каждой кнопки
    plusButtons.forEach(function (plusButton, index) {
        plusButton.addEventListener('click', function () {
            // Добавляем класс "active" элементам с классами "product-btns" и "product-cart-btns"
            productBtns[index].classList.add('active');
            productCartBtns[index].classList.add('active');
        });
    });

    cartDelButtons.forEach(function (cartDelButton, index) {
        cartDelButton.addEventListener('click', function () {
            // Удаляем класс "active" у элементов с классами "product-btns" и "product-cart-btns"
            productBtns[index].classList.remove('active');
            productCartBtns[index].classList.remove('active');
        });
    });
});

var cart = new Swiper('.cart-slider', {
  slidesPerView: 4, 
  spaceBetween: 30,
  breakpoints: {
      1025: {
          slidesPerView: 4, 
          spaceBetween: 20,
      },
      500: {
          slidesPerView: 2, 
          spaceBetween: 20,
          loop: true,
        },
        200: {
          slidesPerView: 'auto',
          spaceBetween: 30, 
          initialSlide: 0, 
          centerInsufficientSlides: true,
        },
    },
});








