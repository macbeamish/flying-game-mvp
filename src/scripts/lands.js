console.log("lands.js loaded");
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function terraForm() {   
var previousland = 1;
var landnum = 1
var nextXLocation = 0
    for(let k = 1; k < 101; k++){
        while(landnum == previousland)
        {landnum = getRandomInt(1,7); console.log("landID changed loop");}
      
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
        landBuild(k, landnum, nextXLocation)
        previousland = landnum;
    }
   
}


function landBuild(id, landnumber, x){  
const game = document.querySelector('#game');
var halfextents = "";
switch(landnumber){
    case 1:halfextents = "x: 2, y: 2, z: 2"; break;
    case 2:halfextents = "x: 2, y: 2, z: 2"; break;
    case 3:halfextents = "x: 2, y: 2, z: 2"; break;
    case 4:halfextents = "x: 2, y: 2, z: 2"; break;
    case 5:halfextents = "x: 2, y: 2, z: 2"; break;
    case 6:halfextents = "x: 2, y: 2, z: 2"; break;
    case 7:halfextents = "x: 2, y: 2, z: 2"; break;
}
const land = document.createElement('a-entity');
land.setAttribute('id', `land${id}`);
land.setAttribute('gltf-model', `#${landnumber}`);
land.setAttribute('position', {x: x, y: 0.1, z: -10});
land.setAttribute('ammo-body', {type: 'kinematic', emitCollisionEvents: true});
land.setAttribute('ammo-shape', {type: 'box', fit: 'manual', halfExtents: `${halfextents}`, offset: {x: 0, y: 1, z: 0}});
land.setAttribute('activationState','active')
game.appendChild(land);
console.log(`land${id} added with land ${landnumber} at location x = ${x}`);

}
terraForm();


 