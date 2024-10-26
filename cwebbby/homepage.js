let currentIndex = 0;
const sliderWrapper = document.querySelector('.sliderWrapper');
const slides = document.querySelectorAll('.sliderItem');
const totalSlides = slides.length;

function showSlide(index) {
    sliderWrapper.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds
