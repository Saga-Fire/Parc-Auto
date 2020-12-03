class Voiture{
    constructor(license, color, weight, power, tankCapacity, numberSeats) {
        this.license = license;
        this.color = color;
        this.weight = weight;
        this.power = power;
        this.tankCapacity = tankCapacity;
        this.numberSeats = numberSeats;
        this.fewlQuantity = 5;
        this.insurance = false;
        this.boardMessage = `Bienvenue dans le véhicule d'immatriculation ${this.license}`;
    };

    set setInsurance(value) {
        if (value === true) {
            this.insurance = value;
            this.boardMessage = `Le véhicule ${this.license} est assuré`;
        } else if (value === false) {
            this.insurance = value;
            this.boardMessage = `Le véhicule ${this.license} n'est pas assuré`;
        } else {
            throw `Veuillez utilisé un bouléen pour modifier l'assurance du vuhécule ${this.license}`;
        };
    };

    get getBoardMessage() {
        return this.boardMessage;
    }

    repeindre(newColor) {
        if ((newColor === this.color)) {
            this.boardMessage = `Le véhicule ${this.license} est déjà de cette couleur`;
            return this.boardMessage;
        } else {
            this.color = newColor;
            this.boardMessage = `Vous avez repeint le véhicule ${this.license} en ${this.color}`;
            return this.boardMessage;
        };
    };

    mettreEssence(addFewlQuantity) {
        if (addFewlQuantity <= 0) {
            throw `La valeur doit être strictement positif pour ajouter de l'essence au véhicule ${this.license}`;
        };
        if ((addFewlQuantity + this.fewlQuantity) <= this.tankCapacity) {
            this.fewlQuantity += addFewlQuantity;
            this.boardMessage = `Vous avez ajouté ${addFewlQuantity}L d'essence au véhicule ${this.license}`;
            return `Il y a ${this.fewlQuantity}L d'essence dans le véhicule ${this.license}`;
        } else {
            this.boardMessage = `Réservoir d'essence du véhicule ${this.license} insuffisant : opération annulée`;
            return `Il y a ${this.fewlQuantity}L d'essence dans le véhicule ${this.license}`;
        };
    };

    seDeplacer(distanceTravel, averageSpeed) {
        if ((distanceTravel <= 0) || (averageSpeed <= 0)) {
            throw `Vous ne pouvez pas deplacer le véhicule ${this.license} avec une vitesse moyenne ou une distance négative ou nulle`;
        };
        if (averageSpeed >= 170) {
            throw `Retrait de permis possible`;
        };
        if (!this.insurance){
            throw `Vous ne pouvez pas déplacer le véhicule ${this.license} sans assurance`;
        };
        let fewlTrip = this.fewlConsumption(distanceTravel, averageSpeed);
        if (this.fewlQuantity >= fewlTrip) {
            this.boardMessage = `Trajet authorisé, ${fewlTrip}L d'essence sera consommé durant le trajet`;
        } else {
            this.boardMessage = `Trajet refusé, pas assez d'essence dans le réservoir`;
        };
    };

    fewlConsumption(distanceTravel, averageSpeed) { 
        if ((averageSpeed <= 50)) {
            return (distanceTravel * 0.1);
        } else if ((averageSpeed > 50) && (averageSpeed <= 90)) {
            return (distanceTravel * 0.05);
        } else if ((averageSpeed > 90) && (averageSpeed <= 130)) {
            return (distanceTravel * 0.09);
        } else {
            return (distanceTravel * 0.12);
        };
    };

    toString() {
        return `Véhicule immatriculé ${this.license} d'une puissance de ${this.power} chevaux et de couleur ${this.color}`;
    };
};

