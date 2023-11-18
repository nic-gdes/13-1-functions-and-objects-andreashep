class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    describe() {
            console.log("This " + this.year + " " + this.model + " is a " + this.make + ".")
        }
       
}
    
const allCars = [];
const car1 = new Car("Honda", "Passport", 1999);
const car2 = new Car("GMC", "Sierra", 1995);
const car3 = new Car("Mercury", "Cougar", 1968);
const car4 = new Car("Ford", "F - 250", 1971);
allCars.push(car1, car2, car3, car4);

for (let i = 0; i < allCars.length; i++) {
    allCars[i].describe();
}

