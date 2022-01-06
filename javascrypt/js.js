
// AVAX 
function ubacivanjeKolicinaAvaxa() {
    let kolicinaAvax = document.getElementById("brojAvax").value;
    console.log(kolicinaAvax);
    return kolicinaAvax;
}

document.getElementById("avaxDugme").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("avax3").innerHTML = "kolicina avaxa je " + ubacivanjeKolicinaAvaxa();
});


// DOT
function ubacivanjeKolicineDot() {
    let kolicinaDot =  document.getElementById("brojDot").value;
    console.log(kolicinaDot);
    return kolicinaDot;
}
document.getElementById("dotDugme").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("kolicinaDot").innerHTML = "kolicina Polkadota je " + ubacivanjeKolicineDot();
});

// LINK 
function ubacivanjeKolicineLink() {
    let kolicinaLink =  document.getElementById("brojLink").value;
    console.log(kolicinaLink);
    return kolicinaLink;
}
document.getElementById("linkDugme").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("link2").innerHTML = "kolicina ChainLinka je " + ubacivanjeKolicineLink();
});

// GRAPH 
function ubacivanjeKolicineGraph() {
    let kolicinaGraph =  document.getElementById("brojGraph").value;
    console.log(kolicinaGraph);
    return kolicinaGraph;
}
document.getElementById("graphDugme").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("grahText").innerHTML = "kolicina Graph-a je " + ubacivanjeKolicineGraph();
});

// ERG
function ubacivanjeKolicineErg() {
    let kolicinaErgo = document.getElementById("brojEr").value;
    console.log(kolicinaErgo);
    return kolicinaErgo;
}

document.getElementById("dugme2").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("kolicinaErga").innerHTML = "kolicina Erga je " + ubacivanjeKolicineErg();
});



// BEAM
function ubacivanjeKolicineBeam() {
    let kolicinaBeam = document.getElementById("brojBe").value;
    console.log(kolicinaBeam);
    return kolicinaBeam;
}
document.getElementById("dugme3").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("kolicinaBeama").innerHTML = "kolicina Beama je " + ubacivanjeKolicineBeam();
});



// zadatak
// na ovoj stranici treba da stoji broj koji smo vec uneli i da imamo + koji kada pritisnemo mozemo da izmenimo vrednost koliko koina imamo
// ispod treba da bude izracunato koliko je to u $