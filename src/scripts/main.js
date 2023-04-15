var GENERAL_ONBOARDING_COMPLETE = false;
var FIRST_SCREEN = true;

console.log("main.js loaded");

if (FIRST_SCREEN) {
	loadPage("../src/views/language.html",'overlay');
	console.log('overlaying first screen');
	FIRST_SCREEN = false;
}

AFRAME.registerComponent("target-find-ui-trigger", {
	init: function () {
		if(GENERAL_ONBOARDING_COMPLETE){
			const flyingTarget = document.querySelector('#flying-game-target');
			const photoTarget = document.querySelector('#photo-game-target');

			flyingTarget.addEventListener("targetFound", (event) => {
				console.log("flying target found")
				loadPage("../src/views/flying-game-overlay.html",'overlay');
			
			})
			flyingTarget.addEventListener("targetLost", (event) => {
				console.log("flying target lost")
				loadPage("../src/views/flying-game-overlay.html",'overlay');
			})
		}
		
	},
})

function enableScan(){
	const flyingScanner = document.querySelector('#flying-game-target');
	const photoScanner = document.querySelector('#photo-game-target');

	flyingScanner.setAttribute('mindar-image-target', "targetIndex: 1");
	photoScanner.setAttribute('mindar-image-target', "targetIndex: 0");
}


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