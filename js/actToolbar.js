window.onload = () =>{

    //Define all the elements of the toolbar

    let rectBtn = document.getElementById("rectBtn");
    rectBtn.addEventListener("click", randRect);

    let ovalBtn = document.getElementById("ovalBtn");
    ovalBtn.addEventListener("click", randOval);

    let colorBtn = document.getElementById("colorBtn");
    colorBtn.addEventListener("change", changeColor);


    let deleteBtn = document.getElementById("deleteBtn");
    deleteBtn.addEventListener("click", removeShape);
    document.addEventListener("keydown", removeShapeByDelete);

    function removeShapeByDelete(e){
    if (!e) e = window.event;
    let keyCode = e.keyCode || e.which;
    if (keyCode == '46'){
      removeShape(e);
    }
  }


  let canvas = document.getElementById("canvas");
 // canvas.addEventListener("click", changeSelect);
  
    let closeLoad = document.getElementById("closeLoad");
    closeLoad.addEventListener("click", closeWindow);
    closeLoad.addEventListener("keypress", closeWindowByEsc);

    let LoadBtn = document.getElementById("LoadBtn");
    LoadBtn.addEventListener("click", openLoadModal);

    let SaveBtn = document.getElementById("SaveBtn");
    SaveBtn.addEventListener("click", openSaveModal);

    		// When the user clicks on <span> (x), close the modal
    
}