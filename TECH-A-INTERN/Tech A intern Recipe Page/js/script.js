let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");

function showSlide(n) {
    slides[currentSlide].style.display = "none";
    currentSlide += n;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    slides[currentSlide].style.display = "block";
}

function nextSlide() {
    showSlide(1);
}

function prevSlide() {
    showSlide(-1);
}

showSlide(0);

let slideInterval = setInterval(nextSlide, 3000);

const sliderContainer = document.querySelector(".slider-container");

sliderContainer.addEventListener("mouseenter", () => {
    clearInterval(slideInterval);
});

sliderContainer.addEventListener("mouseleave", () => {
    slideInterval = setInterval(nextSlide, 3000);
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const sectionId = link.getAttribute("href").substring(1);
            scrollToSection(sectionId);
        });
    });
});
