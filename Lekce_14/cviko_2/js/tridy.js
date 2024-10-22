'use strict';



class Kruh {
    constructor(polomer) {
        this.polomer = polomer / 2;
    }
    ziskejPlochu() {
        return Math.PI * Math.pow(this.polomer, 2);
    }
}

class Obdelnik {
    constructor(sirka, vyska) {
        this.sirka = sirka;
        this.vyska = vyska;
    }
    ziskejPlochu() {
        return this.sirka * this.vyska;
    }
}