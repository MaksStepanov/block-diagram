var blockId = 1;
var selectedBlockId;


function addRezist() {
    addElement('rezist');
}

function addEarth() {
    addElement('earth');
    $('.earth').css('width','60px');
    
}

function addVoltage() {
    addElement('voltage');
    $('.voltage').css('border-radius', '50%');
    $('.voltage').css('width','60px');
}
function addElement(param) {
    var parent = document.getElementById('parent');
    var div = document.createElement('div');
    var title = document.createElement('span');
    var br = document.createElement('br');
    var id = `${param}-${blockId}`;
    div.id = id;
    
    title.innerHTML = id;
    title.className = "block-title";
    parent.appendChild(div);
    parent.appendChild(br);
    //div.appendChild(title);
    div.className = `${param} show show_visible`;

    div.addEventListener('click',function(event){
        selectedBlockId = event.currentTarget.id;
        div.className =`${param} show show_visible show_selected `; 
    });
    div.addEventListener('contextmenu',function(event){
        selectedBlockId = event.currentTarget.id;
        div.className =`${param} show show_visible show_selected `; 
    });
    let offsetX;
    let offsetY;
    div.addEventListener('dragstart', function(event) {
        console.log(event.offsetX, event.offsetY);
        offsetX = event.offsetX;
        offsetY = event.offsetY;
    });
    div.addEventListener('dragend', function(event) {
        console.log(event.pageX, event.pageY);
        div.style.top = (event.pageY - offsetY) + 'px';
        div.style.left = (event.pageX - offsetX) + 'px';
    });
    blockId++;
}
function removeElement() {
    var element = document.getElementById( selectedBlockId );
    element.parentNode.removeChild(element);
}
const menuItems = document.querySelectorAll('.menuItems');

window.addEventListener('contextmenu',function(event){
    event.preventDefault()
    contextMenu.style.top = `${event.pageY}px`
    contextMenu.style.left = `${event.pageX}px`
    contextMenu.style.transform = 'scale(1)'
})
window.addEventListener('click',function(event){
    let condition = contextMenu.style.transform == 'scale(1)' && event.target != contextMenu;
    for (let li of menuItems) {
        condition += event.target != li;
    }
    if (condition === menuItems.length + 1) {
        contextMenu.style.transform = 'scale(0)'
    }
})

function turnRight() { 
    turnRezist(90);
  }

  function turnRezist(degrees) {
    var angle = $(".rezist").data("angle");
    if (!angle)
      angle = 0;
    angle = +angle + degrees;
    $(".rezist")
      .data("angle", angle)
      .css({ transform: "rotate(" + angle + "deg)", transition: "1s" });
      
  }
/*
  var mySVG = $('body').connectSVG();
  mySVG.drawLine({
    left_node:'.node1',
    right_node:'.node2',
    horizantal_gap:10
  });
  $( ".node1" ).draggable({
    drag: function(event, ui){mySVG.redrawLines();}
  });
  $( ".node2" ).draggable({
    drag: function(event, ui){mySVG.redrawLines();}
  });
     */ 