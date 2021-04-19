var boxLabels = [
  "Unprocessed / Raw",
  "Minimal Processing",
  "Heavy Processing"
];
var processData = [
  {
    name: "Corn",
    image: "images/cornCircle.png",
    processed: "raw"
  },
  {
    name: "Tortilla",
    image: "images/cornTortillaCircle.png",
    processed: "minimal"
  },
  {
    name: "Doritos",
    image: "images/doritoCircle.png",
    processed: "heavy"
  },
  {
    name: "Oats",
    image: "images/oatsCircle.png",
    processed: "raw"
  },
  {
    name: "Oatmeal",
    image: "images/oatmealCircle.png",
    processed: "minimal"
  },
  {
    name: "Granola Bar",
    image: "images/granolaBarCircle.png",
    processed: "heavy"
  },
  {
    name: "Banana",
    image: "images/bananaCircle.png",
    processed: "raw"
  },
  {
    name: "Smoothie",
    image: "images/smoothieCircle.png",
    processed: "minimal"
  },
  {
    name: "Applesauce",
    image: "images/applesauceCircle.png",
    processed: "minimal"
  },
  {
    name: "Pumpkin Pie",
    image: "images/pumpkinPieCircle.png",
    processed: "heavy"
  },
  {
    name: "Rotisserie Chicken",
    image: "images/rotisserieChickenCircle.png",
    processed: "minimal"
  },
  {
    name: "Chicken Nuggets",
    image: "images/chickenNuggetsCircle.png",
    processed: "heavy"
  },
  {
    name: "Baked Potato",
    image: "images/bakedPotatoCircle.png",
    processed: "minimal"
  },
  {
    name: "French Fries",
    image: "images/frenchFriesCircle.png",
    processed: "heavy"
  },
  {
    name: "Hot Dog",
    image: "images/hotDogCircle.png",
    processed: "heavy"
  },
  {
    name: "Brown Rice",
    image: "images/brownRiceCircle.png",
    processed: "raw"
  },
  {
    name: "Canned Pineapple",
    image: "images/cannedPineappleCircle.png",
    processed: "minimal"
  },
  {
    name: "Ice Cream",
    image: "images/icecreamCircle.png",
    processed: "heavy"
  },
  {
    name: "Cheese",
    image: "images/cheeseCircle.png",
    processed: "heavy"
  },
  {
    name: "Skim Milk",
    image: "images/skimMilkCircle.png",
    processed: "minimal"
  },
  {
    name: "Whole Grain Bread",
    image: "images/wholeWheatBreadCircle.png",
    processed: "minimal"
  },
  {
    name: "White Bread",
    image: "images/breadCircle.png",
    processed: "heavy"
  },
  {
    name: "T-Bone Steak",
    image: "images/tBoneSteakCircle.png",
    processed: "minimal"
  },
  {
    name: "Hamburger",
    image: "images/hamburgerCircle.png",
    processed: "heavy"
  },
  {
    name: "Spam",
    image: "images/spamCircle.png",
    processed: "heavy"
  },
  {
    name: "Orange Juice",
    image: "images/orangeJuiceCircle.png",
    processed: "minimal"
  },
  {
    name: "Doughnut",
    image: "images/doughnutCircle.png",
    processed: "heavy"
  },
  {
    name: "Chicken Breast",
    image: "images/grilledChickenCircle.png",
    processed: "minimal"
  },
  {
    name: "Fish Fry",
    image: "images/fishFryCircle.png",
    processed: "heavy"
  },
  {
    name: "Mayonnaise",
    image: "images/mayonnaiseCircle.png",
    processed: "heavy"
  },
  {
    name: "Hot Sauce",
    image: "images/hotSauceCircle.png",
    processed: "heavy"
  },
  {
    name: "Soda",
    image: "images/cocaColaCircle.png",
    processed: "heavy"
  },
  {
    name: "Beer",
    image: "images/beerCircle.png",
    processed: "heavy"
  },
  {
    name: "Cheetos",
    image: "images/cheetosCircle.png",
    processed: "heavy"
  },
  {
    name: "Candy Bars",
    image: "images/candyBarCircle.png",
    processed: "heavy"
  },
  {
    name: "Fruit Snacks",
    image: "images/fruitSnackCircle.png",
    processed: "heavy"
  },
  {
    name: "Pickles",
    image: "images/pickleCircle.png",
    processed: "minimal"
  },
  {
    name: "Noodles",
    image: "images/noodleCircle.png",
    processed: "minimal"
  },
  {
    name: "Raisins",
    image: "images/raisinCircle.png",
    processed: "minimal"
  },
  {
    name: "Fish Sauce",
    image: "images/fishSauceCircle.png",
    processed: "minimal"
  },
  {
    name: "Sushi",
    image: "images/sushiCircle.png",
    processed: "raw"
  },
  {
    name: "Frozen Veggies",
    image: "images/frozenCircle.png",
    processed: "raw"
  }
];

var svg = document.getElementById("processorBox").getBoundingClientRect();
var w = svg.width;
var h = svg.height;

var svg = d3.select("#processorBox")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

  //Timer feature

var count = 0;
var timer;

svg.append("g")
  .attr("class", "timeStop")

svg.append("circle")
  .attr("r", 160)
  .attr("cx", w / 2)
  .attr("cy", 180)
  .attr("fill", "white")
  .attr("stroke", "black")
  .attr("stroke-width", 3)
  .style("cursor", "pointer")
  .on("click", function() {
    clearInterval(timer);
    svg.selectAll("text.totalGroup")
      .transition()
      .style("font-size", "1.5em")
      .attr("fill", "black")
    // playGoodAudio();
  });

svg.append("text")
  .attr("class", "timerText")
  .attr("x", w / 2)
  .attr("y", 190)
  .attr("fill", "black")
  .style("font-size", "2em")
  .attr("text-anchor", "middle")
  .text(count)

var labels = svg.selectAll("g.label")
  .data(boxLabels)
  .enter()
  .append("text")
    .attr("class", "catLabel")
    .attr("x", function(d, i) {
      return (i * w / 3) + 220;
    })
    .attr("y", 400)
    .attr("text-anchor", "middle")
    .attr("fill", "black")
    .text(function(d) {
      return d;
    })

svg.append("line")
  .attr("stroke", "gray")
  .attr("stroke-width", 1)
  .attr("x1", 440)
  .attr("y1", 400)
  .attr("x2", 440)
  .attr("y2", 850);

svg.append("line")
  .attr("stroke", "gray")
  .attr("stroke-width", 1)
  .attr("x1", 940)
  .attr("y1", 400)
  .attr("x2", 940)
  .attr("y2", 850);

var foodEl = svg.selectAll("g.food")
  .data(d3.shuffle(processData))
  .enter()
  .append("g")
  .attr("width", 320)
  .attr("height", 320)
  .attr("x", (w / 2) - 80)
  .attr("y", 100)
  .attr("class", "food")
  .on("mouseover", function(d) {
    d3.select(this)
    .style("cursor", "grab");

    d3.select(this).select("text")
    .transition()
    .duration(400)
    .style("opacity", 1)
    .style("text-shadow", "2px 2px 4px #000000");
  })
  .on("mouseout", function(d) {
    d3.select(this).select("text")
    .transition()
    .duration(400)
    .style("opacity", 0);
  })
  .call(d3.drag()
    .on("start", dragStarted)
    .on("drag", dragging)
    .on("end", dragEnded));

foodEl.append("circle")
  .attr("class", "foodCircle")
  .attr("r", 160)
  .attr("cx", w / 2)
  .attr("cy", 180)
  .attr("fill", "black")

var imgW = 420;
var imgH = 420;
var imgX = 490;
var imgY = -30;

foodEl.append("image")
  .attr("class", "foodPic")
  .attr("width", imgW)
  .attr("height", imgH)
  .attr("x", imgX)
  .attr("y", imgY)
  .attr("xlink:href", function(d) {
    return d.image;
  });

foodEl.append("text")
  .attr("class", "foodLabel")
  .attr("x", 700)
  .attr("y", 185)
  .style("opacity", 0)
  .attr("text-anchor", "middle")
  .style("fill", "#e8edf4")
  .text(function(d) {
    return d.name;
  });

// Score Keeper

var correctCounter = [ {count: 0} ];

var updateScore = function() {
  var correctCircle = svg.selectAll("g.correct")
    .data(correctCounter)
    .enter()
    .append("g");

  correctCircle.append("circle")
    .attr("class", "correct")
    .attr("r", 75)
    .attr("cx", 200)
    .attr("cy", 200)
    .attr("fill", "white")
    .attr("stroke", "black")
    .attr("stroke-width", 5);

  correctCircle.append("line")
    .attr("x1", 150)
    .attr("y1", 225)
    .attr("x2", 250)
    .attr("y2", 175)
    .attr("stroke", "black")
    .attr("stroke-width", 2)

  correctCircle.append("text")
    .attr("text-anchor", "middle")
    .attr("x", 180)
    .attr("y", 190)
    .attr("fill", "black")
    .style("font-size", "3em")
    .text(function(d) {
      return d.count;
    });

  correctCircle.append("text")
    .attr("text-anchor", "middle")
    .attr("x", 215)
    .attr("y", 250)
    .attr("fill", "black")
    .style("font-size", "3em")
    .text(processData.length)

  correctCircle.select("circle")
      .transition()
      .duration(200)
      .attr("r", 80)
      .transition()
      .duration(200)
      .attr("r", 70)
      .transition()
      .duration("r", 75);
}

updateScore();

var starter = svg.append("g")
  .attr("class", "starterButton")
  .style("cursor", "pointer")
  .on("click", timerStarter);

function timerStarter() {
  d3.select(this).select("circle")
    .transition()
    .attr("r", 0)
  d3.select(this).select("text")
    .transition()
    .style("display", "none")
  timer = setInterval(timeKeeper, 1000);
}

starter.append("circle")
  .attr("class", "starterButton")
  .attr("r", 170)
  .attr("fill", "black")
  .attr("cx", w / 2)
  .attr("cy", 180)

starter.append("text")
  .attr("fill", "white")
  .style("font-size", "4.5em")
  .attr("x", w / 2)
  .attr("y", 205)
  .attr("text-anchor", "middle")
  .text("GO!")

function timeKeeper() {
  count++;
  svg.selectAll("text.timerText").text(count + " sec");
}

// Fancy underline experiment for titles

var rawLineLeft = svg.append("line")
  .attr("class", "rawLeft")
  .attr("stroke", "green")
  .attr("stroke-width", 2)
  .attr("x1", 220)
  .attr("y1", 420)
  .attr("x2", 120)
  .attr("y2", 420);

var rawLineRight = svg.append("line")
  .attr("stroke", "green")
  .attr("stroke-width", 2)
  .attr("x1", 220)
  .attr("y1", 420)
  .attr("x2", 320)
  .attr("y2", 420);

var minimalLineLeft = svg.append("line")
  .attr("stroke", "gold")
  .attr("stroke-width", 2)
  .attr("x1", 687)
  .attr("y1", 420)
  .attr("x2", 587)
  .attr("y2", 420);

var minimalLineRight = svg.append("line")
  .attr("stroke", "gold")
  .attr("stroke-width", 2)
  .attr("x1", 687)
  .attr("y1", 420)
  .attr("x2", 787)
  .attr("y2", 420);

var heavyLine = svg.append("line")
  .attr("stroke", "red")
  .attr("stroke-width", 2)
  .attr("x1", 1153)
  .attr("y1", 420)
  .attr("x2", 1053)
  .attr("y2", 420);

var heavyLine = svg.append("line")
  .attr("stroke", "red")
  .attr("stroke-width", 2)
  .attr("x1", 1153)
  .attr("y1", 420)
  .attr("x2", 1253)
  .attr("y2", 420);

// Drag functions

function dragStarted(d) {
  d3.select(this).raise()
}

function dragging(d) {
  d3.select(this).select("circle")
    .attr("cx", d.cx = d3.event.x)
    .attr("cy", d.cy = d3.event.y);
    var foodCenterX = d.cx;
    var foodCenterY = d.cy;
  d3.select(this).select("image")
    .attr("x", d.x = d3.event.x - 210)
    .attr("y", d.y = d3.event.y - 210);
  d3.select(this).select("text")
    .attr("x", d.x = d3.event.x )
    .attr("y", d.y = d3.event.y );
  if((foodCenterX < 440) && (foodCenterY > 400 && foodCenterY < 900)) {
    d3.select(this).select("circle")
      .attr("fill", "green");
  } else if ((foodCenterX > 440 && foodCenterX < 940) && (foodCenterY > 400 && foodCenterY < 900)) {
    d3.select(this).select("circle")
      .attr("fill", "gold");
  } else if ((foodCenterX > 940) && (foodCenterY > 400 && foodCenterY < 900)) {
    d3.select(this).select("circle")
      .attr("fill", "red");
  } else {
    d3.select(this).select("circle")
      .attr("fill", "black");
  }
}

var unprocessed = 1;
var minimal = 1;
var heavy = 1;

function dragEnded(d) {
  d3.select(this)
  var foodCenterX = d.cx;
  var foodCenterY = d.cy;
  var imageX = d.x;
  var imageY = d.y;
  if ((foodCenterX < 440) && (foodCenterY > 400 && foodCenterY < 900)) {
    if (d.processed == "raw") {
      d3.select(this).select("circle")
        .transition()
        .duration(1000)
        .attr("r", 0)
        .attr("fill", "green");
      d3.select(this).select("image")
        .transition()
        .duration(1000)
        .attr("x", imageX)
        .attr("y", imageY)
        .attr("width", 0)
        .attr("height", 0);
      d3.select(this).select("text")
        .transition()
        .duration(250)
        .style("font-size", 0);
      svg.append("text")
        .attr("class", "totalGroup")
        .attr("x", 220)
        .attr("y", 430 + (unprocessed * 30))
        .style("font-size", "0em")
        .attr("fill", "black")
        .attr("text-anchor", "middle")
        .style("cursor", "pointer")
        .text(d.name);
      unprocessed++;
      correctCounter[0].count++;
      updateScore();
    } else {
      d3.select(this).select("circle")
        .transition()
        .duration(200)
        .attr("r", 170)
        .transition()
        .duration(200)
        .attr("r", 150)
        .transition()
        .duration(200)
        .attr("r", 160);
      // playBadAudio();
    }
  } else if ((foodCenterX > 440 && foodCenterX < 940) && (foodCenterY > 400 && foodCenterY < 900)) {
    if (d.processed == "minimal") {
      d3.select(this).select("circle")
        .transition()
        .duration(1000)
        .attr("r", 0)
        .attr("fill", "gold");
      d3.select(this).select("image")
        .transition()
        .duration(1000)
        .attr("x", imageX)
        .attr("y", imageY)
        .attr("width", 0)
        .attr("height", 0);
      d3.select(this).select("text")
        .transition()
        .duration(250)
        .style("font-size", 0);
      svg.append("text")
        .attr("class", "totalGroup")
        .attr("x", 687)
        .attr("y", 430 + (minimal * 30))
        .style("font-size", "0em")
        .attr("fill", "black")
        .attr("text-anchor", "middle")
        .style("cursor", "pointer")
        .text(d.name);
      minimal++;
      correctCounter[0].count++;
      updateScore();
    } else {
      d3.select(this).select("circle")
        .transition()
        .duration(200)
        .attr("r", 170)
        .transition()
        .duration(200)
        .attr("r", 150)
        .transition()
        .duration(200)
        .attr("r", 160);
      // playBadAudio();
    }
  } else if ((foodCenterX > 940) && (foodCenterY > 400 && foodCenterY < 900)) {
    if (d.processed == "heavy") {
      d3.select(this).select("circle")
        .transition()
        .duration(1000)
        .attr("r", 0)
        .attr("fill", "red");
      d3.select(this).select("image")
        .transition()
        .duration(1000)
        .attr("x", imageX)
        .attr("y", imageY)
        .attr("width", 0)
        .attr("height", 0);
      d3.select(this).select("text")
        .transition()
        .duration(250)
        .style("font-size", 0);
      svg.append("text")
        .attr("class", "totalGroup")
        .attr("x", 1153)
        .attr("y", 430 + (heavy * 30))
        .style("font-size", "0em")
        .attr("fill", "black")
        .attr("text-anchor", "middle")
        .style("cursor", "pointer")
        .text(d.name);
      heavy++;
      correctCounter[0].count++;
      updateScore();
    } else {
      d3.select(this).select("circle")
        .transition()
        .duration(200)
        .attr("r", 170)
        .transition()
        .duration(200)
        .attr("r", 150)
        .transition()
        .duration(200)
        .attr("r", 160);
      // playBadAudio();
    }
  }
}











//
