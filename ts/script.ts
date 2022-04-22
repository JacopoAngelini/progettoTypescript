interface smartphone {
  carica: number;
  numeroChiamate: number;
}

class User implements smartphone {
  carica = 0;
  numeroChiamate = 0;

  constructor(carica: number, numeroChiamate: number) {
    this.carica = carica;
    this.numeroChiamate = numeroChiamate;
  }

  public ricarica(unaRicarica: number): void {
    if (unaRicarica > 0 && unaRicarica % 5 === 0) {
      this.carica = this.carica + unaRicarica;
      var spanSaldo = <HTMLElement>document.querySelector('.saldoFirst');
      spanSaldo.innerHTML = firstUser.carica.toFixed(2) + ' €';
      var spanSaldo = <HTMLElement>document.querySelector('.saldoSecond');
      spanSaldo.innerHTML = secondUser.carica.toFixed(2) + ' €';
      var spanSaldo = <HTMLElement>document.querySelector('.saldoThird');
      spanSaldo.innerHTML = thirdUser.carica.toFixed(2) + ' €';
    }
    else {
      alert('le ricariche sono disponibili solo in multipli di 5');
    }
  }
  public chiamata(): void {
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
      var spanSaldo = <HTMLElement>document.querySelector('.saldoFirst');
      spanSaldo.innerHTML = firstUser.carica.toFixed(2) + ' €';
      var spanSaldo_2 = <HTMLElement>document.querySelector('.saldoSecond');
      spanSaldo_2.innerHTML = secondUser.carica.toFixed(2) + ' €';
      var spanSaldo_3 = <HTMLElement>document.querySelector('.saldoThird');
      spanSaldo_3.innerHTML = thirdUser.carica.toFixed(2) + ' €';
    }

  }
  public numero404(): number {
    return this.carica;
  }
  public getNumeroChiamate(): number {
    return this.numeroChiamate;
  }
  public azzeraChiamate(): void {
    this.numeroChiamate = 0;
  }
}

var firstUser = new User(0.05, 0);
var secondUser = new User(10, 0);
var thirdUser = new User(0, 0);

/*CRONOMETRO FIRST USER*/

var h: number = 0;
var min: number = 0;
var sec: number = 0;
var durata: number;
var interval: any;
var cronometro = <HTMLElement>document.querySelector('.cronometroFirst');
cronometro.innerHTML = h + ':' + min + ':' + sec;

function start(): void {
  if (firstUser.carica > (0.20 / 60)) {
    firstUser.numeroChiamate++;
  }
  interval = setInterval(startINT, 1000);
  var spanNum = <HTMLElement>document.querySelector('.numeroChiamateFirst');
  spanNum.innerHTML = String(firstUser.numeroChiamate);
};

function startINT(): void {
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


function end(): void {
  h = 0;
  min = 0;
  sec = 0;
  clearInterval(interval);
  var spanSaldo = <HTMLElement>document.querySelector('.saldoFirst');
  spanSaldo.innerHTML = firstUser.carica.toFixed(2) + ' €';
}

/*CRONOMETRO SECOND USER*/


var h_2: number = 0;
var min_2: number = 0;
var sec_2: number = 0;
var durata_2: number;
var interval_2: any;
var cronometro_2 = <HTMLElement>document.querySelector('.cronometroSecond');
cronometro_2.innerHTML = h_2 + ':' + min_2 + ':' + sec_2;

function start_2(): void {
  if (secondUser.carica > (0.20 / 60)) {
    secondUser.numeroChiamate++;
  }
  interval = setInterval(startINT_2, 1000);
  var spanNum_2 = <HTMLElement>document.querySelector('.numeroChiamateSecond');
  spanNum_2.innerHTML = String(secondUser.numeroChiamate);
};

function startINT_2(): void {
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

function end_2(): void {
  h_2 = 0;
  min_2 = 0;
  sec_2 = 0;
  clearInterval(interval);
  var spanSaldo_2 = <HTMLElement>document.querySelector('.saldoSecond');
  spanSaldo_2.innerHTML = secondUser.carica.toFixed(2) + ' €';
}

/*CRONOMETRO THIRD USER*/

var h_3: number = 0;
var min_3: number = 0;
var sec_3: number = 0;
var durata_3: number;
var interval_3: any;
var cronometro_3 = <HTMLElement>document.querySelector('.cronometroThird');
cronometro_3.innerHTML = h_3 + ':' + min_3 + ':' + sec_3;

function start_3(): void {
  if (thirdUser.carica > (0.20 / 60)) {
    thirdUser.numeroChiamate++;
  }
  interval = setInterval(startINT_3, 1000);
  var spanNum_3 = <HTMLElement>document.querySelector('.numeroChiamateThird');
  spanNum_3.innerHTML = String(thirdUser.numeroChiamate);
};

function startINT_3(): void {
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


function end_3(): void {
  h_3 = 0;
  min_3 = 0;
  sec_3 = 0;
  clearInterval(interval);
  var spanSaldo_3 = <HTMLElement>document.querySelector('.saldoThird');
  spanSaldo_3.innerHTML = thirdUser.carica.toFixed(2) + ' €';
}


document.addEventListener('DOMContentLoaded', () => {
  /*FIRST USER*/
  var spanSaldo = <HTMLElement>document.querySelector('.saldoFirst');
  spanSaldo.innerHTML = firstUser.carica + ' €';

  var spanNum = <HTMLElement>document.querySelector('.numeroChiamateFirst');
  spanNum.innerHTML = String(firstUser.numeroChiamate);

  var importo = <HTMLInputElement>document.querySelector('.importo');

  document.querySelector('.bottoneRicarica') ?.addEventListener('click', () => {
    firstUser.ricarica(Number(importo.value));
  })

  document.querySelector('.bottoneAzzera') ?.addEventListener('click', () => {
    firstUser.numeroChiamate = 0;
    var spanNum = <HTMLElement>document.querySelector('.numeroChiamateFirst');
    spanNum.innerHTML = String(firstUser.numeroChiamate);
  })

  /*SECOND USER*/
  var spanSaldo = <HTMLElement>document.querySelector('.saldoSecond');
  spanSaldo.innerHTML = secondUser.carica + ' €';

  var spanNum = <HTMLElement>document.querySelector('.numeroChiamateSecond');
  spanNum.innerHTML = String(secondUser.numeroChiamate);

  var importo_2 = <HTMLInputElement>document.querySelector('.importo_2');

  document.querySelector('.bottoneRicarica_2') ?.addEventListener('click', () => {
    secondUser.ricarica(Number(importo_2.value));
    console.log(secondUser.carica);
  })

  document.querySelector('.bottoneAzzera_2') ?.addEventListener('click', () => {
    secondUser.numeroChiamate = 0;
    var spanNum = <HTMLElement>document.querySelector('.numeroChiamateSecond');
    spanNum.innerHTML = String(secondUser.numeroChiamate);
  })

  /*THIRD USER*/
  var spanSaldo_3 = <HTMLElement>document.querySelector('.saldoThird');
  spanSaldo_3.innerHTML = thirdUser.carica + ' €';

  var spanNum_3 = <HTMLElement>document.querySelector('.numeroChiamateThird');
  spanNum_3.innerHTML = String(thirdUser.numeroChiamate);

  var importo_3 = <HTMLInputElement>document.querySelector('.importo_3');

  document.querySelector('.bottoneRicarica_3') ?.addEventListener('click', () => {
    thirdUser.ricarica(Number(importo_3.value));
    console.log(thirdUser.carica);
  })

  document.querySelector('.bottoneAzzera_3') ?.addEventListener('click', () => {
    thirdUser.numeroChiamate = 0;
    var spanNum_3 = <HTMLElement>document.querySelector('.numeroChiamateThird');
    spanNum_3.innerHTML = String(thirdUser.numeroChiamate);
  })
});
