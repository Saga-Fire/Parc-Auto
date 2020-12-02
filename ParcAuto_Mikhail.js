class Voiture{
    constructor(license, color, weight, power, tankCapacity, numberSeats) {
        this.license = license;
        this.color = color;
        this.weight = weight;
        this.power = power;
        this.tankCapacity = tankCapacity;
        this.numberSeats = numberSeats;
    };
    repeindre(newColor) {
        if ((newColor === this.color)) {
            console.log('La couleur est identique');
        } else {
            this.color = newColor;
            console.log('La nouvelle couleur est : ' + this.color);
        };
    };
    mettreEssence(addFewlQuantity) {
        if ((addFewlQuantity + fewlQuantity) <= this.tankCapacity) {
            fewlQuantity += addFewlQuantity;
            console.log('la nouvelle quantité d\'essence est de ' + fewlQuantity + 'L');
        } else {
            console.log('Réservoir d\'essence insuffisant : opération annulée');
        };
    };
    seDeplacer(distanceTravel, averageSpeed) {
        let fewlTrip = this.fewlConsumption(distanceTravel, averageSpeed);
        console.log(fewlTrip);
        if (fewlQuantity >= fewlTrip) {
            console.log('Trajet authorisé, ' + fewlTrip + 'L d\'essence sera consommé durant le trajet');
        } else {
            console.log('Trajet refusé, pas assez d\'essence dans le réservoir')
        };
    };
    fewlConsumption(distanceTravel, averageSpeed) { 
        if ((averageSpeed < 50)) {
            return ((distanceTravel * 10) / 100);
        } else if ((averageSpeed >= 50) && (averageSpeed < 90)) {
            return ((distanceTravel * 5) / 100);
        } else if ((averageSpeed >= 90) && (averageSpeed < 130)) {
            return ((distanceTravel * 9) / 100);
        } else {
            return ((distanceTravel * 12) / 100);
        };
    };
    toString() {
        return `Véhicule immatriculé ${this.license} d'une puissance de ${this.power} chevaux et de couleur ${this.color}`;
    };
};

let car1 = new Voiture("CG169TP", "noir", 1200, 90, 50.0, 5);
let fewlQuantity = 5.0;
let insurance = false;
let message = "";

let input = null;
let inputConverted = null;

/* do {
    input = prompt('Le véhicule est-il assuré?\nY/N');
    inputConverted = input.toUpperCase();
} while ((inputConverted !== "Y") && (inputConverted !== "N")); */

if ((inputConverted === "Y")) {
    insurance = true;
    console.log('véhicule assuré')
} else {
    console.log('Véhicule non assuré');
};
console.log(car1);
car1.repeindre("bleu");
console.log(car1);
car1.mettreEssence(45);
car1.seDeplacer(500, 45);
console.log(car1.toString());