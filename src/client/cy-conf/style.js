export default `
core {
	active-bg-color: #fff;
	active-bg-opacity: 0.333;
}

edge {
	curve-style: bezier;
	opacity: 0.4;
	width: 2;
	z-index: 0;
	overlay-opacity: 0;
    events: no;
    content: data(name);
    target-arrow-shape: triangle;
    font-size: 6;
}

node {
	width: 40;
	height: 40;
	font-size: 9;
	font-weight: bold;
	min-zoomed-font-size: 4;
	label: data(name);
	text-wrap: wrap;
	text-max-width: 50;
	text-valign: center;
	text-halign: center;
	text-events: yes;
	color: #000;
	text-outline-width: 1;
	text-outline-color: #fff;
	text-outline-opacity: 1;
	overlay-color: #fff;
}

edge[interaction = "cc"] {
	line-color: #FACD37;
	opacity: 0.666;
	z-index: 9;
	width: 4;
}

node[NodeType = "Cheese"],
node[NodeType = "CheeseType"] {
	background-color: #AAEEAA;
}

node[NodeType = "Cheese"][Quality],
node[NodeType = "CheeseType"][Quality] {
	width: mapData(Quality, 70, 100, 20, 50);
	height: mapData(Quality, 70, 100, 20, 50);
}

node[NodeType = "WhiteWine"] {
	background-color: #EEAAAA;
}

edge[interaction = "cw"] {
	line-color: white;
}

node[NodeType = "RedWine"] {
	background-color: #EEEEAA;
}

edge[interaction = "cr"] {
	line-color: #DE3128;
}

node[NodeType = "Cider"] {
	background-color: #A4EB34;
	text-outline-color: #A4EB34;
}

node.highlighted {
	min-zoomed-font-size: 0;
  z-index: 9999;
}

edge.highlighted {
	opacity: 0.8;
	width: 4;
	z-index: 9999;
}

.faded {
  events: no;
}

node.faded {
  opacity: 0.08;
}

edge.faded {
  opacity: 0.06;
}

.hidden {
	display: none;
}

`;
