// Truck.ts
import Vehicle from './Vehicle.js';

class Truck extends Vehicle {
  public towingCapacity: number;

  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    towingCapacity: number
  ) {
    super(vin, make, model, year, weight, topSpeed, color);
    this.towingCapacity = towingCapacity;
  }

  // Method to tow another vehicle
  tow(vehicle: Vehicle): void {
    console.log(`Towing vehicle with VIN: ${vehicle.vin}`);
  }

  // Override printDetails method
  override printDetails(): void {
    super.printDetails();
    console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
  }
}

export default Truck;
