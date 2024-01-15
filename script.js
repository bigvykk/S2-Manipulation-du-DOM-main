const panier = {
    pommes : 0,
    poires : 0,
    prunes : 0
}
const poids = {
    pommes: 0,
    poires: 0,
    prunes: 0
}
const prix = {
    pommes: 0,
    poires: 0,
    prunes: 0
}
// Pour afficher le nombre de pommes dans la facture détaillée
document.getElementById("qtePommes").textContent = panier.pommes;
function ajouterPommes(){
    panier.pommes ++
    document.querySelector("#qtePommes").textContent = panier.pommes;

    poids.pommes += 10
    document.querySelector("#poidsPommes").textContent = poids.pommes;

    prix.pommes += 13.50
    document.querySelector("#prixPommes").textContent = prix.pommes;

    totalqte()
    totalPoids()
    totalPrix()
}
function ajouterPoires(){
    panier.poires ++
    document.querySelector("#qtePoires").textContent = panier.poires;

    poids.poires += 12
    document.querySelector("#poidsPoires").textContent = poids.poires;

    prix.poires += 20
    document.querySelector("#prixPoires").textContent = prix.poires;

    totalqte()
    totalPoids()
    totalPrix()
}
function ajouterPrunes(){
    panier.prunes ++
    document.querySelector("#qtePrunes").textContent = panier.prunes;

    poids.prunes += 15
    document.querySelector("#poidsPrunes").textContent = poids.prunes;

    prix.prunes += 22
    document.querySelector("#prixPrunes").textContent = prix.prunes;

    totalqte()
    totalPoids()
    totalPrix()
}

function totalqte()  {
    document.querySelector("#qteTotal").textContent = panier.prunes + panier.poires + panier.pommes;
}
function totalPoids() {
    document.querySelector("#poidsTotal").textContent = poids.prunes + poids.poires + poids.pommes;
}
function totalPrix() {
    document.querySelector("#prixTotal").textContent = prix.prunes + prix.poires + prix.pommes;
}