document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.dots-container');
    let slideIndex = 0;
    let cyclicEnabled = true; 

   
    slides.forEach((slide, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.setAttribute('data-index', index);
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');
    dots[slideIndex].classList.add('active');

   
    function showSlide(index) {
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });
        slides[index].style.display = 'block';
        dots.forEach((dot) => {
            dot.classList.remove('active');
        });
        dots[index].classList.add('active');
    }

   
    function nextSlide() {
        if (!cyclicEnabled && slideIndex === slides.length - 1) {
            return; 
        }
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }

    
    function prevSlide() {
        if (!cyclicEnabled && slideIndex === 0) {
            return; 
        }
        slideIndex = (slideIndex - 1 + slides.length) % slides.length;
        showSlide(slideIndex);
    }

   
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            slideIndex = index;
        });
    });

 
    setInterval(nextSlide, 5000); 
});
