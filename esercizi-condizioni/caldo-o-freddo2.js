/*
  Caldo o freddo
  Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda.

  Esempio:
    Input: a = 10, b = -2, c = 31, d = 22, e = 15, f = -6, g = 7
    Output: giornata più calda = 31, giornata più fredda = -6

  http://www.imparareaprogrammare.it
*/
const a = 10;
const b = -2;
const c = 31;
const d = 22;
const e = 15;
const f = -6;
const g = 7;

var hot;
var cold;

if (a > b) {
    hot = a;
    cold = b;
} else {
    hot = b;
    cold = a;
}

if (c > hot) {
    hot = c;
} else if (c < cold) {
    cold = c;
}

if (d > hot) {
    hot = d;
} else if (d < cold) {
    cold = d;
}

if (e > hot) {
    hot = e;
} else if (e < cold) {
    cold = e;
}

if (f > hot) {
    hot = f;
} else if (f < cold) {
    cold = f;
}

if (g > hot) {
    hot = g;
} else if (g < cold) {
    cold = g;
}


console.log(`il giorno più caldo della settimana ha ${hot} gradi ed il giorno più freddo della settimana ha ${cold} gradi`);