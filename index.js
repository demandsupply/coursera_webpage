function ul(index) {
    console.log('click!' + index)

    var underlines = document.querySelectorAll(".underline-atop");

    for (var i = 0; i < underlines.length; i++) {
        underlines[i].style.transform = 'translate3d('+ index * 100 + '%,0,0)';
    }
}

const aa = document.querySelector('.aa');

aa.addEventListener('click', () => {
    aa.style.color = '#000';
});

// Create the carousel function

const buttonPrev = document.querySelector('[data-carousel-button-left]');
const buttonNext = document.querySelector('[data-carousel-button-right]');
const slidesContainer = document.querySelector('[data-slides]')


buttonNext.addEventListener('click', handleNext);
buttonPrev.addEventListener('click', handlePrev);

buttonNext.addEventListener('click', () => console.log('well done!'));

// slidesContainer.style.transform = 'translate(-50%)';

let currentSlide = 0;
const numSlides = (slidesContainer.children.length/4 -1);

function handlePrev() {
    if (currentSlide < 0) {
        currentSlide = currentSlide;
    }
    else if (currentSlide > 0) {
        currentSlide = (currentSlide -1) % numSlides;
        slidesContainer.style.transform = `translateX(${currentSlide * -102.5}%)`;
    }
}

function handleNext() {
    if (currentSlide >= numSlides) {
        currentSlide = currentSlide;
    }
    else if (currentSlide < numSlides) {
        currentSlide = currentSlide + 1;
        // slidesContainer.style.transform = `translateX(${currentSlide * -(200/(slidesContainer.children.length))}%)`;
        slidesContainer.style.transform = `translateX(${currentSlide * -102.5}%)`;
    }
}
