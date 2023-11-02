let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = n;
    slides[currentSlide].style.display = 'block';

    // Desabilitar o botão "Anterior" na primeira imagem
    if (currentSlide === 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }

    // Desabilitar o botão "Próximo" na última imagem
    if (currentSlide === slides.length - 1) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}

// Função para avançar e retroceder os slides
function nextSlide() {
    if (currentSlide < slides.length - 1) {
        showSlide(currentSlide + 1);
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        showSlide(currentSlide - 1);
    }
}

// Inicie o slider mostrando o primeiro slide
showSlide(currentSlide);

// Adicione eventos de clique para os botões de navegação
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
