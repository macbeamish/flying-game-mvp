console.log("lands.js loaded");
// land1.setAttribute('animation', {property: 'position', to: '-20 0 0', loop: true, dur: 10000});
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const indeces = [0,1,2,3,4,5,6,7];
function displayModels() {
    const game = document.querySelector('#lands');
    for (let i = 1; i < indeces.length; i++) {       
        landBuild(i, i);
        
    }
    for(let k= 7; k < 100; k++){
         var landID = getRandomInt(1,7);
        setTimeout(landBuild(getRandomInt(1,7),k), 2000);
        
    }

  

    
   
   
}
displayModels();

function landBuild(id, location){  
if(id!=7){    
location = (location * 4 + 1);
}
else {location = location * 4 + 5;}
const land = document.createElement('a-entity');

land.setAttribute('gltf-model', `#${id}`);
land.setAttribute('position', {x: location, y: 0.1, z: -3});
land.setAttribute('ammo-body', {type: 'kinematic', emitCollisionEvents: true});
land.setAttribute('ammo-shape', {type: 'box', fit: 'manual', halfExtents: {x: 1, y: 1, z: 1}, offset: {x: 0, y: 1, z: 0}});
land.setAttribute('activationState','active')
game.appendChild(land);
console.log(`land${id} added`);


}



 