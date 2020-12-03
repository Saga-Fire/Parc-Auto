let car1 = new Voiture("CG169TP", "noir", 1200, 90, 50.0, 5);

//console.log(car1);
car1.setInsurance = true;
car1.repeindre("bleue");
car1.mettreEssence(45);
car1.seDeplacer(501, 45);
console.log(car1.toString());
// console.log(car1.repeindre.toString());
console.log(car1.getBoardMessage);
console.log(car1);

//console.log(car1.color + " " + car1.license);

// let fewlQuantity = 5.0;
// let insurance = false;
// let message = "";

// let input = null;
// let inputConverted = null;

/* do {
    input = prompt('Le véhicule est-il assuré?\nY/N');
    inputConverted = input.toUpperCase();
} while ((inputConverted !== "Y") && (inputConverted !== "N")); 

if ((inputConverted === "Y")) {
    insurance = true;
    console.log('véhicule assuré')
} else {
    console.log('Véhicule non assuré');
}; */