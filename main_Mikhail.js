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
        this.boardMessage = `Bienvenue\n`;
    };

    set setInsurance(value) {
        this.insurance = value;
        this.boardMessage = `${this.boardMessage}Vous avez assuré le véhicule\n`;
    };

    get getBoardMessage() {
        return this.boardMessage;
    }

    repeindre(newColor) {
        if ((newColor === this.color)) {
            this.boardMessage += `Le véhicule est déjà de cette couleur\n`;
        } else {
            this.color = newColor;
            this.boardMessage += `Vous avez repeint le véhicul en ${this.color}\n`;
        };
    };

    mettreEssence(addFewlQuantity) {
        if ((addFewlQuantity + this.fewlQuantity) <= this.tankCapacity) {
            this.fewlQuantity += addFewlQuantity;
            this.boardMessage += `Vous avez ajoué ${this.fewlQuantity}L d'essence\n`;
        } else {
            this.boardMessage += `Réservoir d'essence insuffisant : opération annulée\n`;
        };
    };

    seDeplacer(distanceTravel, averageSpeed) {
        let fewlTrip = this.fewlConsumption(distanceTravel, averageSpeed);
        if (this.fewlQuantity >= fewlTrip) {
            this.boardMessage += `Trajet authorisé, ${fewlTrip}L d'essence sera consommé durant le trajet\n`;
        } else {
            this.boardMessage += `Trajet refusé, pas assez d\'essence dans le réservoir\n`;
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

