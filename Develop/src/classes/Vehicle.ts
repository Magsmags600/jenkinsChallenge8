// Vehicle.ts
class Vehicle {
  constructor(
    public vin: string,
    public make: string,
    public model: string,
    public year: number,
    public weight: number,
    public topSpeed: number,
    public color: string
  ) {}

  // Method to print vehicle details
  printDetails(): void {
    console.log(`Vehicle details: ${this.year} ${this.make} ${this.model} (${this.color})`);
  }

  // Method to start the vehicle
  start(): void {
    console.log("Vehicle started");
  }

  // Method to accelerate the vehicle
  accelerate(speed: number): void {
    console.log(`Vehicle accelerated by ${speed} mph`);
  }

  // Method to decelerate the vehicle
  decelerate(speed: number): void {
    console.log(`Vehicle decelerated by ${speed} mph`);
  }

  // Method to stop the vehicle
  stop(): void {
    console.log("Vehicle stopped");
  }

  // Method to turn the vehicle
  turn(direction: string): void {
    console.log(`Vehicle turned ${direction}`);
  }

  // Method to reverse the vehicle
  reverse(): void {
    console.log("Vehicle reversed");
  }
}

export default Vehicle;
