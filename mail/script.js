// Mail
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (createvi una piccola lista di email),
// stampa un messaggio appropriato sull’esito del controllo.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// lista mail autorizzate (array)
const authorizedEmails = [
    'berna@lol.com',
    'gino@lol.com',
    'marcellino@lol.com',
    'ginello@lol.com',
    'pino@lol.com',
    'matteo@lol.com',
    'valeria@lol.com',
    'franci@lol.com',
    'ricca@lol.com',
    'michele@lol.com',
];

function verifyEmail() {
    // collegamento input
    const userInput = document.getElementById('emailInput').ariaValueMax;
    // verifica se l'email è autorizzata
    if (authorizedEmails.includes(userInput)) {
        alert('Your email is authorized to access');
    } else {
        alert('YOU SHALL NOT PASS');
    }
}