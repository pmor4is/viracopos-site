const slider = document.querySelectorAll('.slider');
const prvButton = document.getElementById('prevButton');
const nxtButton = document.getElementById('nextButton');

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
    slider[currentSlide].classList.add('on')
}

function nextSlider() {
    hideSlider();
    //Verifica se o slider chegou ao fim e retorna ao início
    if(currentSlide == slider.length -1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    showSlider();
}

function prevSlider() {
    hideSlider();
    //Verifica se o slider chegou ao fim e retorna ao início
    if(currentSlide == 0) {
        currentSlide = slider.length -1;
    } else {
        currentSlide--;
    }
    showSlider();
}
//Verifica quando é clicado em next
nxtButton.addEventListener('click', nextSlider)
prvButton.addEventListener('click', prevSlider)