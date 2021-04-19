var dataset = {
  nodes: [
    { id: "Adam" },
    { id: "Bob" },
    { id: "Carrie" },
    { id: "Donovan" },
    { id: "Edward" },
    { id: "Felicity" },
    { id: "George" },
    { id: "Hannah" },
    { id: "Iris" },
    { id: "Jerry" }
  ],
  links: [
    { source: "Adam", target: "Bob" },
    { source: "Adam", target: "Carrie" },
    { source: "Bob", target: "Carrie" },
    { source: "Carrie", target: "Donovan" },
    { source: "Carrie", target: "Edward" },
    { source: "Felicity", target: "Carrie" },
    { source: "Adam", target: "Felicity" },
    { source: "Adam", target: "George" },
    { source: "Hannah", target: "George" },
    { source: "Iris", target: "Jerry" }
  ]
};

var webBox = document.getElementById("webBox").getBoundingClientRect();
var w = webBox.width;
var h = webBox.height;
var radius = 20;

var svg = d3.select("#webBox")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

var colors = d3.scaleOrdinal(d3.schemeCategory20);

var simulation = d3.forceSimulation(dataset.nodes)
  .velocityDecay(0.85)
  .force("charge", d3.forceManyBody().strength(-1000))
  .force("link", d3.forceLink(dataset.links).id(function(d) { return d.id; }).distance(100))
  .force("x", d3.forceX())
  .force("y", d3.forceY())
  .alphaTarget(1)
  .force("center", d3.forceCenter(w / 2, h / 2))
  .force("collide", d3.forceCollide(25))
  .on("tick", ticked);

var main = svg.append("g")
  .attr("class", "everything");

var link = main.append("g")
  .attr("stroke", "#ccc")
  .attr("stroke-width", 1.5)
  .selectAll(".link");

var node = main.append("g")
  .attr("stroke", "#fff")
  .attr("stroke-width", 1.5)
  .selectAll(".node");

var nodeText = main.append("g")
  // .attr("font-size", "1em")
  // .attr("fill", "black")
  .selectAll(".nodeText");

// Node Maker elements

// Node Maker Button

var nodeMaker = main.append("g")
  .attr("class", "nodeMaker")
  .style("cursor", "pointer")
  .on("click", newNode)
  .on("mouseover", hoverEffectOn)
  .on("mouseout", hoverEffectOff);

nodeMaker.append("circle")
  .attr("r", 25)
  .attr("fill", "#1c488e")
  .attr("cx", 50)
  .attr("cy", 50)
  .style("opacity", .75);

nodeMaker.append("text")
  .attr("fill", "white")
  .attr("font-size", "2em")
  .attr("text-anchor", "middle")
  .attr("x", 50)
  .attr("y", 60)
  .text("+");

// Node Maker Box

function newNode() {

  var newNodeModule = svg.append("g")
    .attr("class", "noder")

  var box = newNodeModule.append("rect")
    .attr("width", 300)
    .attr("height", 300)
    .attr("x", 100)
    .attr("y", 100)
    .attr("rx", 15)
    .attr("ry", 15)
    .attr("fill", "white")
    .style("filter", "url(#drop-shadow)")

  var titleInput = newNodeModule.append("g")
    .attr("class", "noder");

  titleInput.append("text")
    .attr("fill", "black")
    .attr("font-size", "1.5em")
    .attr("text-anchor", "middle")
    .attr("x", 210)
    .attr("y", 140)
    .text("Title ID")

  titleInput.append("foreignObject")
    .attr("x", 170)
    .attr("y", 150)
    .attr("width", 100)
    .attr("height", 20)
    .html(function(d) {
      return '<input type="text" id="newID" value="Tester" />'
    });

  var linkInput = newNodeModule.append("g")
    .attr("class", "noder");

  linkInput.append("text")
    .attr("fill", "black")
    .attr("font-size", "1.25em")
    .attr("text-anchor", "middle")
    .attr("x", 220)
    .attr("y", 200)
    .text("Connect To");

// Dropdown with dataset.nodes.id values

  var linkDropdown = linkInput.append("foreignObject")
    .attr("x", 160)
    .attr("y", 200)
    .attr("width", 100)
    .attr("height", 100)
    .append("xhtml:body")
    .append("div")
    .append("select")
      .attr("id", "linkSelect")

  linkDropdown.selectAll("option")
    .data(dataset.nodes)
    .enter()
    .append("option")
    .attr("value", function(d, i) { return dataset.nodes[i].id })
    .text(function(d, i) { return dataset.nodes[i].id })

  var createNodeButton = newNodeModule.append("g")
    .attr("class", "noder")
    .style("cursor", "pointer")
    .on("mouseover", hoverEffectOn)
    .on("mouseout", hoverEffectOff)
    .on("click", createNode)
    // .on("click", closer);

  createNodeButton.append("rect")
    .attr("x", 250)
    .attr("y", 325)
    .attr("rx", 15)
    .attr("ry", 15)
    .attr("width", 100)
    .attr("height", 40)
    .attr("fill", "green")
    .style("opacity", .75)

  createNodeButton.append("text")
    .attr("x", 300)
    .attr("y", 350)
    .attr("fill", "white")
    .attr("text-anchor", "middle")
    .attr("font-size", "1em")
    .text("+ Node")

  var close = newNodeModule.append("g")
    .attr("class", "noder")
    .style("cursor", "pointer")
    .on("mouseover", hoverEffectOn)
    .on("mouseout", hoverEffectOff)
    .on("click", closer);

  close.append("circle")
    .attr("r", 20)
    .attr("fill", "red")
    .attr("cx", 140)
    .attr("cy", 140)
    .style("opacity", .75)

  close.append("text")
    .attr("fill", "white")
    .attr("font-size", "1.5em")
    .attr("text-anchor", "middle")
    .attr("x", 140)
    .attr("y", 145)
    .text("x")
}

// Create Node Button

function createNode() {
  var idNode = document.getElementById("newID");
  var linker = document.getElementById("linkSelect");
  // console.log("New ID - " + idNode.value);
  // console.log("Link to - " + linker.value);

  dataset.nodes.push({ id: idNode.value });
  dataset.links.push({ source: linker.value, target: idNode.value });

  closer();
  restart();
}

// Draw the web

function restart() {

  //Update nodes
  node = node.data(dataset.nodes, function(d) { return d.id; });
  node.exit().remove();
  node = node.enter()
    .append("circle")
    .attr("fill", function(d, i) {
      return colors(i);
    })
    .attr("r", 15)
    .merge(node)
    .on("mouseover", function(d) {
      var circleID = d.id;
      d3.select(this)
        .style("cursor", "pointer");
      d3.select(this)
        .transition()
        .attr("r", 35);
      for (i = 0; i < nodeText._groups[0].length; i++) {
        if (nodeText._groups[0][i].id == circleID) {
          d3.select(nodeText._groups[0][i])
          .transition()
          .attr("fill", "blue")
        }
      }
    })
    .on("mouseout", function(d) {
      var circleID = d.id;
      d3.select(this)
        .transition()
        .attr("r", 15);
      for (i = 0; i < nodeText._groups[0].length; i++) {
        if (nodeText._groups[0][i].id == circleID) {
          d3.select(nodeText._groups[0][i])
          .transition()
          .attr("fill", "black")
        }
      }
    })
    .call(d3.drag()
      .on("start", dragStarted)
      .on("drag", dragging)
      .on("end", dragEnded));

  node.append("title")
    .text(function(d) { return d.id; });

  nodeText = nodeText.data(dataset.nodes, function(d) { return d.id; });
  nodeText.exit().remove();
  nodeText = nodeText.enter()
    .append("text")
    .attr("id", function(d) {
      return d.id;
    })
    .attr("fill", "black")
    .attr("font-size", "1em")
    .attr("text-anchor", "middle")
    .text(function(d) {
      return d.id;
    })
    .merge(nodeText)
    // .on("mouseover", function(d) {
    //
    // })
    // .on("mouseout", function(d) {
    //
    // });

  //Update links
  link = link.data(dataset.links, function(d) { return d.source.id + "-" + d.target.id; });
  link.exit().remove();
  link = link.enter()
    .append("line")
    .merge(link);

  simulation.nodes(dataset.nodes)
  simulation.force("link").links(dataset.links);
  simulation.alpha(1).restart();

}

restart();

// console.log(nodeText._groups[0][0].id);
console.log(node._groups[0][0])


//Hover effects on Buttons

function hoverEffectOn() {
  d3.select(this).selectAll("circle")
    .style("opacity", 1)
  d3.select(this).selectAll("rect")
    .style("opacity", 1)
    // .style("filter", "url(#drop-shadow)");
}

function hoverEffectOff() {
  d3.select(this).selectAll("circle")
    .style("opacity", .75)
  d3.select(this).selectAll("rect")
    .style("opacity", .75)
    // .style("filter", null);
}

//Tick and drag handlers

function ticked() {
  link
    .attr("x1", function(d) { return d.source.x; })
    .attr("y1", function(d) { return d.source.y; })
    .attr("x2", function(d) { return d.target.x; })
    .attr("y2", function(d) { return d.target.y; });

  node
    .attr("cx", function(d) {
      return (d.x = Math.max(radius, Math.min(w - radius, d.x)));
    })
    .attr("cy", function(d) {
      return (d.y = Math.max(radius, Math.min(h - radius, d.y)));
    })

  nodeText
    .attr("x", function(d) { return d.x; })
    .attr("y", function(d) { return d.y; })
}

function dragStarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragging(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragEnded(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

// Box shadow for svg shapes

// filters go in defs element
var defs = svg.append("defs");

// create filter with id #drop-shadow
// height=130% so that the shadow is not clipped
var filter = defs.append("filter")
    .attr("id", "drop-shadow")
    .attr("height", "130%");

// SourceAlpha refers to opacity of graphic that this filter will be applied to
// convolve that with a Gaussian with standard deviation 3 and store result
// in blur
filter.append("feGaussianBlur")
    .attr("in", "SourceAlpha")
    .attr("stdDeviation", 5)
    .attr("result", "blur");

// translate output of Gaussian blur to the right and downwards with 2px
// store result in offsetBlur
filter.append("feOffset")
    .attr("in", "blur")
    .attr("dx", 5)
    .attr("dy", 5)
    .attr("result", "offsetBlur");

// overlay original SourceGraphic over translated blurred opacity by using
// feMerge filter. Order of specifying inputs is important!
var feMerge = filter.append("feMerge");

feMerge.append("feMergeNode")
    .attr("in", "offsetBlur");
feMerge.append("feMergeNode")
    .attr("in", "SourceGraphic");

// Close and remove element

function closer() {
  d3.selectAll("g.noder")
    .remove();
}
