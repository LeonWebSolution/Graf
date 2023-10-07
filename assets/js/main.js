const showModalButton = document.getElementById("apl-btn");
const modal = document.getElementById("application");
const closeModalButton = document.getElementById("closeModal");
const body = document.body;

showModalButton.addEventListener("click", function () {
    modal.style.display = "flex";
    body.style.overflow = "hidden";
});

closeModalButton.addEventListener("click", function () {
    modal.style.display = "none";
    body.style.overflow = "auto";
});

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
          320: {
            slidesPerView: 'auto', 
            spaceBetween: 20,
            loop: false,
          },
      },
  });

  document.addEventListener('DOMContentLoaded', function () {
    const hamburgerButton = document.querySelector('.hamburger');
    const headerMenu = document.querySelector('.header-menu');
  
    hamburgerButton.addEventListener('click', function () {
      headerMenu.classList.toggle('active'); 
      hamburgerButton.classList.toggle('active');
    });
  });