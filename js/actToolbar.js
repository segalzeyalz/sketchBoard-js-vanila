window.onload = function(){

    //Define all the elements of the toolbar

    var rectBtn = document.getElementById("rectBtn");
    rectBtn.addEventListener("click", randRect);

    var ovalBtn = document.getElementById("ovalBtn");
    ovalBtn.addEventListener("click", randOval);

    var colorBtn = document.getElementById("colorBtn");
    colorBtn.addEventListener("change", changeColor);


    var deleteBtn = document.getElementById("deleteBtn");
    deleteBtn.addEventListener("click", removeShape);
    document.addEventListener("keydown", removeShapeByDelete);

    function removeShapeByDelete(e){
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '46'){
      removeShape(e);
    }
  }


  var canvas = document.getElementById("canvas");
 // canvas.addEventListener("click", changeSelect);
  
    var closeLoad = document.getElementById("closeLoad");
    closeLoad.addEventListener("click", closeWindow);
    closeLoad.addEventListener("keypress", closeWindowByEsc);

    var LoadBtn = document.getElementById("LoadBtn");
    LoadBtn.addEventListener("click", openLoadModal);

    var SaveBtn = document.getElementById("SaveBtn");
    SaveBtn.addEventListener("click", openSaveModal);

    		// When the user clicks on <span> (x), close the modal

    
}