// ? JS-SIMON

/* Generare 5 numeri casuali e mostrarli in un alert all'utente.
Dall'ok  parte un timer di 30 secondi. (ricordate che l'alert blocca il flusso. il timer partirĂ  a contare dopo che avete schiacciato ok.)
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri  sono stati indovinati dall'utente.
Bonus:
controllare che i numeri casuali siano diversi tra loro
controllare che l'utente non inserisca 2 volte lo stesso numero */

// ! Funzione per numeri random e creo ciclo per generare massimo 5 numeri random (PUNTO 1)

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let number = 0;
let arrayNumbers = [];

for (let i = 0; i < 5; i++) {
    number = getRandomNumber(1, 80);
    arrayNumbers.push(number);

}

console.log(arrayNumbers)

// ! Mostro i numeri con un' alert (PUNTO 2)


const numberElement = alert(`I 5 numeri che dovrai ricordare sono ${arrayNumbers}`);