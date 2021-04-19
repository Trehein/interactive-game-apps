var category = [
  {
    name: "Sauces",
    color: "green"
  },
  {
    name: "Cereals",
    color: "orange"
  },
  {
    name: "Drinks",
    color: "blue"
  }
];

var sauceData = [
  {
    name: "Ranch Dressing",
    number: 1,
    sugar: 7,
    servingSize: "3 Tbsp",
    image: "images/ranch.jpg"
  },
  {
    name: "Peanut Butter",
    number: 2,
    sugar: 3,
    servingSize: "3 Tbsp",
    image: "images/peanutButter.jpg"
  },
  {
    name: "Hot Sauce",
    number: 3,
    sugar: 0,
    servingSize: "1 tsp",
    image: "images/hotSauce.jpg"
  },
  {
    name: "BBQ Sauce",
    number: 4,
    sugar: 16,
    servingSize: "2 Tbsp",
    image: "images/bbq.jpg"
  }
];

var cerealData = [
  {
    name: "Cheerios",
    number: 1,
    sugar: 1,
    servingSize: "1 cup",
    image: "images/cheerios.jpg"
  },
  {
    name: "Raisin Bran",
    number: 2,
    sugar: 18,
    servingSize: "1 cup",
    image: "images/raisinBran.jpg"
  },
  {
    name: "Cap'n Crunch",
    number: 3,
    sugar: 16,
    servingSize: "1 cup",
    image: "images/captain.jpg"
  },
  {
    name: "Lucky Charms",
    number: 4,
    sugar: 13,
    servingSize: "1 cup",
    image: "images/lucky.jpg"
  }
];

var drinkData = [
  {
    name: "Coca Cola",
    number: 1,
    sugar: 65,
    servingSize: "20 oz.",
    image: "images/coke.jpg"
  },
  {
    name: "Gatorade",
    number: 2,
    sugar: 34,
    servingSize: "20 oz.",
    image: "images/gatorade.jpg"
  },
  {
    name: "Red Bull",
    number: 3,
    sugar: 37,
    servingSize: "8 oz.",
    image: "images/redBull.jpg"
  },
  {
    name: "Orange Juice",
    number: 4,
    sugar: 22,
    servingSize: "8 oz.",
    image: "images/oj.jpg"
  }
];

var sugarOz = [
  {
    name: "Ranch Dressing",
    sugar: 4.7
  },
  {
    name: "Peanut Butter",
    sugar: 1.3
  },
  {
    name: "Hot Sauce",
    sugar: 0
  },
  {
    name: "BBQ Sauce",
    sugar: 8
  },
  {
    name: "Cheerios",
    sugar: 0.13
  },
  {
    name: "Raisin Bran",
    sugar: 2.25
  },
  {
    name: "Cap'n Crunch",
    sugar: 2
  },
  {
    name: "Lucky Charms",
    sugar: 1.63
  },
  {
    name: "Coca Cola",
    sugar: 3.25
  },
  {
    name: "Gatorade",
    sugar: 1.7
  },
  {
    name: "Red Bull",
    sugar: 4.63
  },
  {
    name: "Orange Juice",
    sugar: 2.75
  }
];

var chosenSugar = [];

var sugarPickerBox = document.getElementById("sugarPicker").getBoundingClientRect();
var w = sugarPickerBox.width;
var h = sugarPickerBox.height;
var barPadding = 2;

var sugarPickerSvg = d3.select("#sugarPicker")
  .append("svg")
  .attr("width", w)
  .attr("height", h)
  .style("margin-left", "auto")
  .style("margin-right", "auto");

var pickerButtons = sugarPickerSvg.selectAll("g.catButton")
  .data(category)
  .enter()
  .append("g")
    .attr("class", "catButton")
    .style("cursor", "pointer")
    .on("click", sugarize);

pickerButtons.append("circle")
  .attr("r", 75)
  .attr("cx", function(d, i) {
    return (i * (w * .3)) + w * .2;
  })
  .attr("cy", h * .15)
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
    return (i * (w * .3)) + w * .2;
  })
  .attr("y", h * .15)
  .attr("text-anchor", "middle")
  .style("fill", "white")
  .text(function(d) {
    return d.name;
  })

var graphButton = sugarPickerSvg.append("g")
    .attr("class", "graphButton")
    .style("cursor", "pointer")
    .on("click", sugarGraph);

graphButton.append("circle")
  .attr("r", 75)
  .attr("cx", (w * .3) + w * .2)
  .attr("cy", h * .5)
  .attr("fill-opacity", .55)
  .attr("stroke", "purple")
  .attr("stroke-width", "5px")
  .attr("fill", "purple")
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

graphButton.append("text")
  .attr("class", "catLabel")
  .attr("x", (w * .3) + w * .2)
  .attr("y", h * .51)
  .attr("text-anchor", "middle")
  .style("fill", "white")
  .text("Graph")

function sugarGraph() {
  d3.select("#sugarPicker")
    .style("display", "none")
  d3.select("#sugarShow")
    .style("display", "none")
  d3.select("#sugarGraph")
    .style("display", "block")
  drawGraph();
}

var graphBox = d3.select("#sugarGraph")
  .append("svg")
  .attr("width", w)
  .attr("height", h)
  .attr("margin-left", 200)
  .attr("margin-right", 200)

var xScale = d3.scaleBand()
  .domain(d3.range(sugarOz.length))
  .rangeRound([0, w])
  .paddingInner(0.05)

var yScale = d3.scaleLinear()
  .domain([0, 10])
  .range([0, h]);

function drawGraph() {
  var graph = graphBox.selectAll("g.foodBar")
    .data(sugarOz)
    .enter()
    .append("g")
    .attr("class", "foodBar")

  graph.append("rect")
    .attr("x", function(d, i) {
      return xScale(i);
    })
    .attr("y", function(d) {
      return h - yScale(d.sugar);
    })
    .attr("width", xScale.bandwidth())
    .attr("height", function(d) {
      return yScale(d.sugar);
    })
    .attr("fill", function(d) {
      return "rgb(0, 0, " + Math.round(d.sugar * 10) + ")";
    });
}


















function sugarize(d) {
  d3.select("#sugarPicker")
    .style("display", "none")
  d3.select("#sugarShow")
    .style("display", "block");
  d3.select(this)
    if (d.name == "Sauces") {
      chosenSugar = sauceData;
    } else if (d.name == "Cereals") {
      chosenSugar = cerealData;
    } else if (d.name == "Drinks") {
      chosenSugar = drinkData;
    }
  drawComparison(d);
}

var showSugarBox = d3.select("#sugarShow")
  .append("svg")
  .attr("width", w)
  .attr("height", h)
  .attr("margin-left", 200)
  .attr("margin-right", 200);

function drawComparison() {
  var foods = showSugarBox.selectAll("g.food")
    .data(chosenSugar)
    .enter()
    .append("g")
      .attr("class", "food")
      .style("cursor", "pointer")
      .on("click", showSugar);

  foods.append("image")
    .attr("x", function(d, i) {
      return (i * (w / 5)) + 200;
    })
    .attr("y", 50)
    .attr("width", 350)
    .attr("height", 350)
    .attr("xlink:href", function(d) {
      return d.image;
    });

  foods.selectAll("text.label")
    .data(chosenSugar)
    .enter()
    .append("text")
    .attr("class", "label")
    .attr("x", function(d, i) {
      return (i * (w / 5)) + 360;
    })
    .attr("y", 35)
    .attr("text-anchor", "middle")
    .attr("fill", "black")
    .text(function(d) {
      return d.name;
    })

  foods.selectAll("text.serving")
    .data(chosenSugar)
    .enter()
    .append("text")
    .attr("class", "serving")
    .attr("x", function(d, i) {
      return (i * (w / 5)) + 360;
    })
    .attr("y", 425)
    .attr("text-anchor", "middle")
    .attr("fill", "black")
    .text(function(d) {
      return "Serving Size - " + d.servingSize;
    })

  foods.selectAll("text.sugar")
    .data(chosenSugar)
    .enter()
    .append("text")
    .attr("class", "sugar")
    .attr("x", function(d, i) {
      return (i * (w / 5)) + 360;
    })
    .attr("y", 475)
    .attr("text-anchor", "middle")
    .attr("fill", "white")
    .text(function(d) {
      return d.sugar + "g of Sugar";
    })
}

function showSugar(d) {
  if (d.number == 1) {
    showSugarBox.append("text")
      .attr("class", "sugar")
      .attr("x", 360)
      .attr("y", 475)
      .attr("text-anchor", "middle")
      .attr("fill", "black")
      .text(d.sugar  + "g of Sugar")
  } else if (d.number == 2) {
    showSugarBox.append("text")
      .attr("class", "sugar")
      .attr("x", (1 * (w / 5)) + 360)
      .attr("y", 475)
      .attr("text-anchor", "middle")
      .attr("fill", "black")
      .text(d.sugar  + "g of Sugar")
  } else if (d.number == 3) {
    showSugarBox.append("text")
      .attr("class", "sugar")
      .attr("x", (2 * (w / 5)) + 360)
      .attr("y", 475)
      .attr("text-anchor", "middle")
      .attr("fill", "black")
      .text(d.sugar  + "g of Sugar")
  } else if (d.number == 4) {
    showSugarBox.append("text")
      .attr("class", "sugar")
      .attr("x", (3 * (w / 5)) + 360)
      .attr("y", 475)
      .attr("text-anchor", "middle")
      .attr("fill", "black")
      .text(d.sugar  + "g of Sugar")
  }
}
