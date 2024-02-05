let tablicaZamowien = []; //do przechowania zamówień
let i = 0; //do iteracji

/**
 * Główna funkcja inicjująca działanie skryptu po załadowaniu całego dokumentu.
 * Dodaje nasłuchiwacze zdarzeń do formularza oraz przycisku menu burger.
 */
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("formularz-zamowienia");
    form.addEventListener("submit", obsluzFormularz);
});

/**
 * Obsługuje zdarzenie wysyłania formularza, zbierając dane z formularza
 * i wyświetlając powiadomienie z imieniem użytkownika.
 * @event
 */
function obsluzFormularz(e) {
    e.preventDefault();

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

    tablicaZamowien.push(zamowienie);

    dodajZamowienieDoTabeli();

    alert("Dziękujemy za złożenie zamówienia, " + zamowienie.imie + "!");
}

function dodajZamowienieDoTabeli() {
    const tabela = document.getElementById("tabela-zamowien").getElementsByTagName('tbody')[0];

    const wiersz = tabela.insertRow();
    const imieKomorka = wiersz.insertCell(0);
    const nazwiskoKomorka = wiersz.insertCell(1);
    const pieczywoKomorka = wiersz.insertCell(2);
    const iloscKomorka = wiersz.insertCell(3);

    imieKomorka.innerHTML = tablicaZamowien[i].imie;
    nazwiskoKomorka.innerHTML = tablicaZamowien[i].nazwisko;
    pieczywoKomorka.innerHTML = tablicaZamowien[i].pieczywo;
    iloscKomorka.innerHTML = tablicaZamowien[i].ilosc;
    
    i++;
}