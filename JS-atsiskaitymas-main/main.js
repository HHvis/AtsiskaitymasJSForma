let vardas = document.getElementById("vardas");
let pavarde = document.getElementById("pavarde");
let mokykla = document.getElementById("mokykla");
let miestas = document.getElementById("miestas");
let sritis = document.getElementById("sritis");

let registracija = document.getElementById("registruotis");
let spausdinti = document.getElementById("btn-list");

let list = document.getElementById("list");


registracija.addEventListener("click", function(){
    const notEmpty = str => !str.trim().length;
    
    if( notEmpty(vardas.value) ) {
        alert( "Uzpildykite forma" )
    } else if ( notEmpty(pavarde.value) ) {
        alert( "Uzpildykite forma" )
    } else if ( notEmpty(mokykla.value) ) {
        alert( "Uzpildykite forma" )
    } else if ( notEmpty(miestas.value) ) {
        alert( "Uzpildykite forma" )
    } else if(sritis.value == "--Pasirinkti--"){
        alert("Pasirinkite sritį");
    }
    else {
    list.innerHTML += "<li>" + vardas.value + " " + pavarde.value + ", " + mokykla.value + ", " + miestas.value + ", sritis: " + sritis.value + "</li>";
    }
});

spausdinti.addEventListener("click", function(){
    list.style.display = "block";
});