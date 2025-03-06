




document.getElementById('menuButton').addEventListener('click', function() {
            document.getElementById('menu').classList.toggle('hidden');
        });


        var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Padrão para mobile
    spaceBetween: 15, // Menor espaço para telas menores
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1024: { slidesPerView: 3},
        768: { slidesPerView: 2 },
        400: { slidesPerView: 1 } // Para telas menores que 480px
    }
});

      const slider = document.getElementById('slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;
    const items = slider.children;
    const totalItems = items.length;

    function updateSlider() {
    let offsetPercentage;

    if (window.innerWidth >= 1024) {
        offsetPercentage = 43; // Exemplo: 3 slides visíveis
    } else if (window.innerWidth >= 768) {
        offsetPercentage = 50; // Exemplo: 2 slides visíveis
    } else {function updateSlider() {
    let offsetPercentage;

    if (window.innerWidth >= 1024) {
        offsetPercentage = 33.33; // Exemplo: 3 slides visíveis
    } else if (window.innerWidth >= 768) {
        offsetPercentage = 50; // Exemplo: 2 slides visíveis
    } else {
        offsetPercentage = 80; // Padrão para telas menores
    }

    const offset = -currentIndex * offsetPercentage;
    slider.style.transform = `translateX(${offset}%)`;
}
        offsetPercentage = 80; // Padrão para telas menores
    }

    const offset = -currentIndex * offsetPercentage;
    slider.style.transform = `translateX(${offset}%)`;
}

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1; // Loop para o final
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1; // Loop para o início
        updateSlider();
    });


new SimpleAnime();
    