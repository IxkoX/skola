'use strict';

function nakresli() {
    const svg = document.getElementById('shape');

    // Vytvoření žlutého kruhu
    const yellowCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    yellowCircle.setAttribute("cx", "100");
    yellowCircle.setAttribute("cy", "100");
    yellowCircle.setAttribute("r", "80"); // Průměr 50 
    yellowCircle.setAttribute("fill", "yellow");

    // Oči (bílé kruhy)
    const eye1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    eye1.setAttribute("cx", "60");
    eye1.setAttribute("cy", "50");
    eye1.setAttribute("r", "20"); // Průměr 10
    eye1.setAttribute("fill", "white");

    const eye2 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    eye2.setAttribute("cx", "130");
    eye2.setAttribute("cy", "50");
    eye2.setAttribute("r", "20"); // Průměr 11
    eye2.setAttribute("fill", "white");

    // Pusa (obdélník)
    const mouth = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    mouth.setAttribute("x", "75");
    mouth.setAttribute("y", "130");
    mouth.setAttribute("width", "30");  // Šířka 20 
    mouth.setAttribute("height", "10");   // Výška 5 
    mouth.setAttribute("fill", "white");

    // Přidání elementů do SVG
    svg.appendChild(yellowCircle);
    svg.appendChild(eye1);
    svg.appendChild(eye2);
    svg.appendChild(mouth);
}



// Výpočet plochy

const yellowCircle = new Kruh(50);  // žlutý kruh v cm
const eye1 = new Kruh(11);          // jedno oko v cm
const eye2 = new Kruh(11);          // druhé oko v cm
const mouth = new Obdelnik(20, 5);   // pusa v cm

function vypoctiPlochu() {
    // Obsah žluté části
    const yellowArea = yellowCircle.ziskejPlochu() - (eye1.ziskejPlochu() + eye2.ziskejPlochu() + mouth.ziskejPlochu());

    // Zobrazení výsledku
    document.getElementById('vysledek').innerHTML = `Obsah žluté části: ${yellowArea.toFixed(2)} cm²`;
}

// Zavolej funkce po načtení stránky
window.onload = function () {
    nakresli();
    vypoctiPlochu();
};