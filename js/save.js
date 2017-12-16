


var loadWinData = document.getElementById("loadWinData");
    loadWinData.addEventListener("click", restoreData);

// Get reference to the "canvas"
var canvas = document.getElementById("canvas");
var savedNames = JSON.parse(localStorage.getItem("savedNames"));
if(savedNames == null)
	savedNames = [];
// Save the content of the canvas to localStorage
function saveData(){
  var name = document.getElementById("saveName").value;		
  localStorage.setItem(name, canvas.innerHTML);
  
  savedNames.push(name);
  localStorage.setItem("savedNames",JSON.stringify(savedNames));
  saveModal.getElementsByClassName("modal-header")[0].style.display="none";
  saveModal.getElementsByClassName("modal-body")[0].children[0].innerHTML = "Saved "+name;
  setTimeout(function() {
	if(saveModal.style.display == "block")
	saveModal.style.display = "none";
  },3000);
  
}

// Get localStorage data
function restoreData(){
  var selectedName = document.getElementById("loadName").value		
  canvas.innerHTML = localStorage.getItem(selectedName);
  var shapes = document.getElementsByClassName("drag");
  for(var i=0;i<shapes.length;i++) {
    shapes[i].addEventListener("click", selectEventHandler);
    for(var j=0;j<shapes[i].children.length;j++) {
      var child = shapes[i].children[j];
      child.addEventListener('mousedown', mouseDownResize, false);
    }
  }
  
  loadModal.style.display = "none";
}

// Get the modal
		var saveModal = document.getElementById('saveModal');
		var loadModal = document.getElementById('loadModal');


		// When the user clicks the button, open the modal 
		var openSaveModal = function() {
			saveModal.style.display = "block";
			saveModal.getElementsByClassName("modal-header")[0].style.display="block";
			saveModal.getElementsByClassName("modal-body")[0].children[0].innerHTML = 'Please give a save name:<input type="text" id="saveName"/><button onclick="saveData()">Save</button>';
		}
		
		var openLoadModal = function() {
			var savedNames = JSON.parse(localStorage.getItem("savedNames"));
			var select = document.getElementById("loadName"); 
			while (select.hasChildNodes()) {
				select.removeChild(select.lastChild);
			}
			for(var i = 0; i < savedNames.length; i++) {
				var opt = savedNames[i];
				var el = document.createElement("option");
				el.textContent = opt;
				el.value = opt;
				select.appendChild(el);
			}
			loadModal.style.display = "block";
			
		}



		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == saveModal || event.target == loadModal) {
				saveModal.style.display = "none";
				loadModal.style.display = "none";
			}
		}
		
		    		// When the user clicks on <span> (x), close the modal
		var closeWindow = function() {
			saveModal.style.display = "none";
			loadModal.style.display = "none";
		}

    var closeWindowByEsc = function(){
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '27'){
      closeWindow(e);
    }
  }