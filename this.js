// Encapsulation & this keyword

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
}
getThis(){
    console.log(this);
}
}

const car1 = new Vehicle('Toyota', 'Corolla');
car1.getThis();