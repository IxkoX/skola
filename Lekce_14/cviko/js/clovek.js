'use strict';

class Clovek {

    constructor(jmeno){
        this.jmeno = jmeno;
    }

    pozdrav(){
        document.write(`Ahoj já jsem ${this.jmeno}.<br>`);
    }
}