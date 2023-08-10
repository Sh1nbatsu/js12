// exercise 1

function createShop(name, adress) {
  this.name = name;
  this.adress = adress;
}

let green = new createShop("green", "Urengoy");

let cc = new createShop("CC", "Ufa");

const shops = [];

shops.push(green, cc);

console.log(shops);

// exercise 2

const adresses = shops.map((item) => {
  return item.adress;
});

console.log(adresses);

// exercise 3

function createStudent(name, age, scoreAvg) {
  this.name = name;
  this.age = age;
  this.scoreAvg = scoreAvg;
  this.getInfo = () => {
    console.log(this.name, this.age, this.scoreAvg);
  };
}

let student1 = new createStudent("Vitaly", 19, 94);

console.log(student1);

student1.getInfo();

// exercise 4

function createCalculator() {
  this.sum = (a, b) => {
    console.log(a + b);
  };
  this.sub = (a, b) => {
    console.log(a - b);
  };
  this.mul = (a, b) => {
    console.log(a * b);
  };
  this.div = (a, b) => {
    console.log(a / b);
  };
}

let calc = new createCalculator();

calc.div(11, 12);
