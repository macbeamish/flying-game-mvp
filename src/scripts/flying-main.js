


console.log("flying-main.js loaded");

//todo
// function initializeFlyingGame() {
 // Create the game entity
//  const gameEntity = document.createElement("a-entity");
//  gameEntity.setAttribute("id", "flying-game");
//  gameEntity.setAttribute("collectable-tick", "");
//  gameEntity.setAttribute("score-tick", "");
//  gameEntity.setAttribute("position", "0 -5 -15");

//  // Create the green horizontal box
//  const greenBox = document.createElement("a-box");
//  greenBox.setAttribute("color", "green");
//  greenBox.setAttribute("scale", "50 0.1 4");
//  greenBox.setAttribute("position", "0 -5 -15");
//  greenBox.setAttribute("rotation", "0 0 0");

//  // Add the green horizontal box to the game entity
//  gameEntity.appendChild(greenBox);

//  // Create the sprite entity
//  const spriteEntity = document.createElement("a-entity");
//  spriteEntity.setAttribute("id", "sprite");
//  spriteEntity.setAttribute("gltf-model", "url(./src/assets/3dmodels/Sprites/FlyingBaloon.glb)#model");
//  spriteEntity.setAttribute("scale", "1 1 1");
//  spriteEntity.setAttribute("position", "0 10 0");
//  spriteEntity.setAttribute("rotation", "0 -180 0");
//  spriteEntity.setAttribute("sprite-height", "1");
//  spriteEntity.setAttribute("sprite-width", "3");
//  spriteEntity.setAttribute("jump", "");

//  // Add the sprite entity to the game entity
//  gameEntity.appendChild(spriteEntity);

//  // Add the game entity to the scene
//  const gameContainer = document.querySelector("#game-container");
//  gameContainer.appendChild(gameEntity);
// const sprite = document.querySelector("#sprite");
// sprite.setAttribute('jump','');
// }


// function resetFlyingGame(){
//     // Remove the existing entity
//     const existingEntity = document.querySelector("flying-game");
//     if (existingEntity) {
//       existingEntity.parentNode.removeChild(existingEntity);
//     }
  
//     // Initialize a new entity
//     initializeFlyingGame();

// }

// function startFlyingGame(){

// }


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
    document.getElementById("final-score").innerHTML = SCORE;
}

AFRAME.registerComponent("score-tick", {
    init: function () {
      console.log("score-tick component initialized");
      this.timeAccumulator = 0; // Add a time accumulator variable
      this.previousCollected = 0; // Add a variable to store the previous value of COLLECTED
    },
  
    tick: function (time, timeDelta) {
      if (!IS_PAUSED) {
        this.timeAccumulator += timeDelta; // Accumulate elapsed time
  
        if (this.timeAccumulator >= 100) {
          // Increment SCORE when time accumulator reaches 1000 milliseconds (1 second)
          SCORE += 1;
          this.timeAccumulator -= 100; // Reset the time accumulator
        }
  
        // Update the SCORE based on newly collected bonuses
        if (COLLECTED !== this.previousCollected) {
          SCORE += (COLLECTED - this.previousCollected) * 25;
          this.previousCollected = COLLECTED;
        }
  
        document.getElementById("scoreboard").innerHTML = "Score: " + SCORE;
  
        const landEntities = document.querySelectorAll("[land-move]");
        const collectableEntities = document.querySelectorAll("[collectable-move]");
        console.log(SCORE);
  
        if (SCORE > 100) {
          var newSpeed = SCORE * 0.00025 + 0.075;
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
  

