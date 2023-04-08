import 'normalize.css'
import './styles/main.scss';

// slider
const sliderList = document.getElementById('slider-list');
const slide = document.getElementById('img');
const leftButton = document.getElementById('left-btn');
const rightButton = document.getElementById('right-btn');

let slidePosition = 0;
let gap = getComputedStyle(sliderList).gap;


function toLeft() {
    if (slidePosition === 0) {
        return;
    }

    if (slidePosition > 0) {
        slidePosition -= slide.clientWidth + gap.length;
        sliderList.style.transform = `translateX(-${slidePosition}px)`;
    }
}

function toRight() {
    if (slidePosition >= 534) {
        return;
    }
    if (slidePosition >= 0) {
        slidePosition += slide.clientWidth + gap.length;
        sliderList.style.transform = `translateX(-${slidePosition}px)`;
    }
}

leftButton.addEventListener('click', () => toLeft());
rightButton.addEventListener('click', () => toRight());

// modal window
document.querySelector('.header__link').addEventListener('click', () => {
    document.querySelector('.modal-opened').style.visibility = 'visible';
    document.querySelector('.modal__window').classList.add('animate__animated', 'animate__zoomIn');
})
document.getElementById('personal').addEventListener('click', () => {
    document.querySelector('.modal-opened').style.visibility = 'visible';
    document.querySelector('.modal__window').style.animation = 'scale-in-center .5s cubic-bezier(.25,.46,.45,.94) both';
})
document.querySelector('.modal__btn-close').addEventListener('click', () =>{
    document.querySelector('.modal-opened').style.visibility = 'hidden';
})


// Button Scroll-Up
const scrollUp = document.querySelector('.scroll-up');
window.addEventListener('scroll', () => {
    if (window.scrollY > 1000 ) {
        scrollUp.style.display = 'block';
    } else {
        scrollUp.style.display = 'none';
    }
})
