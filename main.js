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
    interaction: { multiselect: true }
};

// initialize your network!
var network = new vis.Network(container, data, options);

function addRezist() {
    nodes.add({id: blockId, label: `Резистр ${rezNumber}`, shape: 'box'});
    blockId++;
    rezNumber++;
}

function addEarth() {
    nodes.add({id: blockId, label: ` Земля ${earthNumber}`, shape: 'square'});
    blockId++;
    earthNumber++;
}

function addVoltage() {
    nodes.add({id: blockId, label: `Вольтметр ${voltMeterNumber}`, shape: 'circle'});
    blockId++;
    voltMeterNumber++;
}

function addLine() {
    const selectedNodes = network.getSelectedNodes();
    edges.add({from: selectedNodes[0], to:selectedNodes[1]});
}

function removeElement() {
    const selectedNodes = network.getSelectedNodes();
    network.deleteSelected(selectedNodes);
}