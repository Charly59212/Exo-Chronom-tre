// Make it count up on a timer, calling this function
var seconds = document.getElementById("seconds");  //variable de la span secondes
var startTime = new Date().getTime();   //heure de démarrage du chrono
let finChrono;  // Définition de l'ntervalle du chrono

var countUp = function() {  //Définition de la fonction
    var currTime = new Date().getTime();   //Variable temps depuis le démarrage de la boucle
    var secondsBis = Math.floor((currTime - startTime)/1000);  //Calcul du temps de démarrage avec arrondi
    seconds.innerHTML = secondsBis;   //Ecriture du temps dans la span
    finChrono = setTimeout(countUp, 1000);   //Temps interval du timer
    };
    

// How can you make it stop counting?
var stopCountUp = function() {   //Définition de la fonction
    clearTimeout(finChrono);   //Met fin à l'intervalle du chrono
};
var stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopCountUp);

finChrono = setTimeout(countUp, 1000);  //Appel de l'intervalla initial pour la fin de chrono
