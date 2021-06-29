'use strict';
// const header = document.querySelector('header');

// window.addEventListener('scroll', () => {
//     console.log('Scrolling');
//     header.classList.add('hovered');
// });

window.addEventListener('load', () => {
    //buttons
    const left = document.querySelector('.btn-left');
    const right = document.querySelector('.btn-right');
    //carousel
    const slider = document.querySelector('.carousel__slide');
    const imgs = document.querySelectorAll('.carousel__slide img');

    //counter

    let counter = 0;
    const stepSize = imgs[0].clientWidth;

    slider.style.transform = `translateX(-${stepSize * counter}px)`;

    right.addEventListener('click', () => {
        if (counter >= imgs.length - 1) counter = -1;
        slider.classList.add('time2Animate');
        counter++;
        slider.style.transform = `translateX(-${stepSize * counter}px)`;
    });

    left.addEventListener('click', () => {
        if (counter <= 0) counter = imgs.length;
        slider.classList.add('time2Animate');
        counter--;
        slider.style.transform = `translateX(-${stepSize * counter}px)`;
    });
    slider.addEventListener('transitionend', (event) => {
        console.log('Конец Анимации');
    });
});

///back to top

//const goTopBtn = document.querySelector('.back_to_top');

/* begin begin Back to Top button  */
(function () {
    function trackScroll() {
        const scrolled = window.pageYOffset;
        const coords = document.documentElement.clientHeight;
        const header = document.querySelector('header');

        if (scrolled > 8) {
            console.log(scrolled);
            //goTopBtn.classList.add('back_to_top-show');
            header.classList.add('hovered');
        }
        if (scrolled > coords) {
            goTopBtn.classList.add('back_to_top-show');
        }
        if (scrolled < 50) {
            goTopBtn.classList.remove('back_to_top-show');
            header.classList.remove('hovered');
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(backToTop, 0);
        }
    }

    let goTopBtn = document.querySelector('.back_to_top');

    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
})();
/* end begin Back to Top button  */
