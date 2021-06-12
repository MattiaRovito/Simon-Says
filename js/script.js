//TODO STEP 1 Un alert() espone 5 numeri generati casualmente.

//TODO STEP 2 Dopo che l'utente ha cliccato ok sull'alert, ha 30 secondi per tenerseli a mente.  

//TODO STEP 3 Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

//TODO STEP 4 Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



//* Generiamo un alert con 5 numeri casuali univoci
var generatorePC = [];

while(generatorePC.length < 5){
    var random = Math.floor(Math.random() * 100) + 1;
    if(generatorePC.indexOf(random) === -1) generatorePC.push(random);
}
alert('Ricorda bene questi numeri: ' + generatorePC);




//* Impostiamo il setTimeout che fa partire 5 prompt dopo 30 secondi dal click dell'alert.

var numeriUtente;
var arrayUtente = [];

setTimeout(numeri, 30000);

function numeri(){
    for (var i = 0; i < 5; i++){
        var numeriUtente= parseInt(prompt('Inserire i numeri visti precedentemente!'));

        if (generatorePC.includes(numeriUtente)){
            arrayUtente.push(numeriUtente);
            document.getElementById('vincenti').innerHTML = 'I numeri ' + numeriUtente + ' sono giusti!';
        }  else{
            document.getElementById('perdenti').innerHTML = 'I numeri ' + numeriUtente + ' non sono giusti!';
        }
        document.getElementById('totale').innerHTML = 'I numeri indovinati sono... ' + arrayUtente.length;
    }
}






//TODO STEP BONUS controllare che i numeri generati casualmente siano univoci (non ci siano doppioni) ed anche i numeri che l'utente inserisce non devono già essere stati scritti precedentemente.