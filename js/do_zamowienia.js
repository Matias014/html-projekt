document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("formularz-zamowienia");
    form.addEventListener("submit", obsluzFormularz);

    pobierzLosowyCytat();
});

function obsluzFormularz() {
    const imie = document.getElementById("imie").value;
    const nazwisko = document.getElementById("nazwisko").value;
    const email = document.getElementById("email").value;
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
        "miasto": miasto,
        "kodPocztowy": kodPocztowy,
        "ulica": ulica,
        "numer": numer,
        "pieczywo": pieczywo,
        "ilosc": ilosc,
        "maka": maka
    };

    //przetworzenie formularza
    wyswietlZamowienie(zamowienie);
}

function wyswietlZamowienie(order) {
    let podsumowanie = `Podsumowanie zamówienia:\n${JSON.stringify(order, null, 2)}`;
    alert(podsumowanie);
}

//Aplikacja wykorzystuje proste wywołanie asynchroniczne w JavaScript.
function pobierzLosowyCytat() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            wyswietlCytat(data.content);
        })
        .catch(error => console.error('Error:', error));
}

//wykorzystanie DOM
function wyswietlCytat(cytat) {
    const container = document.querySelector('.container');

    const cytatParagraf = document.createElement('p');
    cytatParagraf.textContent = cytat;

    container.appendChild(cytatParagraf);
}