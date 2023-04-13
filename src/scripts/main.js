//todo add bonuses
//todo add scoreboard
//todo add UI Overlays
//todo add screens
// figure out figma
var firstscreen = true;
var LANDSPEED = 0.1;
var COLLECTED = 0;
var score = 0;
var isPaused = true;
console.log("main.js loaded");
// document.addEventListener("DOMContentLoaded", function(){
//   const sceneEl = document.querySelector('a-scene');
// 	const arSystem = sceneEl.systems["mindar-image-system"];
//   arSystem.start(); // start AR 
//   console.log("AR event system starting");
//   sceneEl.addEventListener("arReady", (event) => {
// 	  console.log("MindAR is ready")
// 	});
//   });

AFRAME.registerComponent('score-tick', {

    init: function () {
		
  
    },

    tick: function (time, timeDelta) {

		score += Math.round(timeDelta/100 + COLLECTED * 5);
		if(!isPaused) {
		document.getElementById("score").innerHTML = "Score: " + score;
		
	
	}
    },
  });


//   AFRAME.registerComponent('score', {
// 	init: function () {
// 	  this.score = 0;
// 	  this.el.setAttribute('text', {
// 		value: 'Score: ' + this.score,
// 		align: 'center',
// 		width: 3,
// 		position: {x: 0, y: 8, z: -5}
// 	  });
// 	},
// 	tick: function (time, timeDelta) {
// 		score += timeDelta/100 + COLLECTED * 5;
// 		if(!isPaused) {
// 			this.score = score;
// 			this.el.setAttribute('text', {
// 				value: 'Score: ' + Math.round(score),
// 			});
// 		}
// 	}
//   });

if (firstscreen) {
	loadPage("../src/views/language.html",'overlay');
	console.log('overlaying first screen');
	firstscreen = false;
}
function pause() {
	// console.log("Pause button clicked");
	isPaused = true;
	const entities = document.querySelectorAll('[land-move]');
	entities.forEach(entity => {
		entity.setAttribute('land-speed', 0)
	});
	  const sprite = document.querySelector("#sprite");
	  var oldSpeed = sprite.getAttribute('sprite-speed');
	  sprite.setAttribute('sprite-speed', 0);
	//   sprite.setAttribute('old-speed', oldSpeed);
	//   sprite.setAttribute('sprite-gravity', 0);
	//   sprite.setAttribute('freeze', 0);
}

function resume() {
	// console.log('resume button clicked');
	isPaused = false;
	const entities = document.querySelectorAll('[land-move]');
	entities.forEach(entity => {
		entity.setAttribute('land-speed', 0.1)
	});
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

async function loadContent(contentUrl, targetSelector) {
    const response = await fetch(contentUrl);
	console.log(contentUrl);
	
		console.log(`Error fetching content: ${response.status} ${response.statusText}`);
		
	
    const newContent = await response.text();
    document.querySelector(targetSelector).innerHTML = newContent;
	console.log(newContent);
}

function loadContentOnClick(contentUrl, targetSelector) {
    loadContent(contentUrl, targetSelector);
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