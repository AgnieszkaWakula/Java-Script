// scripts.js

function Phone(brand, price, color, system, RAM) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.system = system;
	this.RAM = RAM
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + "PLN" + "System phone is " + this.system + " memory RAM is " + this.RAM + ".");
}

Phone.prototype.addVat = function (value) {
	return this.price + (this.price * value / 100);

var iPhone6S = new Phone("Apple", 2250, "silver", "iOS 10", "1 GB");
var SamsungGalaxyS6 = new Phone ("Samsung", 1600, "gold", "Android", "3 GB");
var OnePlusOne = ("OnePlus", 1299, "black", "Cyanogen OS 11S", "3 GB");

iPhone6S.printInfo();
SamsungGalaxyS6.printInfo();
OnePlusOne.printInfo();

var galaxyWithVat = galaxyS6.addVat(23);
	console.log(galaxyWithVat + " PLN");
var iPhoneWithVat = iPhone6S.addVat(23);
	console.log(iPhoneWithVat + " PLN");
var onePlusWithVat = onePlusOne.addVat(23);
	console.log(onePlusWithVat + " PLN");

/*
iPhone6S.addVat();
SamsungGalaxyS6.addVat();
OnePlusOne.addVat();
*/