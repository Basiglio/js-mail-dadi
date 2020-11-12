// Gioco dei dadi
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// numero pc
var pcNumber = parseInt(Math.floor(Math.random() * 6) + 1);
console.log(pcNumber);
// numero utente
var userNumber = parseInt(Math.floor(Math.random() * 6) + 1);
console.log(userNumber);

// stabilisco il vincitore
if (pcNumber < userNumber) {
  alert("hai vinto")
} else if (pcNumber = userNumber) {
  alert("pareggio")
} else  {
  alert("hai perso")
}

// stampo il vincitore
document.getElementById('pc_number').innerHTML = pcNumber;
document.getElementById('user_number').innerHTML = userNumber;
