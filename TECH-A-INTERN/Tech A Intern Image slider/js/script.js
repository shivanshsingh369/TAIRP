$(document).ready(function () {
    const slider = $(".slider");
    const slides = $(".slide");
    let currentIndex = 0;
    const autoSlideInterval = 5000; 
    let autoSlideTimer;

    function goToSlide(index) {
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }
        currentIndex = index;
        const translateX = -currentIndex * 100;
        slider.css("transform", `translateX(${translateX}%)`);
    }

    function autoSlide() {
        goToSlide(currentIndex + 1);
    }

    autoSlideTimer = setInterval(autoSlide, autoSlideInterval);

    $(".arrow.prev-arrow").click(function () {
        clearInterval(autoSlideTimer);
        goToSlide(currentIndex - 1);
        autoSlideTimer = setInterval(autoSlide, autoSlideInterval); 
    });

    $(".arrow.next-arrow").click(function () {
        clearInterval(autoSlideTimer);
        goToSlide(currentIndex + 1);
        autoSlideTimer = setInterval(autoSlide, autoSlideInterval);
    });
});
