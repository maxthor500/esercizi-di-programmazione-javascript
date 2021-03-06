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

cold = Math.min(a, b, c, d, e, f, g);

hot = Math.max(a, b, c, d, e, f, g);


console.log(`il giorno più caldo della settimana ha ${hot} gradi ed il giorno più freddo della settimana ha ${cold} gradi`);