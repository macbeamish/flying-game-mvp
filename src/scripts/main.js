
var firstscreen = true;
console.log("main.js loaded");

if (firstscreen) {
	loadPage("../src/views/language.html",'overlay');
	console.log('overlaying first screen');
	firstscreen = false;
}

document.addEventListener("DOMContentLoaded", function () {
	const sceneEl = document.querySelector("a-scene")
	const arSystem = sceneEl.systems["mindar-image-system"]

const flyingTarget = document.querySelector('#flying-game-target');
flyingTarget.addEventListener("targetFound", event => {
  console.log("flying-game-target found");
  loadPage("../src/views/flying-game-overlay.html",'overlay');
});
});


  function loadPage(url, divId) {
	var xmlhttp;
	if (window.XMLHttpRequest) {
	  xmlhttp = new XMLHttpRequest();
	} else {
	  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		document.getElementById(divId).innerHTML = this.responseText;
	  }
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
  }


function removeContent() {
    document.getElementById('overlay').innerHTML = '';
}

function addDiv(divId, containerId) {
    const newDiv = document.createElement('div');
    newDiv.setAttribute('id', divId);
    document.getElementById(containerId).appendChild(newDiv);
}

function removeDiv(divId) {
    const divToRemove = document.getElementById(divId);
    if (divToRemove) {
        divToRemove.remove();
    }
}

function buildPage(url, divId) {
	const newDiv = document.createElement('div');
    newDiv.setAttribute('id', 'overlay');
    document.getElementById('pg').appendChild(newDiv);
	var xmlhttp;
	if (window.XMLHttpRequest) {
	  xmlhttp = new XMLHttpRequest();
	} else {
	  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		document.getElementById(divId).innerHTML = this.responseText;
	  }
	};
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
  }