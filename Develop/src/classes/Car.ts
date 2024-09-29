// Car.ts
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Car extends Vehicle {
  public wheels: Wheel[];

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[] = [new Wheel(), new Wheel(), new Wheel(), new Wheel()]
  ) {
    super(vin, make, model, year, weight, topSpeed, color);
    this.wheels = wheels.length === 4 ? wheels : [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
  }

  // Override printDetails method
  override printDetails(): void {
    super.printDetails();
    this.wheels.forEach((wheel, index) => {
      console.log(`Wheel ${index + 1}: ${wheel.diameter} inches, ${wheel.brand}`);
    });
  }
}

export default Car;
