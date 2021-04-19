var racePickerBox = document.getElementById("racePicker").getBoundingClientRect();
var racePickerW = racePickerBox.width;
var racePickerH = racePickerBox.height;

var category = [
  {
    name: "Fruits",
    color: "red"
  },
  {
    name: "Veggies",
    color: "green"
  },
  {
    name: "Grains",
    color: "orange"
  },
  {
    name: "Proteins",
    color: "purple"
  },
  {
    name: "Dairy",
    color: "blue"
  },
  // {
  //   name: "Fast Food",
  //   color: "brown"
  // }
];

var fruitRunners = [
  {
    name: "Watermelon",
    type: "fruit",
    image: "images/watermelonCircle.png",
    color: "blue",
    amount: "1/2 cup",
    calories: 4,
    fiber: 1,
    protein: 1,
    vitamin: 1,
    sugar: 1,
    salt: 1,
    fat: 2
  },
  {
    name: "Strawberries",
    type: "fruit",
    image: "images/strawberryCircle.png",
    color: "orange",
    amount: "1/2 cup",
    calories: 3,
    fiber: 3,
    protein: 1,
    vitamin: 3,
    sugar: 3,
    salt: 1,
    fat: 2
  },
  {
    name: "Cantaloupe",
    type: "fruit",
    image: "images/cantaloupeCircle.png",
    color: "green",
    amount: "1/4 melon",
    calories: 2,
    fiber: 2,
    protein: 2,
    vitamin: 4,
    sugar: 2,
    salt: 1,
    fat: 2
  },
  {
    name: "Avocado",
    type: "fruit",
    image: "images/avocadoCircle.png",
    color: "red",
    amount: "1/2 avocado",
    calories: 1,
    fiber: 4,
    protein: 3,
    vitamin: 2,
    sugar: 4,
    salt: 1,
    fat: 1
  }
];

var veggieRunners = [
  {
    name: "Green Peas",
    type: "veggie",
    image: "images/greenPeasCircle.png",
    color: "blue",
    amount: "1/2 cup",
    calories: 1,
    fiber: 2,
    protein: 3,
    vitamin: 1,
    sugar: 4,
    salt: 1,
    fat: 1
  },
  {
    name: "Broccoli",
    type: "veggie",
    image: "images/broccoliCircle.png",
    color: "orange",
    amount: "1/2 cup",
    calories: 3,
    fiber: 1,
    protein: 2,
    vitamin: 3,
    sugar: 2,
    salt: 2,
    fat: 1
  },
  {
    name: "Sweet Potato",
    type: "veggie",
    image: "images/sweetpotatoCircle.png",
    color: "green",
    amount: "1/2 a potato",
    calories: 2,
    fiber: 1,
    protein: 1,
    vitamin: 4,
    sugar: 2,
    salt: 4,
    fat: 1
  },
  {
    name: "Tomatoes",
    type: "veggie",
    image: "images/tomatoCircle.png",
    color: "red",
    amount: "1 tomato",
    calories: 3,
    fiber: 1,
    protein: 1,
    vitamin: 2,
    sugar: 3,
    salt: 3,
    fat: 1
  }
];

var grainRunners = [
  {
    name: "Goldfish",
    type: "grain",
    image: "images/goldfishCircle.png",
    color: "blue",
    amount: "1/2 cup",
    calories: 1,
    fiber: 2,
    protein: 2,
    vitamin: 1,
    sugar: 1,
    salt: 1,
    fat: 1
  },
  {
    name: "Pancake",
    type: "grain",
    image: "images/pancakeCircle.png",
    color: "orange",
    amount: '4" pancake',
    calories: 3,
    fiber: 2,
    protein: 2,
    vitamin: 1,
    sugar: 1,
    salt: 2,
    fat: 2
  },
  {
    name: "Corn Tortilla",
    type: "grain",
    image: "images/cornTortillaCircle.png",
    color: "green",
    amount: '6" tortilla',
    calories: 4,
    fiber: 1,
    protein: 1,
    vitamin: 1,
    sugar: 1,
    salt: 3,
    fat: 2
  },
  {
    name: "Brown Rice",
    type: "grain",
    image: "images/brownRiceCircle.png",
    color: "red",
    amount: "1/2 cup",
    calories: 2,
    fiber: 3,
    protein: 3,
    vitamin: 1,
    sugar: 1,
    salt: 4,
    fat: 2
  }
];

var proteinRunners = [
  {
    name: "Fried Chicken",
    type: "protein",
    image: "images/friedChickenCircle.png",
    color: "blue",
    amount: "3 oz",
    calories: 1,
    fiber: 1,
    protein: 4,
    vitamin: 2,
    sugar: 1,
    salt: 2,
    fat: 2
  },
  {
    name: "Peanut Butter",
    type: "protein",
    image: "images/peanutButterCircle.png",
    color: "orange",
    amount: "2 tbsp",
    calories: 2,
    fiber: 3,
    protein: 2,
    vitamin: 1,
    sugar: 3,
    salt: 3,
    fat: 1
  },
  {
    name: "Refried Beans",
    type: "protein",
    image: "images/refriedBeansCircle.png",
    color: "green",
    amount: "1/2 cup",
    calories: 3,
    fiber: 4,
    protein: 2,
    vitamin: 1,
    sugar: 1,
    salt: 1,
    fat: 4
  },
  {
    name: "Tofu",
    type: "protein",
    image: "images/tofuCircle.png",
    color: "red",
    amount: "1/2 cup",
    calories: 4,
    fiber: 2,
    protein: 3,
    vitamin: 3,
    sugar: 2,
    salt: 4,
    fat: 3
  }
];

var dairyRunners = [
  {
    name: "Cottage Cheese",
    type: "dairy",
    image: "images/cottageCheeseCircle.png",
    color: "blue",
    amount: "1/2 cup",
    calories: 4,
    fiber: 1,
    protein: 4,
    vitamin: 1,
    sugar: 2,
    salt: 1,
    fat: 3
  },
  {
    name: "2% Milk",
    type: "dairy",
    image: "images/twoPercentMilkCircle.png",
    color: "orange",
    amount: "1 cup",
    calories: 3,
    fiber: 1,
    protein: 2,
    vitamin: 3,
    sugar: 3,
    salt: 3,
    fat: 3
  },
  {
    name: "Ice Cream",
    type: "dairy",
    image: "images/iceCreamCircle.png",
    color: "green",
    amount: "1/2 cup",
    calories: 1,
    fiber: 1,
    protein: 1,
    vitamin: 1,
    sugar: 1,
    salt: 4,
    fat: 2
  },
  {
    name: "Cheddar Cheese",
    type: "dairy",
    image: "images/cheddarCheeseCircle.png",
    color: "red",
    amount: "1.5 oz",
    calories: 2,
    fiber: 1,
    protein: 3,
    vitamin: 2,
    sugar: 2,
    salt: 2,
    fat: 1
  }
];

// var fastFoodRunners = [
//
// ];

var chosenRunners = [];

var racePickerSvg = d3.select("#racePicker")
  .append("svg")
  .attr("width", racePickerW)
  .attr("height", racePickerH)

var pickerButtons = racePickerSvg.selectAll("g.catButton")
  .data(category)
  .enter()
  .append("g")
    .attr("class", "catButton")
    .style("cursor", "pointer")
    .on("click", toTheRaces);

pickerButtons.append("circle")
  .attr("r", 75)
  .attr("cx", function(d, i) {
    return (i * (racePickerW * .15)) + racePickerW * .14;
  })
  .attr("cy", racePickerH * .15)
  .attr("fill-opacity", .55)
  .attr("stroke", function(d) {
    return d.color;
  })
  .attr("stroke-width", "5px")
  .attr("fill", function(d) {
    return d.color;
  })
  .on("mouseover", function(d) {
    d3.select(this)
      .transition()
      .attr("fill-opacity", .7);
    })
  .on("mouseout", function(d) {
    d3.select(this)
      .transition()
      .attr("fill-opacity", .55);
  });

pickerButtons.append("text")
  .attr("class", "catLabel")
  .attr("x", function(d, i) {
    return (i * (racePickerW * .15)) + racePickerW * .14;
  })
  .attr("y", racePickerH * .15)
  .attr("text-anchor", "middle")
  .style("fill", "white")
  .text(function(d) {
    return d.name;
  })

function toTheRaces(d) {
  d3.select("#racePicker")
    .style("display", "none")
  d3.select("#raceBox")
    .style("display", "block")
  d3.select(this)
    if (d.name == "Fruits") {
      chosenRunners = fruitRunners;
    } else if (d.name == "Veggies") {
      chosenRunners = veggieRunners;

    } else if (d.name == "Grains") {
      chosenRunners = grainRunners;

    } else if (d.name == "Proteins") {
      chosenRunners = proteinRunners;

    } else if (d.name == "Dairy") {
      chosenRunners = dairyRunners;

    } else if (d.name == "Fast Food") {
      chosenRunners = fastFoodRunners;
    }
  // console.log(chosenRunners)
  drawTrack(d);
  drawRacers(d);
}

var raceBoxSvg = d3.select("#raceBox")
  .append("svg")
  .attr("width", racePickerW)
  .attr("height", racePickerH)

function drawTrack(d) {

  var track = raceBoxSvg.selectAll("g.track")
    .data(chosenRunners)
    .enter()
    .append("g")
      .attr("class", "track")

  track.append("line")
    .attr("x1", (150))
    .attr("y1", function(d, i) {
      return (i * (200)) + 275;
    })
    .attr("x2", (1100))
    .attr("y2", function(d, i) {
      return (i * (200)) + 275;
    })
    .attr("stroke-width", 3)
    .attr("stroke", "black");

  track.append("line")
    .attr("x1", (150))
    .attr("y1", 75)
    .attr("x2", (1100))
    .attr("y2", 75)
    .attr("stroke-width", 3)
    .attr("stroke", "black");

  track.append("line")
    .attr("x1", (150))
    .attr("y1", (73))
    .attr("x2", (150))
    .attr("y2", (877))
    .attr("stroke-width", 15)
    .attr("stroke", "black")

  track.append("line")
    .attr("x1", (1100))
    .attr("y1", (73))
    .attr("x2", (1100))
    .attr("y2", (877))
    .attr("stroke-width", 30)
    .attr("stroke", "black")

  track.append("text")
    .attr("class", "trackLabel")
    .attr("fill", "black")
    .attr("text-anchor", "middle")
    .attr("transform", "translate(185, 175) rotate(-90)")
    .text(chosenRunners[0].name)

  track.append("text")
    .attr("class", "trackAmount")
    .attr("fill", "black")
    .attr("text-anchor", "middle")
    .attr("transform", "translate(205, 175) rotate(-90)")
    .text(chosenRunners[0].amount)

  track.append("text")
    .attr("class", "trackLabel")
    .attr("fill", "black")
    .attr("text-anchor", "middle")
    .attr("transform", "translate(185, 375) rotate(-90)")
    .text(chosenRunners[1].name)

  track.append("text")
    .attr("class", "trackAmount")
    .attr("fill", "black")
    .attr("text-anchor", "middle")
    .attr("transform", "translate(205, 375) rotate(-90)")
    .text(chosenRunners[1].amount)

  track.append("text")
    .attr("class", "trackLabel")
    .attr("fill", "black")
    .attr("text-anchor", "middle")
    .attr("transform", "translate(185, 575) rotate(-90)")
    .text(chosenRunners[2].name)

  track.append("text")
    .attr("class", "trackAmount")
    .attr("fill", "black")
    .attr("text-anchor", "middle")
    .attr("transform", "translate(205, 575) rotate(-90)")
    .text(chosenRunners[2].amount)

  track.append("text")
    .attr("class", "trackLabel")
    .attr("fill", "black")
    .attr("text-anchor", "middle")
    .attr("transform", "translate(185, 775) rotate(-90)")
    .text(chosenRunners[3].name)

  track.append("text")
    .attr("class", "trackAmount")
    .attr("fill", "black")
    .attr("text-anchor", "middle")
    .attr("transform", "translate(205, 775) rotate(-90)")
    .text(chosenRunners[3].amount)

  track.append("text")
    .attr("class", "finishLabel")
    .attr("fill", "black")
    .attr("text-anchor", "middle")
    .attr("transform", "translate(1325, 475) rotate(90)")
    .text("Healthiest!")
}

var raceRunners;
var circleCenter = 100;

function drawRacers(d) {

  raceRunners = raceBoxSvg.selectAll("g.racer")
    .data(chosenRunners)
    .enter()
    .append("g")
      .attr("class", "racer")

  raceRunners.append("circle")
    .attr("r", 50)
    .attr("fill", function(d) {
      return d.color;
    })
    .attr("cx", circleCenter)
    .attr("cy", function(d, i) {
      return (i * 200) + 175;
    })

  raceRunners.append("image")
    .attr("x", 40)
    .attr("y", function(d, i) {
      return (i * 200) + 115;
    })
    .attr("width", 120)
    .attr("height", 120)
    .attr("xlink:href", function(d) {
      return d.image;
    });
}

var nutritionButtons = [
  {
    name: "Fiber",
    color: "orange"
  },
  {
    name: "Protein",
    color: "red"
  },
  {
    name: "Vitamins",
    color: "purple"
  },
  {
    name: "Fats",
    color: "blue"
  },
  {
    name: "Sodium",
    color: "green"
  },
  {
    name: "Sugars",
    color: "gold"
  },
  {
    name: "Calories",
    color: "red"
  }
];


var buttonHolder = raceBoxSvg.selectAll("g.relays")
  .data(nutritionButtons)
  .enter()
  .append("g")
    .attr("class", "relays")
    .style("cursor", "pointer")
    .on("click", runRace)

buttonHolder.append("rect")
  .attr("fill", function(d) {
    return d.color;
  })
  .attr("width", 150)
  .attr("height", 50)
  .attr("rx", 20)
  .attr("x", function(d, i) {
    return (i * 175) + 75;
  })
  .attr("ry", 20)
  .attr("y", 15)

buttonHolder.append("text")
  .attr("x", function(d, i) {
    return (i * 175) + 150;
  })
  .attr("y", 45)
  .attr("fill", "white")
  .attr("text-anchor", "middle")
  .style("font-size", "1.5em")
  .text(function(d) {
    return d.name;
  })

function runRace(d) {
  if (d.name == "Fiber") {
    raceRunners.selectAll("circle")
      .transition()
      .duration(3000)
      .ease(d3.easeSin)
      .attr("cx", function(d) {
        if (d.type == "fruit") {
          return (d.fiber * 67) + 100;
        } else if (d.type == "veggie") {
          return (d.fiber * 72) + 100;
        } else if (d.type == "grain") {
          return (d.fiber * 67) + 100;
        } else if (d.type == "protein") {
          return (d.fiber * 52) + 100;
        } else if (d.type == "dairy") {
          return (d.fiber * 60) + 100;
        }
      })
    raceRunners.selectAll("image")
      .transition()
      .duration(3000)
      .ease(d3.easeSin)
      .attr("x", function(d) {
        if (d.type == "fruit") {
          return (d.fiber * 67) + 40;
        } else if (d.type == "veggie") {
          return (d.fiber * 72) + 40;
        } else if (d.type == "grain") {
          return (d.fiber * 67) + 40;
        } else if (d.type == "protein") {
          return (d.fiber * 52) + 40;
        } else if (d.type == "dairy") {
          return (d.fiber * 60) + 40;
        }
      })
  } else if (d.name == "Protein") {
    raceRunners.selectAll("circle")
      .transition()
      .duration(4500)
      .ease(d3.easeElastic)
      .attr("cx", function(d) {
        if (d.type == "fruit") {
          return (d.fiber * 67) + (d.protein * 67) + 100;
        } else if (d.type == "veggie") {
          return (d.fiber * 72) + (d.protein * 72) + 100;
        } else if (d.type == "grain") {
          return (d.fiber * 67) + (d.protein * 67) + 100;
        } else if (d.type == "protein") {
          return (d.fiber * 52) + (d.protein * 52) + 100;
        } else if (d.type == "dairy") {
          return (d.fiber * 60) + (d.protein * 60) + 100;
        }
      })
    raceRunners.selectAll("image")
      .transition()
      .duration(4500)
      .ease(d3.easeElastic)
      .attr("x", function(d) {
        if (d.type == "fruit") {
          return (d.fiber * 67) + (d.protein * 67) + 40;
        } else if (d.type == "veggie") {
          return (d.fiber * 72) + (d.protein * 72) + 40;
        } else if (d.type == "grain") {
          return (d.fiber * 67) + (d.protein * 67) + 40;
        } else if (d.type == "protein") {
          return (d.fiber * 52) + (d.protein * 52) + 40;
        } else if (d.type == "dairy") {
          return (d.fiber * 60) + (d.protein * 60) + 40;
        }
      })
  } else if (d.name =="Vitamins") {
    raceRunners.selectAll("circle")
      .transition()
      .duration(3500)
      .ease(d3.easeBack)
      .attr("cx", function(d) {
        if (d.type == "fruit") {
          return (d.fiber * 67) + (d.protein * 67) + (d.vitamin * 67) + 100;
        } else if (d.type == "veggie") {
          return (d.fiber * 72) + (d.protein * 72) + (d.vitamin * 72) + 100;
        } else if (d.type == "grain") {
          return (d.fiber * 67) + (d.protein * 67) + (d.vitamin * 67) + 100;
        } else if (d.type == "protein") {
          return (d.fiber * 52) + (d.protein * 52) + (d.vitamin * 52) + 100;
        } else if (d.type == "dairy") {
          return (d.fiber * 60) + (d.protein * 60) + (d.vitamin * 60) + 100;
        }
      })
    raceRunners.selectAll("image")
      .transition()
      .duration(3500)
      .ease(d3.easeBack)
      .attr("x", function(d) {
        if (d.type == "fruit") {
          return (d.fiber * 67) + (d.protein * 67) + (d.vitamin * 67) + 40;
        } else if (d.type == "veggie") {
          return (d.fiber * 72) + (d.protein * 72) + (d.vitamin * 72) + 40;
        } else if (d.type == "grain") {
          return (d.fiber * 67) + (d.protein * 67) + (d.vitamin * 67) + 40;
        } else if (d.type == "protein") {
          return (d.fiber * 52) + (d.protein * 52) + (d.vitamin * 52) + 40;
        } else if (d.type == "dairy") {
          return (d.fiber * 60) + (d.protein * 60) + (d.vitamin * 60) + 40;
        }
      })
  } else if (d.name == "Fats"){
    raceRunners.selectAll("circle")
      .transition()
      .duration(3500)
      .ease(d3.easeBounce)
      .attr("cx", function(d) {
        if (d.type == "fruit") {
          return (d.fiber * 67) + (d.protein * 67) + (d.vitamin * 67) + (d.fat * 67) + 100;
        } else if (d.type == "veggie") {
          return (d.fiber * 72) + (d.protein * 72) + (d.vitamin * 72) + (d.fat * 72) + 100;
        } else if (d.type == "grain") {
          return (d.fiber * 67) + (d.protein * 67) + (d.vitamin * 67) + (d.fat * 67) + 100;
        } else if (d.type == "protein") {
          return (d.fiber * 52) + (d.protein * 52) + (d.vitamin * 52) + (d.fat * 52) + 100;
        } else if (d.type == "dairy") {
          return (d.fiber * 60) + (d.protein * 60) + (d.vitamin * 60) + (d.fat * 60) + 100;
        }
      })
    raceRunners.selectAll("image")
      .transition()
      .duration(3500)
      .ease(d3.easeBounce)
      .attr("x", function(d) {
        if (d.type == "fruit") {
          return (d.fiber * 67) + (d.protein * 67) + (d.vitamin * 67) + (d.fat * 67) + 40;
        } else if (d.type == "veggie") {
          return (d.fiber * 72) + (d.protein * 72) + (d.vitamin * 72) + (d.fat * 72) + 40;
        } else if (d.type == "grain") {
          return (d.fiber * 67) + (d.protein * 67) + (d.vitamin * 67) + (d.fat * 67) + 40;
        } else if (d.type == "protein") {
          return (d.fiber * 52) + (d.protein * 52) + (d.vitamin * 52) + (d.fat * 52) + 40;
        } else if (d.type == "dairy") {
          return (d.fiber * 60) + (d.protein * 60) + (d.vitamin * 60) + (d.fat * 60) + 40;
        }
      })
  } else if (d.name == "Sodium") {
    raceRunners.selectAll("circle")
      .transition()
      .duration(3000)
      .ease(d3.easeExp)
      .attr("cx", function(d) {
        if (d.type == "fruit") {
          return (d.fiber * 67) + (d.protein * 67) + (d.vitamin * 67) + (d.fat * 67) + (d.salt * 67) + 100;
        } else if (d.type == "veggie") {
          return (d.fiber * 72) + (d.protein * 72) + (d.vitamin * 72) + (d.fat * 72) + (d.salt * 72) + 100;
        } else if (d.type == "grain") {
          return (d.fiber * 67) + (d.protein * 67) + (d.vitamin * 67) + (d.fat * 67) + (d.salt * 67) + 100;
        } else if (d.type == "protein") {
          return (d.fiber * 52) + (d.protein * 52) + (d.vitamin * 52) + (d.fat * 52) + (d.salt * 52) + 100;
        } else if (d.type == "dairy") {
          return (d.fiber * 60) + (d.protein * 60) + (d.vitamin * 60) + (d.fat * 60) + (d.salt * 60) + 100;
        }
      })
    raceRunners.selectAll("image")
      .transition()
      .duration(3000)
      .ease(d3.easeExp)
      .attr("x", function(d) {
        if (d.type == "fruit") {
          return (d.fiber * 67) + (d.protein * 67) + (d.vitamin * 67) + (d.fat * 67) + (d.salt * 67) + 40;
        } else if (d.type == "veggie") {
          return (d.fiber * 72) + (d.protein * 72) + (d.vitamin * 72) + (d.fat * 72) + (d.salt * 72) + 40;
        } else if (d.type == "grain") {
          return (d.fiber * 67) + (d.protein * 67) + (d.vitamin * 67) + (d.fat * 67) + (d.salt * 67) + 40;
        } else if (d.type == "protein") {
          return (d.fiber * 52) + (d.protein * 52) + (d.vitamin * 52) + (d.fat * 52) + (d.salt * 52) + 40;
        } else if (d.type == "dairy") {
          return (d.fiber * 60) + (d.protein * 60) + (d.vitamin * 60) + (d.fat * 60) + (d.salt * 60) + 40;
        }
      })
  } else if (d.name == "Sugars") {
    raceRunners.selectAll("circle")
      .transition()
      .duration(3500)
      .ease(d3.easeQuad)
      .attr("cx", function(d) {
        if (d.type == "fruit") {
          return (d.fiber * 67) + (d.protein * 67) + (d.vitamin * 67) + (d.fat * 67) + (d.salt * 67) + (d.sugar * 67) + 100;
        } else if (d.type == "veggie") {
          return (d.fiber * 72) + (d.protein * 72) + (d.vitamin * 72) + (d.fat * 72) + (d.salt * 72) + (d.sugar * 72) + 100;
        } else if (d.type == "grain") {
          return (d.fiber * 67) + (d.protein * 67) + (d.vitamin * 67) + (d.fat * 67) + (d.salt * 67) + (d.sugar * 67) + 100;
        } else if (d.type == "protein") {
          return (d.fiber * 52) + (d.protein * 52) + (d.vitamin * 52) + (d.fat * 52) + (d.salt * 52) + (d.sugar * 52) + 100;
        } else if (d.type == "dairy") {
          return (d.fiber * 60) + (d.protein * 60) + (d.vitamin * 60) + (d.fat * 60) + (d.salt * 60) + (d.sugar * 60) + 100;
        }
      })
    raceRunners.selectAll("image")
      .transition()
      .duration(3500)
      .ease(d3.easeQuad)
      .attr("x", function(d) {
        if (d.type == "fruit") {
          return (d.fiber * 67) + (d.protein * 67) + (d.vitamin * 67) + (d.fat * 67) + (d.salt * 67) + (d.sugar * 67) + 40;
        } else if (d.type == "veggie") {
          return (d.fiber * 72) + (d.protein * 72) + (d.vitamin * 72) + (d.fat * 72) + (d.salt * 72) + (d.sugar * 72) + 40;
        } else if (d.type == "grain") {
          return (d.fiber * 67) + (d.protein * 67) + (d.vitamin * 67) + (d.fat * 67) + (d.salt * 67) + (d.sugar * 67) + 40;
        } else if (d.type == "protein") {
          return (d.fiber * 52) + (d.protein * 52) + (d.vitamin * 52) + (d.fat * 52) + (d.salt * 52) + (d.sugar * 52) + 40;
        } else if (d.type == "dairy") {
          return (d.fiber * 60) + (d.protein * 60) + (d.vitamin * 60) + (d.fat * 60) + (d.salt * 60) + (d.sugar * 60) + 40;
        }
      })
  } else if (d.name == "Calories") {
    raceRunners.selectAll("circle")
      .transition()
      .duration(3000)
      .attr("cx", function(d) {
        if (d.type == "fruit") {
          return (d.fiber * 67) + (d.protein * 67) + (d.vitamin * 67) + (d.fat * 67) + (d.salt * 67) + (d.sugar * 67) + (d.calories * 67) + 100;
        } else if (d.type == "veggie") {
          return (d.fiber * 72) + (d.protein * 72) + (d.vitamin * 72) + (d.fat * 72) + (d.salt * 72) + (d.sugar * 72) + (d.calories * 72) + 100;
        } else if (d.type == "grain") {
          return (d.fiber * 67) + (d.protein * 67) + (d.vitamin * 67) + (d.fat * 67) + (d.salt * 67) + (d.sugar * 67) + (d.calories * 67) + 100;
        } else if (d.type == "protein") {
          return (d.fiber * 52) + (d.protein * 52) + (d.vitamin * 52) + (d.fat * 52) + (d.salt * 52) + (d.sugar * 52) + (d.calories * 52) + 100;
        } else if (d.type == "dairy") {
          return (d.fiber * 60) + (d.protein * 60) + (d.vitamin * 60) + (d.fat * 60) + (d.salt * 60) + (d.sugar * 60) + (d.calories * 60) + 100;
        }
      })
    raceRunners.selectAll("image")
      .transition()
      .duration(3000)
      .attr("x", function(d) {
        if (d.type == "fruit") {
          return (d.fiber * 67) + (d.protein * 67) + (d.vitamin * 67) + (d.fat * 67) + (d.salt * 67) + (d.sugar * 67) + (d.calories * 67) + 40;
        } else if (d.type == "veggie") {
          return (d.fiber * 72) + (d.protein * 72) + (d.vitamin * 72) + (d.fat * 72) + (d.salt * 72) + (d.sugar * 72) + (d.calories * 72) + 40;
        } else if (d.type == "grain") {
          return (d.fiber * 67) + (d.protein * 67) + (d.vitamin * 67) + (d.fat * 67) + (d.salt * 67) + (d.sugar * 67) + (d.calories * 67) + 40;
        } else if (d.type == "protein") {
          return (d.fiber * 52) + (d.protein * 52) + (d.vitamin * 52) + (d.fat * 52) + (d.salt * 52) + (d.sugar * 52) + (d.calories * 52) + 40;
        } else if (d.type == "dairy") {
          return (d.fiber * 60) + (d.protein * 60) + (d.vitamin * 60) + (d.fat * 60) + (d.salt * 60) + (d.sugar * 60) + (d.calories * 60) + 40;
        }
      })
  }
    // .data(chosenRunners)
    // .enter()
  // console.log(racers)
}
