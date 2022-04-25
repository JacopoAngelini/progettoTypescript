"use strict";
alert('NOTE IMPORTANTI: \n ho dovuto caricare i file della cartella node modules a mano, quasi uno per uno, perchè github non ne voleva sapere di caricare più di 100 file per volta qiondi non vorrei qualcosa fosse andato storto e non funzionasse per questo motivo \nho aggiunto parecchia grafica e usato un timer invece che un campo di input per scalare i soldi e simulare una chiamata quindi alcuni metodi potrebbero essere un pochino differenti da quelli dati dalla consegna\ngrazie per la pazienza e buona giornata!')
class User {
    constructor(carica, numeroChiamate) {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
    }
    ricarica(unaRicarica) {
        if (unaRicarica > 0 && unaRicarica % 5 === 0) {
            this.carica = this.carica + unaRicarica;
            var spanSaldo = document.querySelector('.saldoFirst');
            spanSaldo.innerHTML = firstUser.carica.toFixed(2) + ' €';
            var spanSaldo = document.querySelector('.saldoSecond');
            spanSaldo.innerHTML = secondUser.carica.toFixed(2) + ' €';
            var spanSaldo = document.querySelector('.saldoThird');
            spanSaldo.innerHTML = thirdUser.carica.toFixed(2) + ' €';
        }
        else {
            alert('le ricariche sono disponibili solo in multipli di 5');
        }
    }
    chiamata() {
        var costoAlSecondo = (0.20 / 60);
        if (this.carica > costoAlSecondo) {
            costoAlSecondo = (0.20 / 60);
            this.carica = (this.carica - costoAlSecondo);
            this.carica = Number(this.carica);
            console.log(this.carica);
        }
        else {
            h = 0;
            min = 0;
            sec = 0;
            h_3 = 0;
            min_3 = 0;
            sec_3 = 0;
            h_2 = 0;
            min_2 = 0;
            sec_2 = 0;
            alert('hai esaurito il credito');
            clearInterval(interval);
            var spanSaldo = document.querySelector('.saldoFirst');
            spanSaldo.innerHTML = firstUser.carica.toFixed(2) + ' €';
            var spanSaldo_2 = document.querySelector('.saldoSecond');
            spanSaldo_2.innerHTML = secondUser.carica.toFixed(2) + ' €';
            var spanSaldo_3 = document.querySelector('.saldoThird');
            spanSaldo_3.innerHTML = thirdUser.carica.toFixed(2) + ' €';
        }
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
var firstUser = new User(0.05, 0);
var secondUser = new User(10, 0);
var thirdUser = new User(0, 0);
/*CRONOMETRO FIRST USER*/
var h = 0;
var min = 0;
var sec = 0;
var durata;
var interval;
var cronometro = document.querySelector('.cronometroFirst');
cronometro.innerHTML = h + ':' + min + ':' + sec;
function start() {
    if (firstUser.carica > (0.20 / 60)) {
        firstUser.numeroChiamate++;
    }
    interval = setInterval(startINT, 1000);
    var spanNum = document.querySelector('.numeroChiamateFirst');
    spanNum.innerHTML = String(firstUser.numeroChiamate);
}
;
function startINT() {
    durata = (h * 60) + (sec / 60) + min;
    firstUser.chiamata();
    if (firstUser.carica >= (0.20 / 60)) {
        if (sec < 59) {
            sec++;
            cronometro.innerHTML = h + ':' + min + ':' + sec;
        }
        else if (sec === 59) {
            sec = 0;
            min++;
            cronometro.innerHTML = h + ':' + min + ':' + sec;
        }
        if (min === 59) {
            min = 0;
            h++;
            cronometro.innerHTML = h + ':' + min + ':' + sec;
        }
    }
}
function end() {
    h = 0;
    min = 0;
    sec = 0;
    clearInterval(interval);
    var spanSaldo = document.querySelector('.saldoFirst');
    spanSaldo.innerHTML = firstUser.carica.toFixed(2) + ' €';
}
/*CRONOMETRO SECOND USER*/
var h_2 = 0;
var min_2 = 0;
var sec_2 = 0;
var durata_2;
var interval_2;
var cronometro_2 = document.querySelector('.cronometroSecond');
cronometro_2.innerHTML = h_2 + ':' + min_2 + ':' + sec_2;
function start_2() {
    if (secondUser.carica > (0.20 / 60)) {
        secondUser.numeroChiamate++;
    }
    interval = setInterval(startINT_2, 1000);
    var spanNum_2 = document.querySelector('.numeroChiamateSecond');
    spanNum_2.innerHTML = String(secondUser.numeroChiamate);
}
;
function startINT_2() {
    durata_2 = (h_2 * 60) + (sec_2 / 60) + min_2;
    secondUser.chiamata();
    if (secondUser.carica >= (0.20 / 60)) {
        if (sec_2 < 59) {
            sec_2++;
            cronometro_2.innerHTML = h_2 + ':' + min_2 + ':' + sec_2;
        }
        else if (sec_2 === 59) {
            sec_2 = 0;
            min_2++;
            cronometro_2.innerHTML = h_2 + ':' + min_2 + ':' + sec_2;
        }
        if (min_2 === 59) {
            min_2 = 0;
            h_2++;
            cronometro_2.innerHTML = h_2 + ':' + min_2 + ':' + sec_2;
        }
    }
}
function end_2() {
    h_2 = 0;
    min_2 = 0;
    sec_2 = 0;
    clearInterval(interval);
    var spanSaldo_2 = document.querySelector('.saldoSecond');
    spanSaldo_2.innerHTML = secondUser.carica.toFixed(2) + ' €';
}
/*CRONOMETRO THIRD USER*/
var h_3 = 0;
var min_3 = 0;
var sec_3 = 0;
var durata_3;
var interval_3;
var cronometro_3 = document.querySelector('.cronometroThird');
cronometro_3.innerHTML = h_3 + ':' + min_3 + ':' + sec_3;
function start_3() {
    if (thirdUser.carica > (0.20 / 60)) {
        thirdUser.numeroChiamate++;
    }
    interval = setInterval(startINT_3, 1000);
    var spanNum_3 = document.querySelector('.numeroChiamateThird');
    spanNum_3.innerHTML = String(thirdUser.numeroChiamate);
}
;
function startINT_3() {
    durata_3 = (h_3 * 60) + (sec_3 / 60) + min_3;
    thirdUser.chiamata();
    if (thirdUser.carica >= (0.20 / 60)) {
        if (sec_3 < 59) {
            sec_3++;
            cronometro_3.innerHTML = h_3 + ':' + min_3 + ':' + sec_3;
        }
        else if (sec_3 === 59) {
            sec_3 = 0;
            min_3++;
            cronometro_3.innerHTML = h_3 + ':' + min_3 + ':' + sec_3;
        }
        if (min_3 === 59) {
            min_3 = 0;
            h_3++;
            cronometro_3.innerHTML = h_3 + ':' + min_3 + ':' + sec_3;
        }
    }
}
function end_3() {
    h_3 = 0;
    min_3 = 0;
    sec_3 = 0;
    clearInterval(interval);
    var spanSaldo_3 = document.querySelector('.saldoThird');
    spanSaldo_3.innerHTML = thirdUser.carica.toFixed(2) + ' €';
}
document.addEventListener('DOMContentLoaded', () => {
    var _a, _b, _c, _d, _e, _f;
    /*FIRST USER*/
    var spanSaldo = document.querySelector('.saldoFirst');
    spanSaldo.innerHTML = firstUser.carica + ' €';
    var spanNum = document.querySelector('.numeroChiamateFirst');
    spanNum.innerHTML = String(firstUser.numeroChiamate);
    var importo = document.querySelector('.importo');
    (_a = document.querySelector('.bottoneRicarica')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        firstUser.ricarica(Number(importo.value));
    });
    (_b = document.querySelector('.bottoneAzzera')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
        firstUser.numeroChiamate = 0;
        var spanNum = document.querySelector('.numeroChiamateFirst');
        spanNum.innerHTML = String(firstUser.numeroChiamate);
    });
    /*SECOND USER*/
    var spanSaldo = document.querySelector('.saldoSecond');
    spanSaldo.innerHTML = secondUser.carica + ' €';
    var spanNum = document.querySelector('.numeroChiamateSecond');
    spanNum.innerHTML = String(secondUser.numeroChiamate);
    var importo_2 = document.querySelector('.importo_2');
    (_c = document.querySelector('.bottoneRicarica_2')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
        secondUser.ricarica(Number(importo_2.value));
        console.log(secondUser.carica);
    });
    (_d = document.querySelector('.bottoneAzzera_2')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => {
        secondUser.numeroChiamate = 0;
        var spanNum = document.querySelector('.numeroChiamateSecond');
        spanNum.innerHTML = String(secondUser.numeroChiamate);
    });
    /*THIRD USER*/
    var spanSaldo_3 = document.querySelector('.saldoThird');
    spanSaldo_3.innerHTML = thirdUser.carica + ' €';
    var spanNum_3 = document.querySelector('.numeroChiamateThird');
    spanNum_3.innerHTML = String(thirdUser.numeroChiamate);
    var importo_3 = document.querySelector('.importo_3');
    (_e = document.querySelector('.bottoneRicarica_3')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', () => {
        thirdUser.ricarica(Number(importo_3.value));
        console.log(thirdUser.carica);
    });
    (_f = document.querySelector('.bottoneAzzera_3')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', () => {
        thirdUser.numeroChiamate = 0;
        var spanNum_3 = document.querySelector('.numeroChiamateThird');
        spanNum_3.innerHTML = String(thirdUser.numeroChiamate);
    });
});
