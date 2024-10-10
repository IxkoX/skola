let dnyVTydnu = ["po", "út", "st", "čt", "pá", "so", "ne"];

function vytvorKalendar() {
    let tabulka = document.createElement("table");
    tabulka.appendChild(pripravhlavicku());
    let tr = document.createElement("tr");
    let obsahTabulky = document.createElement("tbody");
    tabulka.appendChild(obsahTabulky);

    let dnes = new Date();
    let aktualniRok = dnes.getFullYear();
    let aktualniMesic = dnes.getMonth();
    let prvniDenVMesici = new Date(aktualniRok, aktualniMesic, 1);

    // přeskakujeme dny v prvním týdnu měsíci (1.10.24 je uterý - pondělí by tedy měl vynechat)
    let den = prvniDenVMesici.getDay();
    if (den == 0) {
        den = 7;
    }
    let preskocitDniVPredchozimMesici = den - 1;
    let pocetDniVMesici = new Date(aktualniRok, aktualniMesic + 1, 0).getDate();
    let pocetGenerovanychBunek = pocetDniVMesici + preskocitDniVPredchozimMesici; //počet generovaných buňek

    for (let i = 0; i < pocetGenerovanychBunek; i++) {
        let td = document.createElement("td");
        //první zkrácený týden
        if (i >= preskocitDniVPredchozimMesici) {
            td.textContent = i - preskocitDniVPredchozimMesici + 1;
        }
        tr.appendChild(td);

        //generovat nový týden
        if ((i + 1) % 7 == 0) {
            obsahTabulky.appendChild(tr);
            tr = document.createElement("tr");
        }
    }
    // zbytek měsíce doplníme buňky
    for (i = 0; i < 7 - (pocetGenerovanychBunek % 7); i++) {
        tr.appendChild(document.createElement("td"));

    }
    obsahTabulky.appendChild(tr);
    document.body.appendChild(tabulka);

}

function pripravhlavicku() {
    let hlavicka = document.createElement("thead");
    let tr = document.createElement("tr");
    for (let i = 0; i < dnyVTydnu.length; i++) {
        let td = document.createElement("td");
        td.innerHTML = dnyVTydnu[i];
        tr.appendChild(td);
    }
    hlavicka.appendChild(tr);
    return hlavicka;
}

window.onload = vytvorKalendar;
