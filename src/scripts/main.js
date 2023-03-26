//todo add bonuses
//todo add scoreboard
//todo add UI Overlays
//todo add screens
// figure out figma

console.log("main.js loaded");
document.addEventListener("DOMContentLoaded", function(){
  const sceneEl = document.querySelector('a-scene');
	const arSystem = sceneEl.systems["mindar-image-system"];
  arSystem.start(); // start AR 
  console.log("AR event system starting");
  sceneEl.addEventListener("arReady", (event) => {
	  console.log("MindAR is ready")
	});
  });


function pause() {
	console.log("Pause button clicked");
	const entities = document.querySelectorAll('[land-move]');
	entities.forEach(entity => {
		entity.setAttribute('land-speed', 0)
	});
	  const sprite = document.querySelector("#sprite");
	  var oldSpeed = sprite.getAttribute('sprite-speed');
	  sprite.setAttribute('sprite-speed', 0);
	  sprite.setAttribute('old-speed', oldSpeed);
 

}
function resume() {
	console.log('resume button clicked');
	const entities = document.querySelectorAll('[land-move]');
	entities.forEach(entity => {
		entity.setAttribute('land-speed', 0.1)
	});
	const sprite = document.querySelector("#sprite");
	var oldSpeed = sprite.getAttribute('old-speed');
	sprite.setAttribute('sprite-speed', oldSpeed);

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

function gameOverPause(){
	var sprite
}

function gamePause(){
	
}

function unPause(){
sprite
}

//   AFRAME.registerComponent('pause-velocity', {
// 	init: function () {
// 	  // Add click event listener to the entity
// 	  this.el.addEventListener('click', this.pauseVelocity.bind(this));
// 	},
  
// 	pauseVelocity: function () {
// 	  // Get all entities in the scene
// 	  const entities = document.querySelectorAll('[velocity]');
  
// 	  // Loop through each entity and set its velocity to 0
// 	  entities.forEach(entity => {
// 		const velocity = entity.getAttribute('velocity');
// 		entity.setAttribute('velocity', '0 0 0');
// 	  });
// 	}
//   });

//   AFRAME.registerComponent('collision-check', {
// 	init: function () {
	
// 	},
  
// 	tick: function () {
// 	  // Get the position and scale of each entity
// 	  const entity1Pos = this.entity1.object3D.position;
// 	  const entity1Scale = this.entity1.object3D.scale;
// 	  const entity2Pos = this.entity2.object3D.position;
// 	  const entity2Scale = this.entity2.object3D.scale;
  
// 	  // Calculate the distance between the two entities
// 	  const dx = entity1Pos.x - entity2Pos.x;
// 	  const dy = entity1Pos.y - entity2Pos.y;
// 	  const dz = entity1Pos.z - entity2Pos.z;
// 	  const distance = Math.sqrt(dx*dx + dy*dy + dz*dz);
  
// 	  // Check if the entities are colliding
// 	  if (distance < (entity1Scale.x + entity2Scale.x) / 2) {
// 		console.log('Entities are colliding!');
// 		// Emit a custom event indicating a collision has occurred
// 		this.el.emit('collision', { entity1: this.entity1, entity2: this.entity2 });
// 	  }
// 	}
//   });
  // arReady event triggered when ready


  	// detect target found
	// exampleTarget.addEventListener("targetFound", event => {
	//   console.log("target found");
	// });
	// // detect target lost
	// exampleTarget.addEventListener("targetLost", event => {
	//   console.log("target lost");
	// });
	// detect click event
	// examplePlane.addEventListener("click", event => {
	//   console.log("plane click");
	// });

// if player.left > land.right
//  return false; not overlapping
//  endif
 
//  if player.right < land.left
//   return false; not overlapping
//  endif
 
//  ;Is overlapping
//  return true
//  AABB -> axis aligned bounding box