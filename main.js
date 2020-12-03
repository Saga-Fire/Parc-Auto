let carMikhail = new Voiture("CG169TP", "noir", 1200, 90, 50.0, 5);
let carNissim = new Voiture("ND142FO", "vert", 800, 55, 30.0, 1);
let carChloe = new Voiture("CS328GA", "rose", 600, 700, 40.0, 2);
let carSanae = new Voiture("SB122DJ", "rouge", 1800, 115, 70.0, 7);
let carGregory = new Voiture("GY007OP", "bleu nuit", 1500, 220, 60.0, 4);

console.log(carMikhail.getBoardMessage);
carMikhail.setInsurance = true;
console.log(carMikhail.getBoardMessage);
carMikhail.repeindre("bleu");
console.log(carMikhail.getBoardMessage);
console.log(carMikhail.mettreEssence(35));
console.log(carMikhail.getBoardMessage);
carMikhail.seDeplacer(200, 110);
console.log(carMikhail.getBoardMessage);
console.log(carMikhail.toString());
console.log(carMikhail);

