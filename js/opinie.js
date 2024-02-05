document.addEventListener('DOMContentLoaded', function () {
    for (let i = 0; i < 3; i++) {
        pobierzLosowyCytat();
    }
});

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
    cytatParagraf.style.fontStyle = "italic";
    cytatParagraf.style.borderTopColor = "black";
    cytatParagraf.style.borderTopWidth = "1px";
    cytatParagraf.style.borderTopStyle = "dashed";
    cytatParagraf.textContent = cytat;

    container.appendChild(cytatParagraf);
}