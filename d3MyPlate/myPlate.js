var dataset = [ 1, 1, 1, 1 ];
var holderData = [
  {
    name: "Avocado",
    image: "images/avocadoCircle.png",
    type: "fruit"
  },
  {
    name: "Beef",
    image: "images/beefCircle.png",
    type: "protein"
  },
  {
    name: "Bread",
    image: "images/breadCircle.png",
    type: "grain"
  },
  {
    name: "Butter",
    image: "images/butterCircle.png",
    type: "dairy"
  },
  {
    name: "Cantaloupe",
    image: "images/cantaloupeCircle.png",
    type: "fruit"
  },
  {
    name: "Cauliflower",
    image: "images/cauliflowerCircle.png",
    type: "veggie"
  },
  {
    name: "Cheese",
    image: "images/cheeseCircle.png",
    type: "dairy"
  },
  {
    name: "Corn",
    image: "images/cornCircle.png",
    type: "grain"
  },
  {
    name: "Cucumber",
    image: "images/cucumberCircle.png",
    type: "veggie"
  },
  {
    name: "Feta",
    image: "images/fetaCircle.png",
    type: "dairy"
  },
  {
    name: "Frog",
    image: "images/frogCircle.png",
    type: "protein"
  },
  {
    name: "Grapes",
    image: "images/grapeCircle.png",
    type: "fruit"
  },
  {
    name: "Icecream",
    image: "images/icecreamCircle.png",
    type: "dairy"
  },
  {
    name: "Injera",
    image: "images/injeraCircle.png",
    type: "grain"
  },
  {
    name: "Kiwi",
    image: "images/kiwiCircle.png",
    type: "fruit"
  },
  {
    name: "Lychee",
    image: "images/lycheeCircle.png",
    type: "fruit"
  },
  {
    name: "Mozzarella",
    image: "images/mozzarellaCircle.png",
    type: "dairy"
  },
  {
    name: "Naan",
    image: "images/naanCircle.png",
    type: "grain"
  },
  {
    name: "Noodles",
    image: "images/noodleCircle.png",
    type: "grain"
  },
  {
    name: "Peanuts",
    image: "images/peanutsCircle.png",
    type: "protein"
  },
  {
    name: "Pork",
    image: "images/porkCircle.png",
    type: "protein"
  },
  {
    name: "Raisins",
    image: "images/raisinCircle.png",
    type: "fruit"
  },
  {
    name: "Shrimp",
    image: "images/shrimpCircle.png",
    type: "protein"
  },
  {
    name: "Snow Peas",
    image: "images/snowpeasCircle.png",
    type: "veggie"
  },
  {
    name: "Squash",
    image: "images/squashCircle.png",
    type: "veggie"
  },
  {
    name: "Strawberries",
    image: "images/strawberryCircle.png",
    type: "fruit"
  },
  {
    name: "Sweet Potato",
    image: "images/sweetpotatoCircle.png",
    type: "veggie"
  },
  {
    name: "Tomatoes",
    image: "images/tomatoCircle.png",
    type: "veggie"
  },
  {
    name: "Watermelon",
    image: "images/watermelonCircle.png",
    type: "fruit"
  },
  {
    name: "Yogurt",
    image: "images/yogurtCircle.png",
    type: "dairy"
  }
];

var s1 = document.getElementById("slideWhistle");
var s2 = document.getElementById("failureSound");
var s3 = document.getElementById("fanfareSound");
var s4 = document.getElementById("funnyButton");
var s5 = document.getElementById("oops");
var s6 = document.getElementById("gameOver");
var s7 = document.getElementById("uhOh");

var goodSoundFx = [s1, s2, s3, s4, s6];
var badSoundFx = [s1, s2, s5, s7];
var randomGood;
var randomBad;

function playBadAudio() {
  randomBad = Math.floor(Math.random() * 4);
  var sound = badSoundFx[randomBad];
  sound.play();
}

function playGoodAudio() {
  randomGood = Math.floor(Math.random() * 3);
  var sound = goodSoundFx[randomGood];
  sound.play();
}

var myPlateBox = document.getElementById("myPlateBox").getBoundingClientRect();
var svgW = myPlateBox.width;
var svgH = myPlateBox.height;
var outerRadius = svgW / 5 - 10;
var innerRadius = 15;
var cornerRadius = 15;
var padAngle = 0.04;
var arc = d3.arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius)
  .cornerRadius(cornerRadius)
  .padAngle(padAngle);
var color = d3.scaleOrdinal()
	.range([ "orange", "purple", "green", "red" ]);
var labels = [ "Grains", "Proteins", "Vegetables", "Fruits" ];
var pie = d3.pie();

var svg = d3.select("#myPlateBox")
  .append("svg")
  .attr("width", svgW)
  .attr("height", svgH);

var arcs = svg.selectAll("g.arc")
  .data(pie(dataset))
  .enter()
  .append("g")
    .attr("class", "arc")
    .attr("transform", "translate(" + (outerRadius + 25) + "," + (outerRadius + 10) + ")")
    .on("click", function(d, i) {
      if (i == 0) {
        console.log("Grains")
      } else if (i == 1) {
        console.log("Proteins")
      } else if (i == 2) {
        console.log("Veggies")
      } else if (i == 3) {
        console.log("Fruits")
      }
    });

var paths = arcs.append("path")
  .attr("id", function(d, i) {
    return "arc-" + i;
  })
  .attr("fill", function(d, i) {
    return color(i);
  })
  .attr("fill-opacity", .55)
  .attr("d", arc)
  .attr("stroke", function(d, i) {
    return color(i);
  })
  .attr("stroke-width", "5px")
  .on("mouseover", function(d) {
    d3.select(this)
      .style("cursor", "pointer")
      .transition()
      .attr("fill-opacity", .75)
  })
  .on("mouseout", function(d) {
    d3.select(this)
      .transition()
      .attr("fill-opacity", .55)
  });


arcs.append("text")
  .attr("class", "label")
  .attr("transform", function(d) {
    return "translate(" + arc.centroid(d) + ")";
  })
  .attr("text-anchor", "middle")
  .style("fill", "white")
  .text(function(d, i) {
    return labels[i];
  })
  .on("mouseover", function(d) {
    d3.select(this)
      .style("cursor", "pointer")
  });

var dairyData = [
  { name: "Dairy" }
]

var dairyEl = svg.selectAll("g.dairy")
  .data(dairyData)
  .enter()
  .append("g")
    .attr("class", "dairy");

dairyEl.append("circle")
  .attr("r", svgW / 12)
  .attr("fill", "blue")
  .attr("fill-opacity", .55)
  .attr("cx", svgW * .5)
  .attr("cy", svgH * .15)
  .attr("stroke", "blue")
  .attr("stroke-width", "5px")
  .on("mouseover", function(d) {
    d3.select(this)
      .style("cursor", "pointer")
      .transition()
      .attr("fill-opacity", .7);
  })
  .on("mouseout", function(d) {
    d3.select(this)
      .transition()
      .attr("fill-opacity", .55);
  });

dairyEl.append("text")
  .attr("class", "dairyLabel")
  .attr("x", svgW * .5)
  .attr("y", svgH * .15)
  .attr("text-anchor", "middle")
  .style("fill", "white")
  .text("Dairy")
  .text(function(d) {
    return d.name;
  });

var ingredientHeader = svg.append("text")
  .attr("class", "ingredientHeader")
  .attr("x", svgW * .75)
  .attr("y", svgH * .1)
  .text("What am I?");

var partitionEl = svg.append("line")
  .attr("x1", svgW * .65)
  .attr("y1", svgH * .1)
  .attr("x2", svgW * .65)
  .attr("y2", svgH * .45)
  .attr("stroke-width", 1)
  .attr("stroke", "gray");

// var infoPartitionEl = svg.append("line")
//   .attr("x1", svgW - 700)
//   .attr("y1", svgH - 375)
//   .attr("x2", svgW - 700)
//   .attr("y2", svgH - 50)
//   .attr("stroke-width", 1)
//   .attr("stroke", "gray");

//timer Stuff

var count = 0;
var timer;

svg.append("g")
  .attr("class", "timeStop")

svg.append("circle")
  .attr("r", 90)
  .attr("cx", 925)
  .attr("cy", 225)
  .attr("fill", "white")
  .attr("stroke", "black")
  .attr("stroke-width", 3)
  .style("cursor", "pointer")
  .on("click", function() {
    clearInterval(timer);
    playGoodAudio();
  });

svg.append("text")
  .attr("class", "timerText")
  .attr("x", 925)
  .attr("y", 230)
  .attr("fill", "black")
  .style("font-size", "2em")
  .attr("text-anchor", "middle")
  .text(count)

//end timer

var ingredientEl = svg.selectAll("g.tester")
  .data(d3.shuffle(holderData))
  .enter()
  .append("g")
  .attr("width", 250)
  .attr("height", 250)
  .attr("x", 800)
  .attr("y", 100)
  .on("mouseover", function(d) {
    d3.select(this)
    .style("cursor", "grab");

    d3.select(this).select("text")
    .transition()
    .duration(400)
    .style("opacity", 1)
    .style("text-shadow", "2px 2px 4px #000000")
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

ingredientEl.append("circle")
  .attr("class", "foodCircle")
  .attr("r", 95)
  .attr("cx", 925)
  .attr("cy", 225)

var imgW = 250;
var imgH = 250;
var imgX = 800;
var imgY = 100;

ingredientEl.append("image")
  .attr("class", "foodPic")
  .attr("width", imgW)
  .attr("height", imgH)
  .attr("x", imgX)
  .attr("y", imgY)
  .attr("xlink:href", function(d) {
    return d.image;
  });

ingredientEl.append("text")
  .attr("class", "foodLabel")
  .attr("x", 925)
  .attr("y", 225)
  .style("opacity", 0)
  .attr("text-anchor", "middle")
  .style("fill", "#e8edf4")
  .text(function(d) {
    return d.name;
  })

var correctCounter = [ {count: 0} ];

var updateScore = function() {
  var correctCircle = svg.selectAll("g.correct")
    .data(correctCounter)
    .enter()
    .append("g");

  correctCircle.append("circle")
    .attr("class", "correct")
    .attr("r", 75)
    .attr("cx", svgW - 525)
    .attr("cy", svgH - 550)
    .attr("fill", "white")
    .attr("stroke", "black")
    .attr("stroke-width", 5);

  correctCircle.append("line")
    .attr("x1", svgW - 570)
    .attr("y1", svgH - 520)
    .attr("x2", svgW - 480)
    .attr("y2", svgH - 580)
    .attr("stroke", "black")
    .attr("stroke-width", 2)

  correctCircle.append("text")
    .attr("text-anchor", "middle")
    .attr("x", svgW - 555)
    .attr("y", svgH - 555)
    .attr("fill", "black")
    .style("font-size", "3em")
    .text(function(d) {
      return d.count;
    });

  correctCircle.append("text")
    .attr("text-anchor", "middle")
    .attr("x", svgW - 500)
    .attr("y", svgH - 505)
    .attr("fill", "black")
    .style("font-size", "3em")
    .text(holderData.length)

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
    .attr("x", d.x = d3.event.x - 125)
    .attr("y", d.y = d3.event.y - 125);
  d3.select(this).select("text")
    .attr("x", d.x = d3.event.x )
    .attr("y", d.y = d3.event.y );
  if((foodCenterX > 500 && foodCenterX < 600) && (foodCenterY > 75 && foodCenterY < 165)) {
    d3.select(this).select("circle")
      .attr("fill", "blue");
  } else if ((foodCenterX > 0 && foodCenterX < 205) && (foodCenterY > 0 && foodCenterY < 205)){
    d3.select(this).select("circle")
      .attr("fill", "red")
  } else if ((foodCenterX > 205 && foodCenterX < 410) && (foodCenterY > 0 && foodCenterY < 205)){
    d3.select(this).select("circle")
      .attr("fill", "orange")
  } else if ((foodCenterX > 0 && foodCenterX < 205) && (foodCenterY > 205 && foodCenterY < 410)){
    d3.select(this).select("circle")
      .attr("fill", "green")
  } else if ((foodCenterX > 205 && foodCenterX < 410) && (foodCenterY > 205 && foodCenterY < 410)){
    d3.select(this).select("circle")
      .attr("fill", "purple")
  } else {
    d3.select(this).select("circle")
      .attr("fill", "black")
  }
}

var dairy = 1;
var grain = 1;
var protein = 1;
var veggie = 1;
var fruit = 1;

function dragEnded(d) {
  d3.select(this)
  var foodCenterX = d.cx;
  var foodCenterY = d.cy;
  var imageX = d.x;
  var imageY = d.y;
  if((foodCenterX > 500 && foodCenterX < 600) && (foodCenterY > 75 && foodCenterY < 165)) {
    if (d.type == "dairy") {
      d3.select(this).select("circle")
        .transition()
        .duration(1000)
        .attr("r", 0)
        .attr("fill", "blue");
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
        .attr("x", svgW - 200)
        .attr("y", (svgH - 390 + (dairy * 25)))
        .attr("fill", "black")
        .attr("text-anchor", "middle")
        .style("cursor", "pointer")
        .text(d.name);
      dairy++;
      correctCounter[0].count++;
      updateScore();
    } else {
      d3.select(this).select("circle")
        .transition()
        .duration(200)
        .attr("r", 100)
        .transition()
        .duration(200)
        .attr("r", 90)
        .transition()
        .duration(200)
        .attr("r", 95);
      playBadAudio();
    }

    console.log("Dairy!");
  } else if ((foodCenterX > 0 && foodCenterX < 205) && (foodCenterY > 0 && foodCenterY < 205)){
    if (d.type == "fruit") {
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
        .attr("x", svgW - 1000)
        .attr("y", (svgH - 390 + (fruit * 25)))
        .attr("fill", "black")
        .attr("text-anchor", "middle")
        .style("cursor", "pointer")
        .text(d.name);
      fruit++;
      correctCounter[0].count++;
      updateScore();
    } else {
      d3.select(this).select("circle")
        .transition()
        .duration(200)
        .attr("r", 100)
        .transition()
        .duration(200)
        .attr("r", 90)
        .transition()
        .duration(200)
        .attr("r", 95);
        playBadAudio();
    }

    console.log("Fruit!")
  } else if ((foodCenterX > 205 && foodCenterX < 410) && (foodCenterY > 0 && foodCenterY < 205)){
    if (d.type == "grain") {
      d3.select(this).select("circle")
        .transition()
        .duration(1000)
        .attr("r", 0)
        .attr("fill", "orange");
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
        .attr("x", svgW - 600)
        .attr("y", (svgH - 390 + (grain * 25)))
        .attr("fill", "black")
        .attr("text-anchor", "middle")
        .style("cursor", "pointer")
        .text(d.name);
      grain++;
      correctCounter[0].count++;
      updateScore();
    } else {
      d3.select(this).select("circle")
        .transition()
        .duration(200)
        .attr("r", 100)
        .transition()
        .duration(200)
        .attr("r", 90)
        .transition()
        .duration(200)
        .attr("r", 95);
        playBadAudio();
    }

    console.log("Grains!")
  } else if ((foodCenterX > 0 && foodCenterX < 205) && (foodCenterY > 205 && foodCenterY < 410)){
    if (d.type == "veggie") {
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
        .attr("x", svgW - 800)
        .attr("y", (svgH - 390 + (veggie * 25)))
        .attr("fill", "black")
        .attr("text-anchor", "middle")
        .style("cursor", "pointer")
        .text(d.name);
      veggie++;
      correctCounter[0].count++;
      updateScore();
    } else {
      d3.select(this).select("circle")
        .transition()
        .duration(200)
        .attr("r", 100)
        .transition()
        .duration(200)
        .attr("r", 90)
        .transition()
        .duration(200)
        .attr("r", 95);
        playBadAudio();

    }

    console.log("Veggies!")
  } else if ((foodCenterX > 205 && foodCenterX < 410) && (foodCenterY > 205 && foodCenterY < 410)){
    if (d.type == "protein") {
      d3.select(this).select("circle")
        .transition()
        .duration(1000)
        .attr("r", 0)
        .attr("fill", "purple");
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
        .attr("x", svgW - 400)
        .attr("y", (svgH - 390 + (protein * 25)))
        .attr("fill", "black")
        .attr("text-anchor", "middle")
        .style("cursor", "pointer")
        .text(d.name);
      protein++;
      correctCounter[0].count++;
      updateScore();
    } else {
      d3.select(this).select("circle")
        .transition()
        .duration(200)
        .attr("r", 100)
        .transition()
        .duration(200)
        .attr("r", 90)
        .transition()
        .duration(200)
        .attr("r", 95);
        playBadAudio();

    }
    console.log("Proteins!")
  } else {
    d3.select(this).select("circle")
      .attr("fill", "black")
  }
}

svg.append("text")
  .attr("class", "totalLabel")
  .attr("x", svgW - 1000)
  .attr("y", svgH - 400)
  .attr("fill", "red")
  .attr("text-anchor", "middle")
  .text("Fruits");

svg.append("line")
  .attr("class", "totalLine")
  .attr("x1", svgW - 1050)
  .attr("y1", svgH - 390)
  .attr("x2", svgW - 950)
  .attr("y2", svgH - 390)
  .attr("stroke-width", 2.5)
  .attr("stroke", "red");

svg.append("text")
  .attr("class", "totalLabel")
  .attr("x", svgW - 800)
  .attr("y", svgH - 400)
  .attr("fill", "green")
  .attr("text-anchor", "middle")
  .text("Veggies");

svg.append("line")
  .attr("class", "totalLine")
  .attr("x1", svgW - 850)
  .attr("y1", svgH - 390)
  .attr("x2", svgW - 750)
  .attr("y2", svgH - 390)
  .attr("stroke-width", 2.5)
  .attr("stroke", "green");

svg.append("text")
  .attr("class", "totalLabel")
  .attr("x", svgW - 600)
  .attr("y", svgH - 400)
  .attr("fill", "orange")
  .attr("text-anchor", "middle")
  .text("Grains");

svg.append("line")
  .attr("class", "totalLine")
  .attr("x1", svgW - 650)
  .attr("y1", svgH - 390)
  .attr("x2", svgW - 550)
  .attr("y2", svgH - 390)
  .attr("stroke-width", 2.5)
  .attr("stroke", "orange");

svg.append("text")
  .attr("class", "totalLabel")
  .attr("x", svgW - 400)
  .attr("y", svgH - 400)
  .attr("fill", "purple")
  .attr("text-anchor", "middle")
  .text("Proteins");

svg.append("line")
  .attr("class", "totalLine")
  .attr("x1", svgW - 450)
  .attr("y1", svgH - 390)
  .attr("x2", svgW - 350)
  .attr("y2", svgH - 390)
  .attr("stroke-width", 2.5)
  .attr("stroke", "purple");

svg.append("text")
  .attr("class", "totalLabel")
  .attr("x", svgW - 200)
  .attr("y", svgH - 400)
  .attr("fill", "blue")
  .attr("text-anchor", "middle")
  .text("Dairy");

svg.append("line")
  .attr("class", "totalLine")
  .attr("x1", svgW - 250)
  .attr("y1", svgH - 390)
  .attr("x2", svgW - 150)
  .attr("y2", svgH - 390)
  .attr("stroke-width", 2.5)
  .attr("stroke", "blue");

//Timer feature

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
  .attr("r", 100)
  .attr("fill", "black")
  .attr("cx", 925)
  .attr("cy", 225)

starter.append("text")
  .attr("fill", "white")
  .style("font-size", "3.5em")
  .attr("x", 925)
  .attr("y", 245)
  .attr("text-anchor", "middle")
  .text("GO!")

function timeKeeper() {
  count++;
  svg.selectAll("text.timerText").text(count + " sec");
}


// svg.append("text")
//   .attr("class", "info")
//   .attr("x", svgW - 900)
//   .attr("y", svgH - 375)
//   .attr("fill", "black")
//   .attr("text-anchor", "middle")
//   .text("Info")
//
// svg.append("line")
//   .attr("class", "infoLine")
//   .attr("x1", svgW - 950)
//   .attr("y1", svgH - 360)
//   .attr("x2", svgW - 850)
//   .attr("y2", svgH - 360)
//   .attr("stroke-width", 2.5)
//   .attr("stroke", "black")














//
