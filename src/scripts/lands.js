// todo, add a function to check the scoreboard and update the speed variable at differnet scores.
// todo fix the double ups on lands loaded in land-tick.

const numberOfLands = 51;
AFRAME.registerComponent('land-tick', {
    init() {

    },
    tick(time, timeDelta){

        // console.log('checking land position');
            var game = document.querySelector('#game');         
            var worldPosition = new THREE.Vector3();          
            this.el.object3D.getWorldPosition(worldPosition);
            var landx = worldPosition.x;
            if (landx < -50){
                console.log(`${this.el.id} is off screen`);  
                var newLandPosition = 460;  
                var  landnum = this.el.getAttribute('landnum');     
                landBuild(this.el.id, landnum, newLandPosition);
                game.removeChild(this.el);
                
            }

    }
  
});
function landomizer(num){
    landnum = getRandomInt(1,7);
    while(landnum == num)
    {landnum = getRandomInt(1,7); console.log("landID changed loop");}
    return landnum;
}

console.log("lands.js loaded");

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function terraForm() {   

var landnumber = 1
var nextXLocation = 0
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
        landBuild(k, landnumber, nextXLocation)
       
    }
   
}


function landBuild(id, landnumber, x){  
const game = document.querySelector('#game');
var halfextents = "";
switch(landnumber){
    case 1:halfextents = "x: 4, y: 2, z: 4"; break;
    case 2:halfextents = "x: 4, y: 2, z: 4"; break;
    case 3:halfextents = "x: 6, y: 4, z: 6"; break;
    case 4:halfextents = "x: 8, y: 8, z: 8"; break;
    case 5:halfextents = "x: 8, y: 8, z: 8"; break;
    case 6:halfextents = "x: 10, y: 10, z: 10"; break;
    case 7:halfextents = "x: 10, y: 10, z: 10"; break;
}
var dir = new THREE.Vector3(-51,0,0);
var speed = 0.1;
const land = document.createElement('a-entity');
const velocity = dir.clone().multiplyScalar(speed);
land.setAttribute('velocity', velocity);
land.setAttribute('id', `${id}`);
land.setAttribute('landnum', landnumber);
land.setAttribute('gltf-model', `#${landnumber}`);
land.setAttribute('position', {x: x, y: 0.1, z: -15});
land.setAttribute('ammo-body', {type: 'kinematic', emitCollisionEvents: true});
land.setAttribute('ammo-shape', {type: 'box', fit: 'manual', halfExtents: `${halfextents}`, offset: {x: 0, y: 1, z: 0}});
land.setAttribute('activationState','active')
// land.setAttribute('animation',{property: 'position', to: '-999 0 0', loop: false, dur: 100000});
land.setAttribute('land-tick', {});
game.appendChild(land);
console.log(`land${id} added with land ${landnumber} at location x = ${x}`);

}



terraForm();


 