document.addEventListener("DOMContentLoaded", () => {
    // Trova tutti gli elementi con l'attributo data-partial
    const elements = document.querySelectorAll("[data-partial]");

    elements.forEach(el => {
        const file = el.getAttribute("data-partial");

        fetch(file)
            .then(response => response.text())
            .then(html => {
                el.innerHTML = html;
            })
            .catch(error => console.error(`Errore nel caricamento di ${file}:`, error));
    });
});
