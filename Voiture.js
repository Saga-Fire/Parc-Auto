class Voiture {
  /**
   * @param {string} license
   * @param {string} color
   * @param {number} weight
   * @param {number} power
   * @param {number} tankCapacity
   * @param {number} numberSeats
   */
  constructor(license, color, weight, power, tankCapacity, numberSeats) {
    this.license = license;
    this.color = color;
    this.weight = weight;
    this.power = power;
    this.tankCapacity = tankCapacity;
    this.numberSeats = numberSeats;
    this.fuelQuantity = 5;
    this.insurance = false;
    this.boardMessage = `Welcome to the ${this.license} registration vehicle`;
  }

  /**
   * @param {boolean} value
   */
  set setInsurance(value) {
    if (value === true) {
      this.insurance = value;
      this.boardMessage = `The vehicle ${this.license} is insured`;
    } else if (value === false) {
      this.insurance = value;
      this.boardMessage = `The vehicle ${this.license} is not insured`;
    } else {
      throw `Please use true or false to change the vehicle insurance ${this.license}`;
    }
  }

  get getBoardMessage() {
    return this.boardMessage;
  }

  /**
   * @param {string} newColor
   */
  repainted(newColor) {
    if (newColor === this.color) {
      this.boardMessage = `The vehicle ${this.license} is already in this color`;
      return this.boardMessage;
    } else {
      this.color = newColor;
      this.boardMessage = `You have repainted the vehicle ${this.license} in ${this.color}`;
      return this.boardMessage;
    }
  }

  /**
   * @param {number} addfuelQuantity
   */
  addFuel(addfuelQuantity) {
    if (addfuelQuantity <= 0) {
      throw `The value must be strictly positive to add fuel to the vehicle ${this.license}`;
    }
    if (addfuelQuantity + this.fuelQuantity <= this.tankCapacity) {
      this.fuelQuantity += addfuelQuantity;
      this.boardMessage = `You have added ${addfuelQuantity}L of fuel to the vehicle ${this.license}`;
      return `There is ${this.fuelQuantity}L of fuel in the vehicle ${this.license}`;
    } else {
      this.boardMessage = `Vehicle fuel tank ${this.license} insufficient : operation canceled`;
      return `There is ${this.fuelQuantity}L of fuel in the vehicle ${this.license}`;
    }
  }

  /**
   * @param {number} distanceTravel
   * @param {number} averageSpeed
   */
  toMove(distanceTravel, averageSpeed) {
    if (distanceTravel <= 0 || averageSpeed <= 0) {
      throw `You cannot move the vehicle ${this.license} with a negative or zero average speed or distance`;
    }
    if (averageSpeed >= 170) {
      throw `You can lose your driver's license`;
    }
    if (!this.insurance) {
      throw `You cannot move the vehicle ${this.license} without insurance`;
    }
    let fuelTrip = this.fuelConsumption(distanceTravel, averageSpeed);
    if (this.fuelQuantity >= fuelTrip) {
      this.boardMessage = `Authorized trip, ${fuelTrip}L of fuel will be consumed during the trip`;
    } else {
      this.boardMessage = `Route denied, not enough fuel in the tank`;
    }
  }

  /**
   * @param {number} distanceTravel
   * @param {number} averageSpeed
   */
  fuelConsumption(distanceTravel, averageSpeed) {
    if (averageSpeed <= 50) {
      return distanceTravel * 0.1;
    } else if (averageSpeed > 50 && averageSpeed <= 90) {
      return distanceTravel * 0.05;
    } else if (averageSpeed > 90 && averageSpeed <= 130) {
      return distanceTravel * 0.09;
    } else {
      return distanceTravel * 0.12;
    }
  }

  toString() {
    return `Vehicle license ${this.license} with ${this.power} horsepower and ${this.color} color`;
  }
}
