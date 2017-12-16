function makeShape() {
    var rect = randomizeRectangle();
    var rectDOM = document.createElement("div");
    rectDOM.className = "drag";
    rectDOM.style.border = "1px solid black";
    rectDOM.style.width = rect.width;
    rectDOM.style.height = rect.height;
    rectDOM.style.background = randomizeColor();
    rectDOM.style.top = rect.posY + "px";
    rectDOM.style.left = rect.posX + "px";
    rectDOM.style.position ="absolute";
    rectDOM.className += " selected";

    return createCorners(rectDOM);
}

function randomizeRectangle() {
    var width = Math.random() * 250 + 50;
    var height = Math.random() * 250 + 50;
    if (height <= 20) {
        height = 20;
    }
    var rotationNum = Math.round((Math.random() * 150) + 1);
    var rotation = "rotate(" + rotationNum + "deg)";
    var posX = Math.round(Math.random() * 930);
    var posY = Math.round(Math.random() * 700);

    var randomRecObj = {
        "width": width + "px",
        "height": height + "px",
        "rotation": rotation,
        "posX": posX,
        "posY": posY
    };
    return randomRecObj;
}

function randomizeColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

var selectEventHandler = function(event) {
    var shapeSelected = document.getElementsByClassName("selected");
        var sizeSelected = [];
        sizeSelected.length = shapeSelected.length;
        if (!event.ctrlKey) {
            for (var i = 0; i < shapeSelected.length; i++) {
                if (this !== shapeSelected[i]) {
                    shapeSelected[i].classList.remove("selected");
                }

            }
        }

        this.classList.toggle("selected");
  //      rectDOM.addEventListener("onmousedown", startDrag);
    //    rectDOM.addEventListener("onmouseup", stopDrag);
    }


function createCorners(rectDOM) {
    cornerUpLeft = document.createElement("div");
    cornerUpRight = document.createElement("div");
    cornerBtmLeft = document.createElement("div");
    cornerBtmRight = document.createElement("div");

    cornerUpLeft.className = "corners cornerUpLeft";
    cornerUpRight.className = "corners cornerUpRight";
    cornerBtmLeft.className = "corners cornerBtmLeft";
    cornerBtmRight.className = "corners cornerBtmRight";
	
	//Code added by me - start
	cornerUpLeft.addEventListener('mousedown', mouseDownResize, false);
	cornerUpRight.addEventListener('mousedown', mouseDownResize, false);
	cornerBtmLeft.addEventListener('mousedown', mouseDownResize, false);
	cornerBtmRight.addEventListener('mousedown', mouseDownResize, false);


    rectDOM.appendChild(cornerUpLeft);
    rectDOM.appendChild(cornerUpRight);
    rectDOM.appendChild(cornerBtmLeft);
    rectDOM.appendChild(cornerBtmRight);

    // Event Listener of click - in order to select and deselect items
  rectDOM.addEventListener("click", selectEventHandler);

  //  rectDOM.addEventListener("mousemove",move(rectDOM));
      return rectDOM;
}

function randRect() {
    var rectDOM = makeShape();
    var canvas = document.getElementById("canvas");
    canvas.appendChild(rectDOM);
}

function randOval() {
    var ovalDOM = makeShape();
    ovalDOM.style.borderRadius = "50%";
    var canvas = document.getElementById("canvas");
    canvas.appendChild(ovalDOM);
}

function changeColor(){
    var selectedShapes = document.getElementsByClassName("selected");
    var len = selectedShapes.length;
    for(var i=0; i<len; ++i)
    {
        selectedShapes[i].style.background = document.getElementsByName("color")[0].value;
    }

}

function removeShape(event) {
    var selectedShapes = document.getElementsByClassName("selected");
    var len = selectedShapes.length;
    while (len > 0) {
        selectedShapes[0].parentNode.removeChild(selectedShapes[0]);
        --len;
    }
}

function removeCorners(rectDom) {
    var corners = document.getElementsByClassName("corners");
    var len = corners.length;
    while (len > 0) {
        corners[0].classList.remove("corners");
        --len;
    }

}

