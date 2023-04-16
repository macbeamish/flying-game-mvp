// todo, add a function to check the scoreboard and update the speed variable at differnet scores.
// todo, add a function to check for collision with the sprite.
// todo add function to land-tick that increases speed of lands if score > x 
// add attributes to lands that set their boundaries and balloon boundaries
const numberOfLands = 51;

AFRAME.registerComponent('land-tick', {
    // Initialize the component
    init() {

    },

    // Update the component on every animation frame
    tick(time, timeDelta){

        // Select the "game" HTML element
        var game = document.querySelector('#flying-game');
        
        // Get the world position of the current entity
        var worldPosition = new THREE.Vector3();          
        this.el.object3D.getWorldPosition(worldPosition);

        // Extract the x position from the world position vector
        var landX = worldPosition.x;
        var lSpeed = this.el.getAttribute("land-speed");

        // If the entity is off the left side of the screen
        if (landX < -100){

            // Set a new position for the entity
            var newLandPosition = 420;

            // Get the "landnum" attribute of the entity
            var landnum = this.el.getAttribute('landnum');     

            // Call a function to replace the entity with a new one
            landBuild(this.el.id, landnum, newLandPosition, lSpeed);

            // Remove the entity from the game
            game.removeChild(this.el);  
        }
    }  
});

// tune these values to be more accurate
AFRAME.registerComponent('land-collide', {
    init() {

    },
    tick(time, timeDelta){     
            //Get land position and size
            var worldPosition = new THREE.Vector3();          
            this.el.object3D.getWorldPosition(worldPosition);
            var landHeight = parseFloat(this.el.getAttribute('land-height'));
            var landWidth = parseFloat(this.el.getAttribute('land-width'));
            var landX = worldPosition.x;
            var landY = worldPosition.y;
            //get baloon altitude and size
            var baloonAltitude = parseFloat(this.el.getAttribute('baloon-altitude'));
            var baloonWidth = parseFloat(this.el.getAttribute('baloon-width'));

            //Get sprite position and size
            var sprite = document.querySelector('#sprite');
            var spritePosition = new THREE.Vector3();
            sprite.object3D.getWorldPosition(spritePosition);
            var spriteX = spritePosition.x;
            var spriteY =  parseFloat(spritePosition.y);
            var spriteHeight = parseFloat(sprite.getAttribute("sprite-height"));
            var spriteWidth = parseFloat(sprite.getAttribute("sprite-width"));

            //Check for land collision
            if (spriteX + (spriteWidth/2) > landX - (landWidth/2)
             && spriteX - (spriteWidth/2) < landX + (landWidth/2) 
             && spriteY < landY + landHeight){
                // console.log("land collision");
                pause();
                GAMEOVER = true;
                
          
            }
            if((spriteY + spriteHeight > baloonAltitude)
                && (spriteX + (spriteWidth/2) > landX - (baloonWidth/2))
                && (spriteX - (spriteWidth/2) < landX + (baloonWidth/2))){
                // console.log("balloon collision" + baloonAltitude + ";" + spriteHeight + ";" + spriteY);
                pause();    
            }


      

    }
  
});

AFRAME.registerComponent('land-move', {

    // Initialize the component
    init: function () {
        
    },

    // Update the component on every animation frame
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

console.log("lands.js loaded");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function terraForm() {   
var lSpeed = 0.1;
var landnumber = 1
var nextXLocation = 10;
    for(let k = 1; k < numberOfLands; k++){
        landnumber = landomizer(landnumber) 
        switch(landnum){
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


function landBuild(id, landnumber, x, landSpeed){  
    var landHeight = 0;
    var landWidth = 0;
    switch(landnumber){
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

terraForm();


