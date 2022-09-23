class Dino {
  constructor(dinoName, dinoPeriod, dinoDiet = "Vegetarian") {
    this.name = dinoName;
    this.diet = dinoDiet;
    this.period = dinoPeriod;
    this.color = "Green";
  }

  roar() {
    return `My name is ${this.name}, hear me roar!`;
  }

  printWelcome() {
    return `Welcome to the ${this.period} period!`;
  }

}

var dino1 = new Dino("T-Rex", "Cretaceous", "Carnivore");

console.log(dino1.printWelcome());

// console.log(dino1);
