document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    const circles = document.querySelectorAll('.circle');
    const totalSlides = document.querySelectorAll('.swiper-slide').length;

    function updateCircles(index) {
        circles.forEach((circle, i) => {
            circle.classList.toggle('active', i === index);
        });
    }

    function showDiv(index) {
        swiper.slideToLoop(index);
        updateCircles(index);
    }

    circles.forEach((circle, index) => {
        circle.addEventListener('click', () => showDiv(index));
    });

    swiper.on('slideChange', function() {
        const activeIndex = swiper.realIndex;
        updateCircles(activeIndex);
    });

    updateCircles(0);
});