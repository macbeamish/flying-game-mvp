// The lands.js script is mainly concerned with terrain objects in an augmented reality application that uses the A-Frame framework. It consists of several components that handle terrain generation, movement, and collision detection within the game.

// land-tick: This component updates the position of the land on every animation frame. If a land entity moves off the left side of the screen, the component replaces it with a new one and removes the old one from the game.

// land-collide: This component checks for collisions between the terrain objects and the player's sprite on every animation frame. If a collision is detected, the game is paused and the game over state is triggered.

// land-move: This component updates the position of the land entities based on their velocity during every animation frame, as long as the game is not paused.

// The script also includes a few utility functions:

// landomizer: Generates a random integer between 1 and 7 (inclusive) to create new land objects, ensuring that the same land object is not repeated twice in a row.

// getRandomInt: Returns a random integer between the specified minimum and maximum values (inclusive).

// terraForm: Generates an initial set of land entities for the game by creating and positioning them based on their size and attributes.

// landBuild: Creates a new land entity with the specified ID, land number, X position, and land speed.

// The script starts by calling the terraForm() function to generate the initial terrain objects.


const NUMBER_OF_LANDS = 25;
console.log("lands.js loaded");


/**
Function Name: AFRAME.registerComponent('land-tick')
Summary: Register an A-Frame component that handles terrain object updates on every animation frame
Author: Mac
Parameters: None
Returns: None
*/
AFRAME.registerComponent('land-tick', {
    // Initialize the component
    init() {
    
    },
    
    // Update the component on every animation frame
    tick(time, timeDelta){
    // Select the "game" HTML element
    var game = document.querySelector('#flying-game');
        
 // Get the world position of the current entity
 var worldPosition = this.el.object3D.position;

 // Extract the x position from the world position vector
 var landX = worldPosition.x;
 var lSpeed = this.el.getAttribute("land-speed");

 // If the entity is off the left side of the screen
 if (landX < -50){
     // Set a new position for the new entity - Adjust this value by trial and error if changing NUMBER_OF_LANDS or the Condition in the above if statement
     var newLandPosition = 210;

     // Get the "landnum" attribute of the entity
     var landnum = this.el.getAttribute('landnum');     

     // Call a function to replace the entity with a new one
     landBuild(this.el.id, landnum, newLandPosition, lSpeed);

     // Remove the entity from the game
     game.removeChild(this.el);  
 }

}
});


/**
Function Name: AFRAME.registerComponent('land-collide')
Summary: Register an A-Frame component that handles land collision detection with a sprite
Author: Mac
Parameters: None
Returns: None
*/
AFRAME.registerComponent('land-collide', {
    init() {

    },
    tick(time, timeDelta){     
        
        // Get land and sprite positions and sizes
        var worldPosition = this.el.object3D.position;
        var landHeight = parseFloat(this.el.getAttribute('land-height'));
        var landWidth = parseFloat(this.el.getAttribute('land-width'));
        var landX = worldPosition.x;
        var landY = worldPosition.y;
        //get baloon altitude and size
        var baloonAltitude = parseFloat(this.el.getAttribute('baloon-altitude'));
        var baloonWidth = parseFloat(this.el.getAttribute('baloon-width'));
        //Get sprite position and size
        var sprite = document.querySelector('#sprite');
        var spritePosition = sprite.object3D.position;
        var spriteX = spritePosition.x;
        var spriteY =  parseFloat(spritePosition.y);
        var spriteHeight = parseFloat(sprite.getAttribute("sprite-height"));
        var spriteWidth = parseFloat(sprite.getAttribute("sprite-width"));

        //Check for land collision
        if (spriteX + (spriteWidth/2) > landX - (landWidth/2)
            && spriteX - (spriteWidth/2) < landX + (landWidth/2) 
            && spriteY < landY + landHeight){
            pause();
            GAMEOVER = true; 
        }
         // Check for balloon collision
        if((spriteY + spriteHeight > baloonAltitude)
            && (spriteX + (spriteWidth/2) > landX - (baloonWidth/2))
            && (spriteX - (spriteWidth/2) < landX + (baloonWidth/2))){
            pause();    
            GAMEOVER = true;
        }


      

    }
  
});


/**
Function Name: AFRAME.registerComponent('land-move')
Summary: Register an A-Frame component that moves the land entity
Author: Mac
Parameters: None
Returns: None
*/
AFRAME.registerComponent('land-move', {
    init: function () {
        
    },
    tick: function (time, delta) { 

        if(!IS_PAUSED) {
            // Set direction of the entity
            const direction = new THREE.Vector3(-51, 0, 0); 
            var speed = this.el.getAttribute('land-speed');
            this.el.velocity = new THREE.Vector3();
            this.el.velocity.addScaledVector(direction, speed);

            // Get the current position of the entity
            const position = this.el.object3D.position.clone();

            // Calculate the time since the last animation frame
            const dt = delta / 1000;

            // Update the position of the entity based on its velocity
            position.addScaledVector(this.el.velocity, dt);

            // Set the new position of the entity
            this.el.object3D.position.copy(position);
        }
    }
});



/**

Function Name: terraForm
Summary: Generates and positions the initial set of land entities in the game.
Author: Mac
Parameters: None
Returns: None
*/
function terraForm() {   
var lSpeed = 0.1;
var landnumber = 1
var nextXLocation = 10;
    for(let k = 1; k < NUMBER_OF_LANDS; k++){
        landnumber = landomizer(landnumber) 
        switch(landnum){
            //These land sizes are based on the size of the land entity in the game
            // and must be adjusted for each game based on the models used 
            //these values factor in the model width plus some gap in between the land entities
            case 1: landsize = 8; break;
            case 2: landsize = 8; break;
            case 3: landsize = 10; break;
            case 4: landsize = 10; break;
            case 5: landsize = 10; break;
            case 6: landsize = 14; break;
            case 7: landsize = 14; break;
        }
        nextXLocation += (landsize/2 + 5);
        landBuild(k, landnumber, nextXLocation, lSpeed)
       
    }
   
}

/**
Function Name: landBuild
Summary: Creates a new land entity and adds it to the game scene
Author: Mac
Parameters:
id: a string representing the ID of the land entity
landnumber: an integer specifying the type of land to create
x: a float representing the x-coordinate where the land should be placed
landSpeed: a float specifying the speed at which the land should move
Returns: None
*/
function landBuild(id, landnumber, x, landSpeed){  
    var landHeight = 0;
    var landWidth = 0;
    switch(landnumber){
        //These dimensions are based on the size of the land entity in the game
        //and are used to calculate the bounding box - collisuion detection in 'land-collide'
        case 1: landWidth = 2; landHeight = 1; break;
        case 2: landWidth = 2; landHeight = 1; break;
        case 3: landWidth = 2; landHeight = 3; break;
        case 4: landWidth = 0.6; landHeight = 5.3; break;
        case 5: landWidth = 2; landHeight = 3; break;
        case 6: landWidth = 4; landHeight = 5; break;
        case 7: landWidth = 2; landHeight = 6; break;
    }
if(landnumber==1 || landnumber==2){
    baloonAltitude = 10;
    baloonWidth = 2;
}
else{
    baloonWidth = 0;
    baloonAltitude = 100;
} 
// Creating the land entity and setting all its attributes
const game = document.querySelector('#flying-game');
const land = document.createElement('a-entity');
land.setAttribute('id', `${id}`);
land.setAttribute('landnum', landnumber);
land.setAttribute('gltf-model', `url(../src/assets/3dmodels/Lands/FlyingLand_${landnumber}.glb)#model`);
land.setAttribute('position', {x: x, y: 0, z: 0});
land.setAttribute('land-tick', {});
land.setAttribute('land-speed', landSpeed);
land.setAttribute('land-move', {});
land.setAttribute('land-collide', {});
land.setAttribute('land-height', landHeight);
land.setAttribute('land-width', landWidth);  
land.setAttribute('baloon-altitude', baloonAltitude);
land.setAttribute('baloon-width', baloonWidth);
game.appendChild(land);
// console.log(`land${id} added with land ${landnumber} at location x = ${x}`);
}


/**
Function Name: landomizer
Summary: Generates a random land number, avoiding consecutive duplicates
Author: Mac
Parameters: num - an integer representing the previous land number
Returns: landnum - a random integer between 1 and 7 (inclusive), different from 'num'
*/
function landomizer(num){
    // Generate a random integer between 1 and 7 (inclusive) 
    landnum = getRandomInt(1,7);
    while(landnum == num)
    {
        // Generate a new random integer for 'landnum'
        landnum = getRandomInt(1,7);
        // console.log("rerolled for double up");
    }
    return landnum;
}

/**
Function Name: getRandomInt
Summary: Generates a random integer between two given values, inclusive
Author: Mac
Parameters:
min: an integer representing the lower bound (inclusive)
max: an integer representing the upper bound (inclusive)
Returns: a random integer between 'min' and 'max' (inclusive)
*/
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

terraForm();