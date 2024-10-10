document.addEventListener("DOMContentLoaded", function () {
    let tlacitko = document.getElementById("tlacitko");
    let zaklad = document.getElementById("zaklad");
    let exp = document.getElementById("exp");
    let vysledek = document.getElementById("vysledek");

    tlacitko.addEventListener("click", function () {
        let zakladValue = parseFloat(zaklad.value);
        let expValue = parseFloat(exp.value);

        // Kontrola, zda jsou obě hodnoty validní čísla
        if (isNaN(zakladValue) || isNaN(expValue)) {
            vysledek.textContent = "Chyba: Zadejte platná čísla.";
            return;
        }

        // Kontrola příliš velkých exponentů
        if (!isFinite(Math.pow(zakladValue, expValue))) {
            vysledek.textContent = "Chyba: Výsledek je příliš velký.";
            return;
        }

        let mocnina = Math.pow(zakladValue, expValue);
        vysledek.textContent = "Výsledek: " + mocnina;
    });
});
