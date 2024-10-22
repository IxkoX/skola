class RozpoznavacObdobi {
    constructor() {
        this.jaro = "Astronomické jaro začíná zpravidla 21. března a končí 21. června.";
        this.leto = "Astronomické léto začíná zpravidla 21. června a končí 23. září.";
        this.podzim = "Astronomický podzim začíná zpravidla 23. září a končí 21. prosince.";
        this.zima = "Astronomická zima začíná zpravidla 21. prosince a končí 21. března.";
    }

    zjisti() {
        const today = new Date();
        const month = today.getMonth() + 1; // Měsíce jsou indexovány od 0
        const day = today.getDate();

        let seasonDescription = '';

        // Určení ročního období na základě měsíce a dne
        if ((month === 3 && day >= 21) || (month < 6) || (month === 6 && day < 21)) {
            seasonDescription = this.jaro;
        } else if ((month === 6 && day >= 21) || (month < 9) || (month === 9 && day < 23)) {
            seasonDescription = this.leto;
        } else if ((month === 9 && day >= 23) || (month < 12) || (month === 12 && day < 21)) {
            seasonDescription = this.podzim;
        } else {
            seasonDescription = this.zima;
        }

        // Vypsání výsledku na stránku
        const outputElement = document.getElementById('vysledek');
        outputElement.innerHTML = `${seasonDescription}`;
    }
}
