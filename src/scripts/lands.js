console.log("lands.js loaded");
function terraForm() {
    for (let i = 0; i <= 5; i++) {
        console.log(`continent${i} building`)
        populateContinent(i);
    }
}

function populateContinent(cont) {
const continent = document.querySelector(`#continent${cont}`);
for(let k= 1; k < 10; k++){
    var nextLand = getRandomInt(1,7);
    console.log(`land${nextLand} at position ${k} added to continent${cont}`)
    landBuild(nextLand, cont);   
}
if (cont == 0 ){
continent.setAttribute('position', {x: -10, y: 0.1, z: -5});
}
else{
    cont = cont * 10;
    continent.setAttribute('position', {x: cont, y: 0.1, z: -5});
}
}

function landBuild(id, cont){  
    var conti = document.querySelector(`#continent${cont}`);
    if(id!=7 && id!=6){    
    location = (location * 4 + 1);
    }
    else {location = location * 4 + 5;}
    const land = document.createElement('a-entity');
    
    land.setAttribute('gltf-model', `#${id}`);
    land.setAttribute('position', {x: location, y: 0.1, z: -3});
    land.setAttribute('ammo-body', {type: 'kinematic', emitCollisionEvents: true});
    land.setAttribute('ammo-shape', {type: 'box', fit: 'manual', halfExtents: {x: 1, y: 1, z: 1}, offset: {x: 0, y: 1, z: 0}});
    land.setAttribute('activationState','active')
    conti.appendChild(land);
    console.log(`land${id} added`);
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
terraForm();