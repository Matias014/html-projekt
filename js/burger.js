/**
 * Obsługuje działanie menu typu "burger".
 * 
 * Po załadowaniu całego dokumentu DOM, skrypt szuka elementów DOM odpowiedzialnych za
 * burger-menu (przycisk menu) oraz za listę linków w menu. Następnie dodaje słuchacza
 * zdarzeń do przycisku menu burger, który po kliknięciu zmienia klasę CSS linków,
 * powodując ich ukazanie się lub ukrycie.
 * 
 */
document.addEventListener('DOMContentLoaded', function () {
    // Znajduje selektor burger-menu w dokumencie css
    const burgerMenu = document.querySelector('.burger-menu');
    // Znajduje selektor kontenera z linkami menu w dokumencie css
    const linki = document.querySelector('.linki');

    // Dodaje słuchacza zdarzeń do przycisku menu burger, który przełącza klasę 'active'
    // na kontenerze z linkami, powodując ich pokazanie lub ukrycie.
    burgerMenu.addEventListener('click', function () {
        linki.classList.toggle('active');
    });

    window.addEventListener('resize', function () {
        // Sprawdza, czy szerokość okna jest większa niż 712px i czy burger-menu jest włączone.
        // Jeżeli oba warunki są spełnione, to wyłacza burger-menu, żeby po ponownym włączeniu widoku mobilnego menu nie było otwarte
        if (window.innerWidth > 712 && linki.classList.contains('active')) {
            linki.classList.remove('active');
        }
    });
});