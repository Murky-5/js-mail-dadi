/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve? 
*/


/*
1 - genero con una funzione un numero randomico da uno a sei e lo salvo in una variabile di nome PlayerVsCpu
  - eseguo lo stesso procedimento aggiungendolo alla stessa variabile, in successione alla prima.
2 - una volta ottenuti i numeri, chiedo con un confronto di verificare se il primo numero sia maggiore del primo
  - nel caso lo sia annuncerò che il Player ha sconfitto la CPU
  - in caso non lo sia annuncerò che la CPU ha sconfitto il Player
*/


const PlayerVsCpu = [];
PlayerVsCpu[0] = Math.floor(Math.random() * 6);
PlayerVsCpu[1] = Math.floor(Math.random() * 6);

if (PlayerVsCpu[0] > PlayerVsCpu[1]) {
    alert("il Player ha sconfitto la CPU! (circa)")
}
else if (PlayerVsCpu[0] < PlayerVsCpu[1]){
    alert("la CPU ha sconfitto il Player (più o meno)")
}
else {
    alert("ccccomeee un pareggio!!!")
}