document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("formularz-zamowienia");
    form.addEventListener("submit", obsluzFormularz);

    pobierzLosowyCytat();
});

let czyFormularzWyslany = false;

function obsluzFormularz(event) {
    if (!czyFormularzWyslany) {
        event.preventDefault();

        const imieNazwisko = document.getElementById("imie-nazwisko").value;
        const email = document.getElementById("email").value;
        const adresDostawy = document.getElementById("adres-dostawy").value;
        const pieczywo = document.getElementById("pieczywo").value;
        const ilosc = document.getElementById("ilosc").value;
        const maka = document.querySelector("input[name='maka']:checked").value;

        const zamowienie = {
            "imie-nazwisko": imieNazwisko,
            "email": email,
            "adres-dostawy": adresDostawy,
            "pieczywo": pieczywo,
            "ilosc": ilosc,
            "maka": maka
        };

        wyswietlZamowienie(zamowienie);
    }
}

function wyswietlZamowienie(order) {
    let podsumowanie = `Podsumowanie zamówienia:\n${order["imie-nazwisko"]}\n${order.email}\n${order["adres-dostawy"]}\n${order.pieczywo} x ${order.ilosc}\nMąka: ${order.maka}`;
    alert(podsumowanie);

    czyFormularzWyslany = true;
    document.getElementById("formularz-zamowienia").submit();
}

function pobierzLosowyCytat() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            wyswietlCytat(data.content);
        })
        .catch(error => console.error('Error:', error));
}

function wyswietlCytat(cytat) {
    const container = document.querySelector('.container');

    const cytatParagraf = document.createElement('p');
    cytatParagraf.textContent = cytat;

    container.appendChild(cytatParagraf);
}