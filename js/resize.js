var	rect = {},
  mouseX, 
  mouseY,
	startWidht,
	startHeight,
	dragTL=dragBL=dragTR=dragBR=false;

function mouseDownResize(e) {
rect = e.target.parentElement;
 if(rect == null || rect.className != "drag selected")
		return;

  // 4 cases:
  // 1. top left
  if(e.target.className == "corners cornerUpLeft" ){
    dragTL = true;
  }
  // 2. top right
  else if( e.target.className == "corners cornerUpRight" ){
    dragTR = true;

  }
  // 3. bottom left
  else if( e.target.className == "corners cornerBtmLeft"){
    dragBL = true;

  }
  // 4. bottom right
  else if( e.target.className == "corners cornerBtmRight" ){
    dragBR = true;

  }
  else {
	return;
  }
  mouseX = e.clientX;
  mouseY = e.clientY
  startWidht = parseInt(document.defaultView.getComputedStyle(rect).width,null);
  startHeight = parseInt(document.defaultView.getComputedStyle(rect).height, null);
  
  document.documentElement.addEventListener('mousemove', mouseMoveResize, false);
  document.documentElement.addEventListener('mouseup', mouseUpResize, false);
}

function mouseUpResize() {
  dragTL = dragTR = dragBL = dragBR = false;
}

function mouseMoveResize(e) {
  var width,height,topVal,leftVal;
  if(dragTL){
    width = startWidht + mouseX - e.clientX;
    height = startHeight + mouseY - e.clientY;
    leftVal = e.pageX - 13;
    topVal = e.pageY - 130 ;
  } else if(dragTR) {
    width = startWidht + e.clientX-mouseX;
    height = startHeight + mouseY - e.clientY;
    topVal = e.pageY - 130;
  } else if(dragBL) {
    width = startWidht + mouseX - e.clientX;
    height = startHeight + e.clientY-mouseY;
    leftVal = e.pageX - 13;  
  } else if(dragBR) {
    width = startWidht + e.clientX-mouseX;
    height = startHeight + e.clientY-mouseY;
  }
  
  rect.style.width = width + 'px';
   rect.style.height = height + 'px';
    rect.style.top = topVal + 'px';
	 rect.style.left = leftVal + 'px';
   
}

