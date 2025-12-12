document.addEventListener('DOMContentLoaded', function () {
    // 1. Elemek kiválasztása
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const nextButton = document.querySelector('.next-btn');
    const prevButton = document.querySelector('.prev-btn');

    if (!track || slides.length === 0 || !nextButton || !prevButton) {
        console.error("A carousel elemek nem találhatók meg a DOM-ban.");
        return; 
    }

    // 2. Változók beállítása
    const slideWidth = slides[0].getBoundingClientRect().width;
    let currentSlideIndex = 0;
    const totalSlides = slides.length;

    // 3. A track kezdeti pozíciójának beállítása (biztos, hogy az első slide látszik)
    const setTrackPosition = () => {
        // Áttolja a track-et a bal oldali széltől: (aktuális index * slide szélessége)
        const newTransformValue = -currentSlideIndex * slideWidth;
        track.style.transform = 'translateX(' + newTransformValue + 'px)';
    };

    // 4. Eseménykezelők a gombokra

    // Következő gomb
    nextButton.addEventListener('click', () => {
        // Ha nem az utolsó képen vagyunk, lépünk egyet előre
        if (currentSlideIndex < totalSlides - 1) {
            currentSlideIndex++;
        } else {
            // Ha az utolsó képen vagyunk, ugrunk vissza az elsőre (ciklikusság)
            currentSlideIndex = 0;
        }
        setTrackPosition();
    });

    // Előző gomb
    prevButton.addEventListener('click', () => {
        // Ha nem az első képen vagyunk, lépünk egyet hátra
        if (currentSlideIndex > 0) {
            currentSlideIndex--;
        } else {
            // Ha az első képen vagyunk, ugrunk az utolsóra (ciklikusság)
            currentSlideIndex = totalSlides - 1;
        }
        setTrackPosition();
    });

    // Kezdeti megjelenítés beállítása (a funkció futtatása betöltéskor)
    setTrackPosition();
});