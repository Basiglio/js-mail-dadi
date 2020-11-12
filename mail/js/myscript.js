// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

// chiedo all'utente l'email
var mailUtente = prompt("inserisci la tua eMail!");
console.log(mailUtente);

// creo il mio array
var elencoMail = ["emilio@mail.com", "pippo@mail.com", "pluto@mail.com", "paperino@mail.com", "topolino@mail.com"];


var result = false;

for (var i = 0; i < elencoMail.length; i++) {
  if (mailUtente == elencoMail[i]) {
   result = true;
  }
}

if (result === true) {
  alert("ACCESSO CONSENTITO");
} else {
  alert("ACCESSO NON CONSENTITO");
}
