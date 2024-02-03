/**
 * Główna funkcja inicjująca działanie skryptu po załadowaniu całego dokumentu.
 * Dodaje nasłuchiwacze zdarzeń do formularza oraz przycisku menu burger.
 */
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("formularz-zamowienia");
    form.addEventListener("submit", obsluzFormularz);

    pobierzLosowyCytat();
});

/**
 * Obsługuje zdarzenie wysyłania formularza, zbierając dane z formularza
 * i wyświetlając powiadomienie z imieniem użytkownika.
 * @event
 */
function obsluzFormularz() {
    const imie = document.getElementById("imie").value;
    const nazwisko = document.getElementById("nazwisko").value;
    const email = document.getElementById("email").value;
    const telefon = document.getElementById("telefon").value;
    const miasto = document.getElementById("miasto").value;
    const kodPocztowy = document.getElementById("kod-pocztowy").value;
    const ulica = document.getElementById("ulica").value;
    const numer = document.getElementById("nr-budynku").value;
    const pieczywo = document.getElementById("pieczywo").value;
    const ilosc = document.getElementById("ilosc").value;
    const maka = document.querySelector("input[name='maka']:checked").value;


    //json
    const zamowienie = {
        "imie": imie,
        "nazwisko": nazwisko,
        "email": email,
        "telefon": telefon,
        "miasto": miasto,
        "kodPocztowy": kodPocztowy,
        "ulica": ulica,
        "numer": numer,
        "pieczywo": pieczywo,
        "ilosc": ilosc,
        "maka": maka
    };

    alert("Dziękujemy za złożenie zamówienia, " + zamowienie.imie + "!");
}

/**
 * Wywołuje asynchroniczne żądanie HTTP do API w celu pobrania losowego cytatu
 * i wyświetlenia go na stronie.
 */
function pobierzLosowyCytat() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            wyswietlCytat(data.content);
        })
        .catch(error => console.error('Error:', error));
}

/**
 * Wyświetla pobrany cytat w kontenerze na stronie.
 * @param {string} cytat - Tekst cytatu do wyświetlenia.
 */
function wyswietlCytat(cytat) {
    const container = document.querySelector('.container');

    const cytatParagraf = document.createElement('p');
    cytatParagraf.textContent = cytat;

    container.appendChild(cytatParagraf);
}