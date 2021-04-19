//fat thresholds

var fruitRunners = [
  {
    name: "Watermelon",
    image: "images/watermelonCircle.png",
    fiber: 2,
    protein: 0,
    vitamin: 1,
    addedSugar: 0,
    salt: 0,
    fat: 0
  },
  {
    name: "Strawberries",
    image: "images/strawberryCircle.png",
    fiber: 1,
    protein: 0,
    vitamin: 2,
    addedSugar: 0,
    salt: 0,
    fat: 0
  },
  {
    name: "Avocado",
    image: "images/watermelonCircle.png",
    fiber: 0,
    protein: 2,
    vitamin: 1,
    addedSugar: 0,
    salt: 0,
    fat: 0
  },
  {
    name: "Strawberries",
    image: "images/strawberryCircle.png",
    fiber: 1,
    protein: 0,
    vitamin: 2,
    addedSugar: 0,
    salt: 0,
    fat: 0
  },
  {
    name: "Strawberries",
    image: "images/strawberryCircle.png",
    fiber: 1,
    protein: 0,
    vitamin: 2,
    addedSugar: 0,
    salt: 0,
    fat: 0
  }
];

var veggieRunners = [
  {
    name: "Tomatoes",
    image: "images/tomatoCircle.png",
    fiber: 2,
    protein: 0,
    vitamin: 1,
    addedSugar: 0,
    salt: 0,
    fat: 0
  },
  {
    name: "Tomatoes",
    image: "images/tomatoCircle.png",
    fiber: 2,
    protein: 0,
    vitamin: 1,
    addedSugar: 0,
    salt: 0,
    fat: 0
  },
  {
    name: "Tomatoes",
    image: "images/tomatoCircle.png",
    fiber: 2,
    protein: 0,
    vitamin: 1,
    addedSugar: 0,
    salt: 0,
    fat: 0
  },
  {
    name: "Tomatoes",
    image: "images/tomatoCircle.png",
    fiber: 2,
    protein: 0,
    vitamin: 1,
    addedSugar: 0,
    salt: 0,
    fat: 0
  }
];

var grainRunners = [
  {
    name: "Bread",
    image: "images/breadCircle.png",
    fiber: 2,
    protein: 0,
    vitamin: 1,
    addedSugar: 0,
    salt: 0,
    fat: 0
  },
  {
    name: "Noodles",
    color: "red",
    image: "images/noodleCircle.png",
    fiber: 2,
    protein: 0,
    vitamin: 1,
    addedSugar: 0,
    salt: 0,
    fat: 0
  },
  {
    name: "Bread",
    image: "images/breadCircle.png",
    fiber: 2,
    protein: 0,
    vitamin: 1,
    addedSugar: 0,
    salt: 0,
    fat: 0
  },
  {
    name: "Noodles",
    color: "red",
    image: "images/noodleCircle.png",
    fiber: 2,
    protein: 0,
    vitamin: 1,
    addedSugar: 0,
    salt: 0,
    fat: 0
  }
];

var proteinRunners = [
  {
    name: "Beef",
    image: "images/beefCircle.png",
    fiber: 2,
    protein: 4,
    vitamin: 2,
    addedSugar: 0,
    salt: 0,
    fat: 2
  },
  {
    name: "Pork",
    image: "images/porkCircle.png",
    fiber: 3,
    protein: 3,
    vitamin: 1,
    addedSugar: 0,
    salt: 0,
    fat: 3
  },
  {
    name: "Peanuts",
    image: "images/peanutsCircle.png",
    fiber: 4,
    protein: 2,
    vitamin: 2,
    addedSugar: 0,
    salt: 0,
    fat: 1
  },
  {
    name: "Pork",
    image: "images/porkCircle.png",
    fiber: 3,
    protein: 3,
    vitamin: 1,
    addedSugar: 0,
    salt: 0,
    fat: 3
  }
];

var dairyRunners = [
  {
    name: "Cheese",
    image: "images/cheeseCircle.png",
    fiber: 2,
    protein: 1,
    vitamin: 1,
    addedSugar: 0,
    salt: 0,
    fat: 4
  },
  {
    name: "Yogurt",
    image: "images/yogurtCircle.png",
    fiber: 1,
    protein: 1,
    vitamin: 1,
    addedSugar: 3,
    salt: 0,
    fat: 0
  },
  {
    name: "Cheese",
    image: "images/cheeseCircle.png",
    fiber: 2,
    protein: 1,
    vitamin: 1,
    addedSugar: 0,
    salt: 0,
    fat: 4
  },
  {
    name: "Yogurt",
    image: "images/yogurtCircle.png",
    fiber: 1,
    protein: 1,
    vitamin: 1,
    addedSugar: 3,
    salt: 0,
    fat: 0
  }
];

// console.log(fruitRunners[0].vitamin)
nutritionCalc();

var total;

function nutritionCalc() {
  // console.log("Fruits")
  for (i = 0; i < fruitRunners.length; i++) {
    total = (fruitRunners[i].fiber * 2) + (fruitRunners[i].protein * 2) + (fruitRunners[i].vitamin * 3) + (fruitRunners[i].salt) + (fruitRunners[i].fat) + (fruitRunners[i].addedSugar);
    // console.log(fruitRunners[i].name + " - " + total);
  }
}
