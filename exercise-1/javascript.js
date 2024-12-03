/* Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email.
NON POTETE UTILIZZARE NESSUN METODO COME:
- includes
- indexOf
- find
- search
- ecc... 
*/

/*
1 - chiedo l'email all'utente e la salvo
2 - verifico SE l'email inserita corrisponde ad almeno una di quelle già presenti nella lista
  - SE si può proseguire nel party
  - ALTRIMENTI gli chiedo di riprovare con una mail diversa
*/

const listInvited = ["cancheabbaiacodanonmorde@gmail.com", "iginomassarifanbase@outlook.ka", "GIANPASQUALE96@GMAIL.com"]
const userMail = prompt("Inserisci l'email con cui ti sei registrato")

for (let i = 0 ; i <= listInvited.length; i++) {
    if (listInvited[i].toLowerCase() === userMail.toLowerCase()){
        alert("Sei registrato, prosegui.")
    }
}

