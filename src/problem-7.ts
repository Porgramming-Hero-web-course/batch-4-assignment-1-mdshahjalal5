class Car {
  constructor(
    public make: string,
    public model: string,
    public year: number,
  ) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getCarAge() {
    return 2024 - this.year;
  }
}

const car = new Car("corolla", "b3fg-11", 2010);
console.log(car, "[1;31mcar in problem-7.ts at line 17[0m");
const age = car.getCarAge();
console.log(age, "[1;31mage in problem-7.ts at line 19[0m");
