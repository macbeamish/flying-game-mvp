
var firstscreen = true;
var LANDSPEED = 0.1;
var COLLECTED = 0;
var score = 0;
var isPaused = true;
var GAMEOVER = false;
console.log("flying-main.js loaded");

//todo
function initializeFlyingGame() {
    
}
function resetFlyingGame(){

}



AFRAME.registerComponent("check-gameover", {
    init: function () {
    },

    tick: function (time, timeDelta) {
        if (GAMEOVER) {
            gameOver();
        }
    }
});

function gameOver() {
    loadPage('../src/views/game-over.html','overlay');
    document.getElementById("final-score").innerHTML = score;
}

AFRAME.registerComponent("score-tick", {
    init: function () {
      this.timeAccumulator = 0; // Add a time accumulator variable
      this.previousCollected = 0; // Add a variable to store the previous value of COLLECTED
    },
  
    tick: function (time, timeDelta) {
      if (!isPaused) {
        this.timeAccumulator += timeDelta; // Accumulate elapsed time
  
        if (this.timeAccumulator >= 100) {
          // Increment score when time accumulator reaches 1000 milliseconds (1 second)
          score += 1;
          this.timeAccumulator -= 100; // Reset the time accumulator
        }
  
        // Update the score based on newly collected bonuses
        if (COLLECTED !== this.previousCollected) {
          score += (COLLECTED - this.previousCollected) * 25;
          this.previousCollected = COLLECTED;
        }
  
        document.getElementById("scoreboard").innerHTML = "Score: " + score;
  
        const landEntities = document.querySelectorAll("[land-move]");
        const collectableEntities = document.querySelectorAll("[collectable-move]");
  
        if (score > 100) {
          var newSpeed = score * 0.00025 + 0.075;
          landEntities.forEach((entity) => {
            entity.setAttribute("land-speed", newSpeed);
          });
          collectableEntities.forEach((entity) => {
            entity.setAttribute("collectable-speed", newSpeed);
          });
        }
      }
    },
  });
  



function pause() {
	// console.log("Pause button clicked");
	isPaused = true;
	
}

function resume() {
	// console.log('resume button clicked');
	isPaused = false;
}



const exampleTarget = document.querySelector('#example-target');
exampleTarget.addEventListener("targetFound", event => {
  console.log("target found");
});