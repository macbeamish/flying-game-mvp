// File: main.js
// Purpose: This script handles the main game logic for the A-Frame and MindAR-based game.
// It includes the management of game states, event listeners, and utility functions.

/* Global variables */
var GENERAL_ONBOARDING_COMPLETE = false;
var FIRST_SCREEN = true;
var PHOTO_FOUND = false;
var FLYING_FOUND = false;
var FLYING_GAME_ONBOARDING_COMPLETE = false;
var PHOTO_GAME_ONBOARDING_COMPLETE = false;
var IS_PAUSED = true;
var LANDSPEED = 0.1;
var COLLECTED = 0;
var SCORE = 0;
var GAMEOVER = false;
var FLYING_GAME_ONBOARDING_COMPLETE = false;
console.log("main.js loaded");

function pause() {
	// console.log("Pause button clicked");
	IS_PAUSED = true;
	
}

function resume() {
	// console.log('resume button clicked');
	IS_PAUSED = false;
}

// Load the first UI screen if it hasn't been shown yet
if (FIRST_SCREEN) {
	loadPage("../src/views/flying-game-overlay.html",'overlay');
	console.log('overlaying first screen');
	FIRST_SCREEN = false;
}

// Function Name: loadPage
// Summary: Loads an external HTML file into a specified div element
// Author: Mac
// Parameters:
// url: The URL of the HTML file to be loaded
// divId: The ID of the div element where the HTML content will be loaded
// Returns: None
function loadPage(url, divId) {
	// Check if the browser supports XMLHttpRequest
	if (window.XMLHttpRequest) {
		// If supported, create a new XMLHttpRequest object
		xmlhttp = new XMLHttpRequest();
	} else {
		// If not supported, use the Microsoft.XMLHTTP ActiveX object
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

	// Set up the onreadystatechange event handler
	xmlhttp.onreadystatechange = function() {
		// Check if the request is complete and successful
		if (this.readyState == 4 && this.status == 200) {
			// Load the response text into the specified div element
			document.getElementById(divId).innerHTML = this.responseText;
		}
	};

	// Open the request with the specified URL and send it
	xmlhttp.open("GET", url, true);
	xmlhttp.send();

}


// ------------------------------------------------------------Everything below this line is not currently used ------------------------------------------

//TODO - not currently used
// Function Name: setupEventListeners
// Summary: Sets up event listeners for AR targets and various game events
// Author: Mac
// Parameters: None
// Returns: None
// document.addEventListener("DOMContentLoaded", function() {
// 	// Get references to the A-Frame scene and the MindAR system
// 	const sceneEl = document.querySelector('a-scene');
// 	const arSystem = sceneEl.systems["mindar-image-system"];
// 	const exampleTarget = document.querySelector('#example-target');
// 	const flyingTarget = document.querySelector('#flying-game-target');
// 	const photoTarget = document.querySelector('#photo-game-target');
// 	// arReady event triggered when MindAR is ready to start
// 	sceneEl.addEventListener("arReady", (event) => {
// 		console.log("MindAR is ready");
// 	});

// 	// arError event triggered when there's an issue starting MindAR (usually browser compatibility)
// 	sceneEl.addEventListener("arError", (event) => {
// 		console.log("MindAR failed to start");
// 	});

// 	// Detect when the flying target is found
// 	flyingTarget.addEventListener("targetFound", event => {
// 		console.log("flying target found");
// 		// Load the flying game overlay
// 		loadPage("../src/views/flying-game-overlay.html", 'overlay');
// 		// Initialize the flying game
// 		initializeFlyingGame();
// 		// Resume the game
// 		resume();
// 	});

// 	// Check if the flying game's onboarding process is complete
// 	if (GENERAL_ONBOARDING_COMPLETE == true && FLYING_GAME_ONBOARDING_COMPLETE == false) {
// 		// Onboarding process not complete, add appropriate actions here
// 	} else if (GENERAL_ONBOARDING_COMPLETE == true && FLYING_GAME_ONBOARDING_COMPLETE == true) {
// 		// Onboarding process complete, load the flying game overlay
// 		loadPage("../src/views/flying-game-overlay.html", 'overlay');
// 		// Add countdown and start functionality here
// 		// Attach resume(); to a countdown function
// 	} else {
// 		return;
// 	}

// 	// Detect when the flying target is lost
// 	flyingTarget.addEventListener("targetLost", event => {
// 		console.log("flying target lost");
// 		// Load the scan button overlay
// 		loadPage("../src/views/scan-button-overlay.html", 'overlay');
// 	});

// 	// Photo game target events
// 	// Detect when the photo target is found
// 	photoTarget.addEventListener("targetFound", event => {
// 		console.log("photo target found");
// 		if (GENERAL_ONBOARDING_COMPLETE == true && PHOTO_GAME_ONBOARDING_COMPLETE == false) {
// 			// Load the photo welcome overlay
// 			loadPage("../src/views/photo-welcome.html", 'overlay');
// 		} else if (GENERAL_ONBOARDING_COMPLETE == true && PHOTO_GAME_ONBOARDING_COMPLETE == true) {
// 			// Load the photo game overlay
// 			loadPage("../src/views/photo-game-overlay.html", 'overlay');
// 		} else {
// 			return;
// 		}
// 	});

// 	// Detect when the photo target is lost
// 	photoTarget.addEventListener("targetLost", event => {
// 		console.log("photo target lost");
// 		// Load the scan button overlay
// 		loadPage("../src/views/scan-button-overlay.html", 'overlay');
// 	});
// });



//TODO - not currently in use
// Function Name: enableScan
// Summary: Enables scanning by setting target attributes to entities in index.html for the flying game and photo game targets
// Author: Mac
// Parameters: None
// Returns: None
function enableScan(){
	
	// Get references to the flying game and photo game targets
	const flyingScanner = document.querySelector('#flying-game-target');
	const photoScanner = document.querySelector('#photo-game-target');

	// Enable scanning for the flying game target (index 1)
	flyingScanner.setAttribute('mindar-image-target', "targetIndex: 1");
	// Enable scanning for the photo game target (index 0)
	photoScanner.setAttribute('mindar-image-target', "targetIndex: 0");

	// Log the enabling of the scan
	console.log("scan enabled");

}





// Function Name: removeContent
// Summary: Removes the content of the 'overlay' div element
// Author: Mac
// Parameters: None
// Returns: None
function removeContent() {
	document.getElementById('overlay').innerHTML = '';
}

// Function Name: addDiv
// Summary: Adds a new div element with a specified ID to a specified container element
// Author: Mac
// Parameters:
// divId: The ID of the new div element to be created
// containerId: The ID of the container element where the new div will be added
// Returns: None
function addDiv(divId, containerId) {
	const newDiv = document.createElement('div');
	newDiv.setAttribute('id', divId);
	document.getElementById(containerId).appendChild(newDiv);
}
	
// Function Name: removeDiv
// Summary: Removes a div element with a specified ID
// Author: Mac
// Parameters:
// divId: The ID of the div element to be removed
// Returns: None
function removeDiv(divId) {
	const divToRemove = document.getElementById(divId);
	if (divToRemove) {
		divToRemove.remove();
	}
}

// Function Name: buildPage
// Summary: Creates a new div with the ID 'overlay', appends it to the 'pg' element, and loads an external HTML file into the specified div element
// Author: Mac
// Parameters:
// url: The URL of the HTML file to be loaded
// divId: The ID of the div element where the HTML content will be loaded
// Returns: None
function buildPage(url, divId) {
// Append the new div to the 'pg' element
document.getElementById('pg').appendChild(newDiv);

// Declare the xmlhttp object to handle the request
var xmlhttp;

// Check if the browser supports XMLHttpRequest
if (window.XMLHttpRequest) {
	// If supported, create a new XMLHttpRequest object
	xmlhttp = new XMLHttpRequest();
} else {
	// If not supported, use the Microsoft.XMLHTTP ActiveX object
	xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

// Set up the onreadystatechange event handler
xmlhttp.onreadystatechange = function() {
	// Check if the request is complete and successful
	if (this.readyState == 4 && this.status == 200) {
		// Load the response text into the specified div element
		document.getElementById(divId).innerHTML = this.responseText;
	}
};

// Open the request with the specified URL and send it
xmlhttp.open("GET", url, true);
xmlhttp.send();

  }