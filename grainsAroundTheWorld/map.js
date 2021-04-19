var grains = [
  { "id": "0", "name": "Pita Bread", "culture": "Middle Eastern", "madeFrom": "Wheat", "image": "images/pitaCircle.png", "description": "A flat bread sometimes with a pocket." },
  { "id": "1", "name": "Couscous", "culture": "Middle Eastern", "madeFrom": "Durum", "image": "images/couscousCircle.png", "description": "Made from the hard part of the grain." },
  { "id": "2", "name": "Bagel", "culture": "Middle Eastern", "madeFrom": "Wheat or Rye", "image": "images/bagelCircle.png", "description": "Dough that is boiled and then baked." },
  { "id": "3", "name": "Rice Noodles", "culture": "Asian", "madeFrom": "Rice", "image": "images/riceNoodleCircle.png", "description": "Traditionally served in brothy soups." },
  { "id": "4", "name": "Oatmeal", "culture": "European", "madeFrom": "Oats", "image": "images/oatmealCircle.png", "description": "Served for breakfast in many regions of the world." },
  { "id": "6", "name": "Cornbread", "culture": "American", "madeFrom": "Corn", "image": "images/cornbreadCircle.png", "description": "A cornerstone of Southern cooking." },
  { "id": "8", "name": "Tortilla", "culture": "Latin American", "madeFrom": "Wheat or Corn", "image": "images/cornTortillaCircle.png", "description": "Widely used in areas previously colonized by Spain." },
  { "id": "9", "name": "Soda Bread", "culture": "Irish", "madeFrom": "Wheat", "image": "images/sodaBreadCircle.png", "description": "Made with baking soda instead of traditional yeast." },
  { "id": "10", "name": "Pasta", "culture": "Italian", "madeFrom": "Wheat", "image": "images/noodleCircle.png", "description": "There are over 300 different types and shapes." },
  { "id": "11", "name": "Baguette", "culture": "French", "madeFrom": "Wheat", "image": "images/baguetteCircle.png", "description": "A very specific loaf of bread that is defined by law." },
  { "id": "12", "name": "Injera", "culture": "Ethopia", "madeFrom": "Teff", "image": "images/injeraCircle.png", "description": "Slightly spongy and use more as a scoop for other foods." },
  { "id": "13", "name": "Appam", "culture": "Asian", "madeFrom": "Rice", "image": "images/appamCircle.png", "description": "Made from a fermented batter and coconut milk." },
  { "id": "15", "name": "Pumpernickel Bread", "culture": "European", "madeFrom": "Rye", "image": "images/pumpernickelCircle.png", "description": "Heavy, slightly sweet bread. At one time considered peasant fare." },
  { "id": "16", "name": "Naan", "culture": "Indian", "madeFrom": "Wheat", "image": "images/naanCircle.png", "description": "A thick flatbread." },
  { "id": "7", "name": "Fry Bread", "culture": "Original American", "madeFrom": "Wheat", "image": "images/fryBreadCircle.png", "description": "Made from the ingredients available during the 'Long Walk'." },
  { "id": "5", "name": "Grits", "culture": "American", "madeFrom": "Corn", "image": "images/gritsCircle.png", "description": "A hearty grain servable with any meal." }
];

var mapBox = document.getElementById("mapBox").getBoundingClientRect();
var w = mapBox.width;
var h = mapBox.height;

var svg = d3.select("#mapBox")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

var projection = d3.geoMercator()
  .scale(200)
  .translate([w / 2, h / 1.5]);

var path = d3.geoPath()
  .projection(projection);

// var svg = map.append("g")
//   .attr("class", "everything");

var color = d3.scaleOrdinal(d3.schemeCategory20);

var url = "https://raw.githubusercontent.com/trevorhein-matc/portfolio/master/countries.json";

d3.json(url, function(err, json) {
  svg.selectAll("path")
  .data(json.features)
  .enter()
  .append("path")
  .attr("d", path)
  .attr("stroke-width", 1)
  .attr("stroke", "white")
  .style("fill", function(d) {
    return color(d.properties.abbrev);
  });
  nodeAppend();
})

function nodeAppend() {
  var node = svg.selectAll("g.grain")
    .data(grains)
    .enter()
    .append("g")
    .attr("class", "grain")
    .attr("width", 75)
    .attr("height", 75)
    .attr("x", function(d, i) {
      return i * 75 + 50;
    })
    .attr("y", 113)
    .on("mouseover", function(d) {
      d3.select(this)
      .style("cursor", "grab");
    })
    .on("click", moreInfo)
    .call(d3.drag()
      .on("start", dragStarted)
      .on("drag", dragged)
      .on("end", dragEnded));

    node.append("circle")
      .attr("class", "foodCircle")
      .attr("r", 32)
      .attr("cx", function(d, i) {
        if (i < 8) {
          return i * 75 + 50;
        } else {
          return (i * 75 + 50) - 600;
        }
      })
      .attr("cy", function(d, i) {
        if (i < 8) {
          return 150;
        } else {
          return 225;
        }
      })

    node.append("image")
      .attr("class", "foodImage")
      .attr("width", 75)
      .attr("height", 75)
      .attr("x", function(d, i) {
        if (i < 8) {
          return i * 75 + 13;
        } else {
          return (i * 75 + 13) - 600;
        }
      })
      .attr("y", function(d, i) {
        if (i < 8) {
          return 113;
        } else {
          return 188;
        }
      })
      .attr("xlink:href", function(d) {
        return d.image;
      });
}

var moreInfo = function(d) {
  var grainPic = document.createElement("img");
  grainPic.src = d.image;
  var src = document.getElementById("grainPic");
  src.innerHTML = "";
  src.appendChild(grainPic);

  var title = d.name;
  d3.select("#title").text(d.name);
  // var culture = d.culture;
  // d3.select("#culture").text(culture);
  var description = d.description;
  d3.select("#madeFrom").text(description);
}

function dragStarted(d) {
    d3.select(this).raise();
}

function dragged(d) {
  d3.select(this).select("circle")
  .attr("transform", "translate(-24 , -24)")
    .attr("cx", d.cx = d3.event.x)
    .attr("cy", d.cy = d3.event.y);
    var foodCenterX = d.cx;
    var foodCenterY = d.cy;
  d3.select(this).select("image")
  .attr("transform", "translate(-61 , -61)")
    .attr("x", d.x = d3.event.x)
    .attr("y", d.y = d3.event.y);
  if((foodCenterX > 825 && foodCenterX < 875) && (foodCenterY > 495 && foodCenterY < 560)) {
    d3.select(this).select("circle")
      .attr("fill", "blue");
  } else if ((foodCenterX > 1015 && foodCenterX < 1130) && (foodCenterY > 500 && foodCenterY < 560)) {
    d3.select(this).select("circle")
      .attr("fill", "gold");
  } else if ((foodCenterX > 250 && foodCenterX < 430) && (foodCenterY > 440 && foodCenterY < 515)) {
    d3.select(this).select("circle")
      .attr("fill", "orange");
  } else if ((foodCenterX > 300 && foodCenterX < 410) && (foodCenterY > 530 && foodCenterY < 580)) {
    d3.select(this).select("circle")
      .attr("fill", "purple");
  } else if ((foodCenterX > 630 && foodCenterX < 775) && (foodCenterY > 450 && foodCenterY < 550)) {
    d3.select(this).select("circle")
      .attr("fill", "green");
  } else if ((foodCenterX > 900 && foodCenterX < 980) && (foodCenterY > 480 && foodCenterY < 580)) {
    d3.select(this).select("circle")
      .attr("fill", "purple")
  } else if ((foodCenterX > 630 && foodCenterX < 775) && (foodCenterY > 350 && foodCenterY < 450)) {
    d3.select(this).select("circle")
      .attr("fill", "red")
  } else {
    d3.select(this).select("circle")
      .attr("fill", "black");
  }
}

function dragEnded(d) {
  d3.select(this).select("circle")
  var foodCenterX = d.cx;
  var foodCenterY = d.cy;
  var imageX = d.x;
  var imageY = d.y;
  // Middle East
  if((foodCenterX > 825 && foodCenterX < 875) && (foodCenterY > 495 && foodCenterY < 560)) {
    if (d.id == 0 || d.id == 2) {
      d3.select(this).select("circle")
        .transition()
        .duration(1000)
        .attr("r", 0)
        .attr("fill", "blue");
      d3.select(this).select("image")
        .transition()
        .duration(1000)
        .attr("x", imageX + 37.5)
        .attr("y", imageY + 37.5)
        .attr("width", 0)
        .attr("height", 0);
      } else {
        d3.select(this).select("circle")
          .transition()
          .duration(200)
          .attr("r", 42)
          .transition()
          .duration(200)
          .attr("r", 22)
          .transition()
          .duration(200)
          .attr("r", 32);
        // playBadAudio();
      }
    // Israeli
    // } else if ((foodCenterX > 775 && foodCenterX < 810) && (foodCenterY > 475 && foodCenterY < 560)) {
    //   if (d.id == 2 || d.id == 14) {
    //     d3.select(this).select("circle")
    //       .transition()
    //       .duration(1000)
    //       .attr("r", 0)
    //       .attr("fill", "green");
    //     d3.select(this).select("image")
    //       .transition()
    //       .duration(1000)
    //       .attr("x", imageX)
    //       .attr("y", imageY)
    //       .attr("width", 0)
    //       .attr("height", 0);
    //     } else {
    //       d3.select(this).select("circle")
    //         .transition()
    //         .duration(200)
    //         .attr("r", 42)
    //         .transition()
    //         .duration(200)
    //         .attr("r", 22)
    //         .transition()
    //         .duration(200)
    //         .attr("r", 32);
    //       // playBadAudio();
    //     }
        //Asia
    } else if ((foodCenterX > 1015 && foodCenterX < 1130) && (foodCenterY > 500 && foodCenterY < 560)) {
      if (d.id == 3 || d.id == 13) {
        d3.select(this).select("circle")
          .transition()
          .duration(1000)
          .attr("r", 0)
          .attr("fill", "gold");
        d3.select(this).select("image")
          .transition()
          .duration(1000)
          .attr("x", imageX + 37.5)
          .attr("y", imageY + 37.5)
          .attr("width", 0)
          .attr("height", 0);
      } else {
        d3.select(this).select("circle")
          .transition()
          .duration(200)
          .attr("r", 42)
          .transition()
          .duration(200)
          .attr("r", 22)
          .transition()
          .duration(200)
          .attr("r", 32);
        // playBadAudio();
      }
    // North Am.
    } else if ((foodCenterX > 250 && foodCenterX < 430) && (foodCenterY > 440 && foodCenterY < 515)) {
      if (d.id == 5 || d.id == 6 || d.id == 7) {
        d3.select(this).select("circle")
          .transition()
          .duration(1000)
          .attr("r", 0)
          .attr("fill", "orange");
        d3.select(this).select("image")
          .transition()
          .duration(1000)
          .attr("x", imageX + 37.5)
          .attr("y", imageY + 37.5)
          .attr("width", 0)
          .attr("height", 0);
      } else {
        d3.select(this).select("circle")
          .transition()
          .duration(200)
          .attr("r", 42)
          .transition()
          .duration(200)
          .attr("r", 22)
          .transition()
          .duration(200)
          .attr("r", 32);
        // playBadAudio();
      }
    // Latin Am
    } else if ((foodCenterX > 300 && foodCenterX < 410) && (foodCenterY > 530 && foodCenterY < 580)) {
      if (d.id == 8) {
        d3.select(this).select("circle")
          .transition()
          .duration(1000)
          .attr("r", 0)
          .attr("fill", "purple");
        d3.select(this).select("image")
          .transition()
          .duration(1000)
          .attr("x", imageX + 37.5)
          .attr("y", imageY + 37.5)
          .attr("width", 0)
          .attr("height", 0);
      } else {
        d3.select(this).select("circle")
          .transition()
          .duration(200)
          .attr("r", 42)
          .transition()
          .duration(200)
          .attr("r", 22)
          .transition()
          .duration(200)
          .attr("r", 32);
        // playBadAudio();
      }
    // South Am
    // } else if ((foodCenterX > 300 && foodCenterX < 410) && (foodCenterY > 530 && foodCenterY < 580)) {
    //   if (d.id == 17) {
    //     d3.select(this).select("circle")
    //       .transition()
    //       .duration(1000)
    //       .attr("r", 0)
    //       .attr("fill", "purple");
    //     d3.select(this).select("image")
    //       .transition()
    //       .duration(1000)
    //       .attr("x", imageX)
    //       .attr("y", imageY)
    //       .attr("width", 0)
    //       .attr("height", 0);
    //     } else {
    //       d3.select(this).select("circle")
    //         .transition()
    //         .duration(200)
    //         .attr("r", 42)
    //         .transition()
    //         .duration(200)
    //         .attr("r", 22)
    //         .transition()
    //         .duration(200)
    //         .attr("r", 32);
    //       // playBadAudio();
    //     }
    // North Africa
  } else if ((foodCenterX > 630 && foodCenterX < 775) && (foodCenterY > 450 && foodCenterY < 550)) {
      if (d.id == 1 || d.id == 12) {
        d3.select(this).select("circle")
          .transition()
          .duration(1000)
          .attr("r", 0)
          .attr("fill", "green");
        d3.select(this).select("image")
          .transition()
          .duration(1000)
          .attr("x", imageX + 37.5)
          .attr("y", imageY + 37.5)
          .attr("width", 0)
          .attr("height", 0);
        } else {
          d3.select(this).select("circle")
            .transition()
            .duration(200)
            .attr("r", 42)
            .transition()
            .duration(200)
            .attr("r", 22)
            .transition()
            .duration(200)
            .attr("r", 32);
          // playBadAudio();
        }
      // India
    } else if ((foodCenterX > 900 && foodCenterX < 980) && (foodCenterY > 480 && foodCenterY < 580)) {
      if (d.id == 16) {
        d3.select(this).select("circle")
          .transition()
          .duration(1000)
          .attr("r", 0)
          .attr("fill", "purple");
        d3.select(this).select("image")
          .transition()
          .duration(1000)
          .attr("x", imageX + 37.5)
          .attr("y", imageY + 37.5)
          .attr("width", 0)
          .attr("height", 0);
        } else {
          d3.select(this).select("circle")
            .transition()
            .duration(200)
            .attr("r", 42)
            .transition()
            .duration(200)
            .attr("r", 22)
            .transition()
            .duration(200)
            .attr("r", 32);
          // playBadAudio();
        }
      // Europe
    } else if ((foodCenterX > 630 && foodCenterX < 775) && (foodCenterY > 350 && foodCenterY < 450)) {
      if (d.id == 4 || d.id == 9 || d.id == 10 || d.id == 11 || d.id == 15) {
        d3.select(this).select("circle")
          .transition()
          .duration(1000)
          .attr("r", 0)
          .attr("fill", "purple");
        d3.select(this).select("image")
          .transition()
          .duration(1000)
          .attr("x", imageX + 37.5)
          .attr("y", imageY + 37.5)
          .attr("width", 0)
          .attr("height", 0);
        } else {
          d3.select(this).select("circle")
            .transition()
            .duration(200)
            .attr("r", 42)
            .transition()
            .duration(200)
            .attr("r", 22)
            .transition()
            .duration(200)
            .attr("r", 32);
          // playBadAudio();
        }
    }
  }

//Geo location tester

// function showCoords(event) {
//     var x = event.clientX;
//     var y = event.clientY;
//     var coor = "X coords: " + x + ", Y coords: " + y;
//     console.log(coor);
// }
