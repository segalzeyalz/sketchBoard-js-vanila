var startX = 0;            // mouse starting positions
var startY = 0;
var offsetX = 0;           // current element offset
var offsetY = 0;
var dragElement;           // needs to be passed from OnMouseDown to OnMouseMove
var oldZIndex = 0;         // we temporarily increase the z-index during drag

InitDragDrop();

function InitDragDrop()
{
    document.onmousedown = OnMouseDown;
    document.onmouseup = OnMouseUp;
}

function OnMouseDown(e)
{
    var target = e.target;
    if (target.className == 'drag selected' || target.className == 'drag'){
        // grab the mouse position
        startX = e.clientX;
        startY = e.clientY;
        
        // grab the clicked element's position
        offsetX = parseInt(target.style.left);
        offsetY = parseInt(target.style.top);
        
        // bring the clicked element to the front while it is being dragged
        oldZIndex = target.style.zIndex;
        target.style.zIndex = 10000;
        
        // we need to access the element in OnMouseMove
        dragElement = target;

        // tell our code to start moving the element with the mouse
        document.onmousemove = OnMouseMove;
    }
}
function OnMouseMove(e)
{
    if (e == null) 
        var e = window.event; 
    // this is the actual "drag code"
    dragElement.style.left = (offsetX + e.clientX - startX) + 'px';
    dragElement.style.top = (offsetY + e.clientY - startY) + 'px';
}
//When the mouse is released, we remove the event handlers and reset dragElement:

function OnMouseUp(e)
{
    if (dragElement != null)
    {
        dragElement.style.zIndex = oldZIndex;
        document.onmousemove = null;  
        dragElement = null;
    }
}
