var GENERAL_ONBOARDING_COMPLETE = false;
var FIRST_SCREEN = true;
var PHOTO_FOUND = false;
var FLYING_FOUND = false;
var FLYING_GAME_ONBOARDING_COMPLETE = false;
var PHOTO_GAME_ONBOARDING_COMPLETE = false;
console.log("main.js loaded");

if (FIRST_SCREEN) {
	loadPage("../src/views/language.html",'overlay');
	console.log('overlaying first screen');
	FIRST_SCREEN = false;
}


document.addEventListener("DOMContentLoaded", function() {
	const sceneEl = document.querySelector('a-scene');
	const arSystem = sceneEl.systems["mindar-image-system"];
	const exampleTarget = document.querySelector('#example-target');
	const flyingTarget = document.querySelector('#flying-game-target');
	const photoTarget = document.querySelector('#photo-game-target');

	// arReady event triggered when ready
	sceneEl.addEventListener("arReady", (event) => {
		console.log("MindAR is ready")
	});
	// arError event triggered when something went wrong. Mostly browser compatbility issue
	sceneEl.addEventListener("arError", (event) => {
		console.log("MindAR failed to start")
	});
	// detect target found
	flyingTarget.addEventListener("targetFound", event => {
			console.log("flying target found");
			loadPage("../src/views/flying-game-overlay.html",'overlay');
			initializeFlyingGame();
			resume();
			
		// if(GENERAL_ONBOARDING_COMPLETE == true && FLYING_GAME_ONBOARDING_COMPLETE == false ){
			
			
		// }
		// else if(GENERAL_ONBOARDING_COMPLETE == true && FLYING_GAME_ONBOARDING_COMPLETE == true){
		// 	loadPage("../src/views/flying-game-overlay.html",'overlay');
		
		// 	// countdown and start
		// 	// attach resume(); to a countdown function
		// }
		// else{
		// 	return;
		// }
	});
	// detect target lost
	flyingTarget.addEventListener("targetLost", event => {
		console.log("flying target lost");
		loadPage("../src/views/scan-button-overlay.html",'overlay');
	});



	// Photo game target events 
	photoTarget.addEventListener("targetFound", event => {
		console.log("photo target found");
		if(GENERAL_ONBOARDING_COMPLETE == true && PHOTO_GAME_ONBOARDING_COMPLETE == false ){
			loadPage("../src/views/photo-welcome.html",'overlay');
		}
		else if(GENERAL_ONBOARDING_COMPLETE == true && PHOTO_GAME_ONBOARDING_COMPLETE == true){
			loadPage("../src/views/photo-game-overlay.html",'overlay');
			
		}
		else{
			return;
		}
	});
	// detect target lost
	photoTarget.addEventListener("targetLost", event => {
		console.log("photo target lost");
		loadPage("../src/views/scan-button-overlay.html",'overlay');
	});
});


function enableScan(){
	
	GENERAL_ONBOARDING_COMPLETE = true;
	const flyingScanner = document.querySelector('#flying-game-target');
	const photoScanner = document.querySelector('#photo-game-target');

	flyingScanner.setAttribute('mindar-image-target', "targetIndex: 1");
	photoScanner.setAttribute('mindar-image-target', "targetIndex: 0");
	console.log("scan enabled");
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