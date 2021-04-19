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

var svg = d3.select("#webBox")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

var colors = d3.scaleOrdinal(d3.schemeCategory20);

var simulation = d3.forceSimulation()
  .force("charge", d3.forceManyBody())
  .force("link", d3.forceLink().id(function(d) { return d.id; }).distance(50).strength(.5))
  .force("center", d3.forceCenter(w / 2, h / 2))
  .force("collide", d3.forceCollide(15));

var main = svg.append("g")
  .attr("class", "everything");

var link = svg.append("g")
  .attr("class", "links")
  .selectAll("line")
  .data(dataset.links)
  .enter()
    .append("line")
    .style("stroke", "#ccc")
    .style("stroke-width", 1);

var node = svg.append("g")
  .attr("class", "nodes")
  .selectAll("circle")
  .data(dataset.nodes)
  .enter()
    .append("circle")
    .attr("r", 10)
    .style("fill", function(d, i) {
      return colors(i);
    })
    .call(d3.drag()
      .on("start", dragStarted)
      .on("drag", dragging)
      .on("end", dragEnded));

var tooltip = node.append("title")
  .text(function(d) {
    return d.id;
  });

simulation.nodes(dataset.nodes)
  .on("tick", ticked);

simulation.force("link")
  .links(dataset.links);

function ticked() {
  link
    .attr("x1", function(d) { return d.source.x; })
    .attr("y1", function(d) { return d.source.y; })
    .attr("x2", function(d) { return d.target.x; })
    .attr("y2", function(d) { return d.target.y; });

  node
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; });
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
