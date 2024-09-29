// Wheel.ts
class Wheel {
  constructor(
    public diameter: number = 18,
    public brand: string = "GoodYear"
  ) {}

  getDiameter(): number {
    return this.diameter;
  }

  getBrand(): string {
    return this.brand;
  }
}

export default Wheel;
