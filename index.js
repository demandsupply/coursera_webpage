// Create the fixed sticky second nav on scroll

let navbar = document.getElementById("fixed-nav");
let navOffset = navbar.offsetTop;
window.addEventListener("scroll", () => {
    (window.scrollY >= navOffset) ?
    navbar.classList.add("fixed-it") :
    navbar.classList.remove("fixed-it");
});

// Create the function which shows the first nav when scrolling up

// let prevScrollPos = window.scrollY;

// window.addEventListener("scroll", scroll2);

// function scroll2() {
//     // Current scroll position
//     let currentScrollPos = window.scrollY;

//     if (prevScrollPos > currentScrollPos) {
//         // User has scrolled up
//         document.getElementById("temp-fixed-nav").classList.add("temp-fixed-it");
//     } else {
//         // User has scrolled down
//         this.document.getElementById("temp-fixed-nav").classList.remove("temp-fixed-it");
//     }

//     // Update previous scroll position
//     prevScrollPos = currentScrollPos;
// };


// Create the function used to underline the selected item of the menu
var color = document.querySelectorAll(".a");
var numberMenus = document.querySelectorAll(".a").length;
var lastNumber = 0;

function ul(index) {
    console.log('click!' + index)
    var underlines = document.querySelectorAll(".underline-atop");

    // // Remove all previous the colored text 
    // for (var i =0; i<numberMenus; i++) {
    //     color[i].classList.remove("aa");
    // }

    color[lastNumber].classList.remove("aa","u500");

    // Add colored text to the current selected menu
    color[index].classList.add("aa","u500");
    lastNumber = index;
    // Underline the current selected text
    for (var i = 0; i < underlines.length; i++) {
        underlines[i].style.transform = 'translate3d('+ index * 100 + '%,0,0)';
    }
}


// Create the function which show one box and hide the others

function shoWindow(id) {
    if (document.getElementById) {
        var boxId = document.getElementById(id);
        var allboxes = document.getElementsByClassName("careers-window");
        for(var i=0; i<allboxes.length; i++) {
            allboxes[i].style.display = "none";
        }
        boxId.style.display = "block";
    }
    return false;
}

// Create the carousel function

function setUpCarousel(carousel) {
    const buttonPrev = carousel.querySelector('[data-carousel-button-left]');
    const buttonNext = carousel.querySelector('[data-carousel-button-right]');
    const slidesContainer = carousel.querySelector('[data-slides]')


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
}

// Create a variable [array] which contains all the carousels of the page 
const carouselAll = document.querySelectorAll('[data-carousel]');

// Apply the function to each carousel of the page 
carouselAll.forEach(setUpCarousel);


// Connect the dots
// const dotOne = document.querySelector('[data-dot-one]');
// const dotTwo = document.querySelector('[data-dot-two]');
// const dotThree = document.querySelector('[data-dot-three]');


// dotOne.addEventListener('click', () => console.log('clicked-one'));
// dotTwo.addEventListener('click', () => console.log('clicked-two'));
// dotThree.addEventListener('click', () => console.log('clicked-three'));


// const dot = document.querySelector('[data-carousel-dot]');


// var section = 1;
// displaySection(section);

// function nextSection(n) {
//     displaySection(section += n);
// }

// function currentSection(n) {
//     displaySection(section = n);
// }

// function displaySection(n) {
//     var i;
//     var section = document.getElementsByClassName("section");
//     var dots = document.getElementsByClassName("dot");

//     if (n > section.length) {
//         section = 1;
//     }

//     if (n < 1) {
//         section = section.length;
//     }

//     for (i=0; i<section.length; i++) {
//         dots[i].className = dots[i].className.replace("active", "");
//     }

    // section[section = 1].style.display = "block";
    // dots[section = 1].className += "active";
// }