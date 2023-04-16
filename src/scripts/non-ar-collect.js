
AFRAME.registerComponent('collectable-collide', {

    init() {

    },
    tick(time, timeDelta){     
        
        if (this.el.getAttribute('collided') === 'false') {
        
            //Get obj position and size
            var worldPosition = new THREE.Vector3();          
            this.el.object3D.getWorldPosition(worldPosition);
            var objHeight = parseFloat(this.el.getAttribute('collectable-height'));
            var objWidth = parseFloat(this.el.getAttribute('collectable-width'));
            var objX = worldPosition.x;
            var objY = worldPosition.y;
            
            //Get sprite position and size
            var sprite = document.querySelector('#sprite');
            var spritePosition = new THREE.Vector3();
            sprite.object3D.getWorldPosition(spritePosition);
            var spriteX = spritePosition.x;
            var spriteY =  parseFloat(spritePosition.y);
            var spriteHeight = parseFloat(sprite.getAttribute("sprite-height"));
            var spriteWidth = parseFloat(sprite.getAttribute("sprite-width"));

            //Check for obj collision
            if((spriteY + spriteHeight > objY)
                && (spriteY < objY + objHeight)
                && (spriteX + (spriteWidth/2) > objX - (objWidth/2))
                && (spriteX - (spriteWidth/2) < objX + (objWidth/2))){
                // console.log("balloon collision" + baloonAltitude + ";" + spriteHeight + ";" + spriteY);
                
                this.el.setAttribute('collided', 'true');
                this.el.setAttribute('visible', 'false');
                COLLECTED += 1;
                
            }
        }
        


    }
  
});


AFRAME.registerComponent('collectable-tick', {
    // Initialize the component
    init() {

    },

    // Update the component on every animation frame
    tick(time, timeDelta){
        if(IS_PAUSED == false){
            var roll =  getRandomInt(1,200);
            if(roll == 1){
                spawnCollectable()
            }
        }
    }  
});

AFRAME.registerComponent('collectable-move', {

    // Initialize the component
    init: function () {
        
    },

    // Update the component on every animation frame
    tick: function (time, delta) { 
        if(IS_PAUSED == false){
    
            // Set direction of the entity
            const direction = new THREE.Vector3(-51, 0, 0); 
            var speed = this.el.getAttribute('collectable-speed');
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

function spawnCollectable(){
    var collectableNum = getRandomInt(1,5);
     var positionX = getRandomInt(10,50);
     var positionY = getRandomInt(3,10);
     var positionZ = -14.5;
    var collectable = document.createElement('a-entity');
    collectable.setAttribute('gltf-model', `url(./src/assets/3dmodels/Collectables/egg${collectableNum}.glb)#model`)
    collectable.setAttribute('geometry', 'primitive: sphere; radius: 0.5');
    collectable.setAttribute('position', `${positionX} ${positionY} ${positionZ}`);
    collectable.setAttribute('rotation', '0 0 0');
    collectable.setAttribute('scale', '1 1 1');
    collectable.setAttribute('collectable-speed', '0.1');
    collectable.setAttribute('collectable-collide', '');
    collectable.setAttribute('collectable-move', '');
    collectable.setAttribute('collectable-height', 1);
    collectable.setAttribute('collectable-width', 0.7);  
    collectable.setAttribute('collided', 'false');
    var game = document.querySelector('#game');
    game.appendChild(collectable);
}
