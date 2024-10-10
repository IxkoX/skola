document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("form");
    console.log(form.childNodes);

    let odstavec = document.createElement("p");
    odstavec.textContent = "Odstavec 2";
    document.body.appendChild(odstavec);

    let odstavec2 = document.createElement("p");
    odstavec2.textContent = "Odstavec 3";
    document.body.appendChild(odstavec2);

    let nadpis = document.createElement("h1");
    nadpis.textContent = "Ahoj Plzeň";

    let elementPred = this.getElementById("prvni");
    document.body.insertBefore(nadpis, elementPred);

    //nahrazeni
    let novyodstavec = document.createElement("p");
    let tucny = document.createElement("strong");
    tucny.textContent = "tady již formulář není. Utekl nám :((((";
    tucny.style.color = "red";

    novyodstavec.appendChild(tucny);
    document.body.replaceChild(novyodstavec,form);

    //mazani
    odstavec.remove();
    prvni.remove();
    p.remove();

})