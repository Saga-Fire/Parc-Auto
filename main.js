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
        this.boardMessage = `Bienvenue`;
    };

    set setInsurance(value) {
        this.insurance = value;
        this.boardMessage = `${this.boardMessage}Vous avez assuré le véhicule`;
    };

    get getBoardMessage() {
        return this.boardMessage;
    }

    repeindre(newColor) {
        if ((newColor === this.color)) {
            this.boardMessage = `Le véhicule est déjà de cette couleur`;
            return true;
        } else {
            this.color = newColor;
            this.boardMessage = `Vous avez repeint le véhicul en ${this.color}`;
            return false;
        };
    };

    mettreEssence(addFewlQuantity) {
        if ((addFewlQuantity + this.fewlQuantity) <= this.tankCapacity) {
            this.fewlQuantity += addFewlQuantity;
            this.boardMessage = `Vous avez ajoué ${this.fewlQuantity}L d'essence`;
            return this.fewlQuantity;
        } else {
            this.boardMessage = `Réservoir d'essence insuffisant : opération annulée`;
            return this.fewlQuantity;
        };
    };

    seDeplacer(distanceTravel, averageSpeed) {
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

