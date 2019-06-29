var blockId = 1;
var rezNumber = 1;
var earthNumber = 1;
var voltMeterNumber = 1;

var nodes = new vis.DataSet([
]);

// create an array with edges
var edges = new vis.DataSet([
]);

// create a network
var container = document.getElementById('parent');
// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};
var options = {
    clickToUse: true,
    autoResize: false,
    interaction: { multiselect: true },
    edges: {
        smooth: {
            type: "vertical",
            forceDirection: "horizontal",
            roundness: 0
        },
    },
};

// initialize your network!
var network = new vis.Network(container, data, options);

function addRezist() {
    nodes.add({id: blockId, label: `Резистор ${rezNumber}`, shape: 'image', image: './images/rezistor.png', size: 20});
    blockId++;
    rezNumber++;
}

function addEarth() {
    nodes.add({id: blockId, label: ` Земля ${earthNumber}`, shape: 'image', image: './images/earth.png'});
    blockId++;
    earthNumber++;
}

function addVoltage() {
    nodes.add({id: blockId, label: `E ${voltMeterNumber}`,shape: 'image', image: './images/voltage.png'});
    blockId++;
    voltMeterNumber++;
}

function addLine() {
    const selectedNodes = network.getSelectedNodes();
    edges.add({from: selectedNodes[0], to:selectedNodes[1], length: 200});
}

function removeElement() {
    const selectedNodes = network.getSelectedNodes();
    network.deleteSelected(selectedNodes);
}

const menuItems = document.querySelectorAll('.menuItems');

    window.addEventListener('contextmenu', event =>{
      event.preventDefault()
      contextMenu.style.top = `${event.pageY}px`
      contextMenu.style.left = `${event.pageX}px`
      contextMenu.style.transform = 'scale(1)'
    })

    window.addEventListener('click', event =>{
        let condition = contextMenu.style.transform == 'scale(1)' && event.target != contextMenu
        for(let li of menuItems) {
            condition += event.target != li
        }
        if(condition === menuItems.length +1) {
            contextMenu.style.transform = 'scale(0)'
        }
    })




function turnRight(event) {
    const currentElement = document.getElementById(selectedNodes);
    turnRezist(90, currentElement);
    debugger
  }
  function turnRezist(degrees, element) {
    var angle = $("rezNumber").data("angle");
    if (!angle)
      angle = 0;
    angle = +angle + degrees;
    $(element)
    .data("angle", angle)
    .css({ transform: "rotate(" + angle + "deg)", transition: "1s" });
  }