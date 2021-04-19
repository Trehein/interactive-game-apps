var boxLabels = [
  "Flowers, Leaves, Fungi",
  "Seeds, Fruits, Stems, Petioles",
  "Roots, Tubers & Bulbs"
];

var plantData = [
  {
    name: "Cauliflower",
    image: "images/cauliflowerCircle.png",
    part: "leaf"
  },
  {
    name: "Spinach",
    image: "images/spinachCircle.png",
    part: "leaf"
  },
  {
    name: "Lettuce",
    image: "images/lettuceCircle.png",
    part: "leaf"
  },
  {
    name: "Cabbage",
    image: "images/cabbageCircle.png",
    part: "leaf"
  },
  {
    name: "Parsley",
    image: "images/parsleyCircle.png",
    part: "leaf"
  },
  {
    name: "Artichoke",
    image: "images/artichokeCircle.png",
    part: "leaf"
  },
  {
    name: "Mushroom",
    image: "images/mushroomCircle.png",
    part: "leaf"
  },
  {
    name: "Broccoli",
    image: "images/broccoliCircle (1).png",
    part: "leaf"
  },
  {
    name: "Water Cress",
    image: "images/waterCressCircle.png",
    part: "leaf"
  },
  {
    name: "Mustard Greens",
    image: "images/mustardGreensCircle.png",
    part: "leaf"
  },
  {
    name: "Collards",
    image: "images/collardsCircle.png",
    part: "leaf"
  },
  {
    name: "Brussels Sprouts",
    image: "images/brusselSproutsCircle.png",
    part: "leaf"
  },
  {
    name: "Peas",
    image: "images/peasCircle.png",
    part: "fruit"
  },
  {
    name: "Sweet Corn",
    image: "images/cornCircle.png",
    part: "fruit"
  },
  {
    name: "Lima Bean",
    image: "images/limaBeansCircle.png",
    part: "fruit"
  },
  {
    name: "Celery",
    image: "images/celeryCircle.png",
    part: "fruit"
  },
  {
    name: "Okra",
    image: "images/okraCircle.png",
    part: "fruit"
  },
  {
    name: "Zucchini",
    image: "images/zucchiniCircle.png",
    part: "fruit"
  },
  {
    name: "Asparagus",
    image: "images/asparagusCircle.png",
    part: "fruit"
  },
  {
    name: "Snap Bean",
    image: "images/snapBeanCircle.png",
    part: "fruit"
  },
  {
    name: "Cucumber",
    image: "images/cucumberCircle.png",
    part: "fruit"
  },
  {
    name: "Tomato",
    image: "images/tomatoCircle.png",
    part: "fruit"
  },
  {
    name: "Bell Pepper",
    image: "images/bellPepperCircle.png",
    part: "fruit"
  },
  {
    name: "Acorn Squash",
    image: "images/acornSquashCircle.png",
    part: "fruit"
  },
  {
    name: "Beet",
    image: "images/beetCircle.png",
    part: "root"
  },
  {
    name: "Parsnip",
    image: "images/parsnipCircle.png",
    part: "root"
  },
  {
    name: "Radish",
    image: "images/radishCircle.png",
    part: "root"
  },
  {
    name: "Rutabaga",
    image: "images/rutabagaCircle.png",
    part: "root"
  },
  {
    name: "Carrot",
    image: "images/carrotCircle.png",
    part: "root"
  },
  {
    name: "Bamboo Shoots",
    image: "images/bambooShootsCircle.png",
    part: "root"
  },
  {
    name: "Potato",
    image: "images/potatoCircle.png",
    part: "root"
  },
  {
    name: "Yam",
    image: "images/yamCircle.png",
    part: "root"
  },
  {
    name: "Garlic",
    image: "images/garlicCircle.png",
    part: "root"
  },
  {
    name: "Turnip",
    image: "images/turnipCircle.png",
    part: "root"
  },
  {
    name: "Onion",
    image: "images/onionCircle.png",
    part: "root"
  },
  {
    name: "Sweet Potato",
    image: "images/sweetpotatoCircle (1).png",
    part: "root"
  }
];

var svg = document.getElementById("plantPartBox").getBoundingClientRect();
var w = svg.width;
var h = svg.height;

var svg = d3.select("#plantPartBox")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

var imgH = 600;
var imgW = imgH * .9;
var imgX = 10;
var imgY = 100;

svg.append("image")
  .attr("width", imgW)
  .attr("height", imgH)
  .attr("x", imgX)
  .attr("y", imgY)
  .attr("xlink:href", "images/plantAnatomy.jpg");

var containerLabels = svg.selectAll("g.label")
  .data(boxLabels)
  .enter()
  .append("text")
    .attr("class", "catLabel")
    .attr("x", 750)
    .attr("y", function(d, i) {
      return (i * h / 3.5) + 100;
    })
    .attr("text-anchor", "middle")
    .attr("fill", "black")
    .text(function(d) {
      return d;
    })

var partition = svg.append("line")
  .attr("stroke", "gray")
  .attr("stroke-width", 1)
  .attr("x1", 1000)
  .attr("y1", 100)
  .attr("x2", 1000)
  .attr("y2", 750)

var leafLine = svg.append("line")
  .attr("stroke", "green")
  .attr("stroke-width", 2)
  .attr("x1", 650)
  .attr("y1", 120)
  .attr("x2", 850)
  .attr("y2", 120);

var fruitLine = svg.append("line")
  .attr("stroke", "red")
  .attr("stroke-width", 2)
  .attr("x1", 650)
  .attr("y1", 350)
  .attr("x2", 850)
  .attr("y2", 350);

var rootLine = svg.append("line")
  .attr("stroke", "gold")
  .attr("stroke-width", 2)
  .attr("x1", 650)
  .attr("y1", 580)
  .attr("x2", 850)
  .attr("y2", 580);

// Food Elements

var count = 0;
var timer;

svg.append("g")
  .attr("class", "timeStop")

svg.append("circle")
  .attr("r", 100)
  .attr("cx", 1200)
  .attr("cy", 200)
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
  .attr("x", 1200)
  .attr("y", 210)
  .attr("fill", "black")
  .style("font-size", "2em")
  .attr("text-anchor", "middle")
  .text(count)

var foodEl = svg.selectAll("g.food")
  .data(d3.shuffle(plantData))
  .enter()
  .append("g")
  .attr("width", 320)
  .attr("height", 320)
  // .attr("x", (w / 2) - 80)
  // .attr("y", 100)
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
  .attr("r", 115)
  .attr("cx", 1200)
  .attr("cy", 200)
  .attr("fill", "black")

var foodImgW = 300;
var foodImgH = 300;
var foodImgX = 1050;
var foodImgY = 50;

foodEl.append("image")
  .attr("class", "foodPic")
  .attr("width", foodImgW)
  .attr("height", foodImgH)
  .attr("x", foodImgX)
  .attr("y", foodImgY)
  .attr("xlink:href", function(d) {
    return d.image;
  });

foodEl.append("text")
  .attr("class", "foodLabel")
  .attr("x", 1200)
  .attr("y", 210)
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
    .attr("cx", 1200)
    .attr("cy", 450)
    .attr("fill", "white")
    .attr("stroke", "black")
    .attr("stroke-width", 5);

  correctCircle.append("line")
    .attr("x1", 1250)
    .attr("y1", 425)
    .attr("x2", 1150)
    .attr("y2", 475)
    .attr("stroke", "black")
    .attr("stroke-width", 2)

  correctCircle.append("text")
    .attr("text-anchor", "middle")
    .attr("x", 1185)
    .attr("y", 435)
    .attr("fill", "black")
    .style("font-size", "3em")
    .text(function(d) {
      return d.count;
    });

  correctCircle.append("text")
    .attr("text-anchor", "middle")
    .attr("x", 1225)
    .attr("y", 485)
    .attr("fill", "black")
    .style("font-size", "3em")
    .text(plantData.length)

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
  .attr("r", 120)
  .attr("fill", "black")
  .attr("cx", 1200)
  .attr("cy", 200)

starter.append("text")
  .attr("fill", "white")
  .style("font-size", "4.5em")
  .attr("x", 1200)
  .attr("y", 220)
  .attr("text-anchor", "middle")
  .text("GO!")

function timeKeeper() {
  count++;
  svg.selectAll("text.timerText").text(count + " sec");
}

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
    .attr("x", d.x = d3.event.x - 150)
    .attr("y", d.y = d3.event.y - 150);
  d3.select(this).select("text")
    .attr("x", d.x = d3.event.x )
    .attr("y", d.y = d3.event.y );
  if((foodCenterX > 600 && foodCenterX < 900) && (foodCenterY > 150 && foodCenterY < 325)) {
    d3.select(this).select("circle")
      .attr("fill", "green");
  } else if ((foodCenterX > 600 && foodCenterX < 900) && (foodCenterY > 345 && foodCenterY < 550)) {
    d3.select(this).select("circle")
      .attr("fill", "red");
  } else if ((foodCenterX > 600 && foodCenterX < 900) && (foodCenterY > 400 && foodCenterY < 900)) {
    d3.select(this).select("circle")
      .attr("fill", "gold");
  } else {
    d3.select(this).select("circle")
      .attr("fill", "black");
  }
}

var leaf = 1;
var fruit = 1;
var root = 1;

function dragEnded(d) {
  d3.select(this)
  var foodCenterX = d.cx;
  var foodCenterY = d.cy;
  var imageX = d.x;
  var imageY = d.y;
  if ((foodCenterX > 600 && foodCenterX < 900) && (foodCenterY > 150 && foodCenterY < 325)) {
    if (d.part == "leaf") {
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
      // svg.append("text")
      //   .attr("class", "totalGroup")
      //   .attr("x", 220)
      //   .attr("y", 430 + (leaf * 30))
      //   .style("font-size", "0em")
      //   .attr("fill", "black")
      //   .attr("text-anchor", "middle")
      //   .style("cursor", "pointer")
      //   .text(d.name);
      leaf++;
      correctCounter[0].count++;
      updateScore();
    } else {
      d3.select(this).select("circle")
        .transition()
        .duration(200)
        .attr("r", 125)
        .transition()
        .duration(200)
        .attr("r", 110)
        .transition()
        .duration(200)
        .attr("r", 115);
      // playBadAudio();
    }
  } else if ((foodCenterX > 600 && foodCenterX < 900) && (foodCenterY > 345 && foodCenterY < 550)) {
    if (d.part == "fruit") {
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
      // svg.append("text")
      //   .attr("class", "totalGroup")
      //   .attr("x", 687)
      //   .attr("y", 430 + (minimal * 30))
      //   .style("font-size", "0em")
      //   .attr("fill", "black")
      //   .attr("text-anchor", "middle")
      //   .style("cursor", "pointer")
      //   .text(d.name);
      fruit++;
      correctCounter[0].count++;
      updateScore();
    } else {
      d3.select(this).select("circle")
        .transition()
        .duration(200)
        .attr("r", 125)
        .transition()
        .duration(200)
        .attr("r", 110)
        .transition()
        .duration(200)
        .attr("r", 115);
      // playBadAudio();
    }
  } else if ((foodCenterX > 600 && foodCenterX < 900) && (foodCenterY > 400 && foodCenterY < 900)) {
    if (d.part == "root") {
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
      // svg.append("text")
      //   .attr("class", "totalGroup")
      //   .attr("x", 1153)
      //   .attr("y", 430 + (heavy * 30))
      //   .style("font-size", "0em")
      //   .attr("fill", "black")
      //   .attr("text-anchor", "middle")
      //   .style("cursor", "pointer")
      //   .text(d.name);
      root++;
      correctCounter[0].count++;
      updateScore();
    } else {
      d3.select(this).select("circle")
        .transition()
        .duration(200)
        .attr("r", 125)
        .transition()
        .duration(200)
        .attr("r", 110)
        .transition()
        .duration(200)
        .attr("r", 115);
      // playBadAudio();
    }
  }
}
