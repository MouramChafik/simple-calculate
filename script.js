let firstValue = parseInt(prompt("Entrez la première valeur :"));
let operator = prompt("Entrez l'opération (+, -, *, /) :");
let secondeValue = parseInt(prompt("Entrez la deuxième valeur :"));
let result = 0;

console.log("Bonjour !");

if (operator === "+") {
    result = firstValue + secondeValue;
} else if (operator === "-") {
    result = firstValue - secondeValue;
} else if (operator === "*") {
    result = firstValue * secondeValue;
} else if (operator === "/") {
    if (secondeValue === 0) {
        console.log("Erreur : division par zéro !");
    } else {
        result = firstValue / secondeValue;
    }
} else {
    console.log("Opération non reconnue.");
}

console.log("Le résultat est : " + result);
