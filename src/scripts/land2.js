console.log("lands.js loaded");
function getDimensions(id){
var dimensions = "x: 1, y: 1, z: 1"
switch (id){
}
return dimensions;
}
function landBuild(id, location){
   var ammoshape =  getDimensions(id)
    const land = document.createElement('a-entity');
land.setAttribute('gltf-model', `#${id}`);
land.setAttribute('position', {x: location , y: 0.1, z: -3});
land.setAttribute('ammo-body', {type: 'kinematic', emitCollisionEvents: true});
land.setAttribute('ammo-shape', {type: 'box', fit: 'manual', halfExtents: `${ammoshape}`, offset: {x: 0, y: 1, z: 0}});
land.setAttribute('activationState','active')
lands.appendChild(land);

    console.log(`land ${id} appended to game`)

}
fun
// land1.setAttribute('animation', {property: 'position', to: '-20 0 0', loop: true, dur: 10000});
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function landCounter(lc, landsize)
{
    var landcount = lc + landsize;;
    return landcount
}
function displayModels() {
    const lands = document.querySelector('#lands');
    for(let k= 1; k < 10; k++){
        landBuild(landBuild(0,1));

        
    }

  

    
   
   
}

displayModels();

function landBuild(location, previousland){  
    console.log("landBuild called");
var landID = getRandomInt(1,7);
while(landID == previousland){landID = getRandomInt(1,7); console.log("landID changed loop");}
const lands = document.querySelector('#lands');

if(landID!=7 && landID!=6){    
var landsize = 8;
console.log("small land");
}
else {landsize = 12; console.log("big land");}
const land = document.createElement('a-entity');
var xlocation = (location + landsize)
land.setAttribute('gltf-model', `#${landID}`);
land.setAttribute('position', {x: xlocation , y: 0.1, z: -3});
land.setAttribute('ammo-body', {type: 'kinematic', emitCollisionEvents: true});
land.setAttribute('ammo-shape', {type: 'box', fit: 'manual', halfExtents: {x: 1, y: 1, z: 1}, offset: {x: 0, y: 1, z: 0}});
land.setAttribute('activationState','active')
lands.appendChild(land);
console.log(`land${id} added`);


return landID, xlocation;


}




AFRAME.registerComponent("click-landspawn", {
    init: function() {
        this.el.addEventListener("click", evt => {
            landBuild(3, 3)
        })
    }
})


    //    // // Define an array with the IDs of the modelsss
    //    const modelIds = ['1', '2', '3', '4', '5', '6', '7'];s

    //    // Shuffle the array using Fisher-Yates algorithm
    //    function shuffle(array) {
    //        for (let i = array.length - 1; i > 0; i--) {
    //            const j = Math.floor(Math.random() * (i + 1));
    //            [array[i], array[j]] = [array[j], array[i]];
    //        }
    //        console.log("Shuffle")
    //    }

    //    // Display the models in a random order
    //    let currentIndex = 0;
    //    function displayNextModel() {
    //        //const modelContainer = document.querySelector('#model-container');
    //        const initialModelEl = document.querySelector('#initial-model');
    //        const currentModelId = modelIds[currentIndex];
    //        const currentModel = document.createElement('a-entity');
    //        const initialPosition = initialModelEl.getAttribute('position');
    //        const initialRotation = initialModelEl.getAttribute('rotation');
    //        const initialScale = initialModelEl.getAttribute('scale');
    //        // currentModel.setAttribute('gltf-model', `#${currentModelId}`);
    //        // initialModelEl.appendChild(currentModel);
    //        currentIndex = (currentIndex + 1) % modelIds.length;
    //        const newPosition = {
    //            x: initialPosition.x + 5, // Spawn model 2 units to the right
    //            y: initialPosition.y,
    //            z: initialPosition.z
    //        };

    //        const newRotation = initialRotation;
    //        // Create the new model
    //        const newModelEl = document.createElement('a-entity');
    //        newModelEl.setAttribute('position', newPosition);
    //        newModelEl.setAttribute('rotation', newRotation);
    //        newModelEl.setAttribute('scale', initialScale);
    //        newModelEl.setAttribute('gltf-model', `#${currentModelId}`);
    //        console.log("Load next");
    //        shuffle(modelIds);
    //    }

    //    // Shuffle the array initially and start displaying the models
    //    shuffle(modelIds);
    //    displayNextModel();
    //    setInterval(displayNextModel, 2000); // Change the model every 5 seconds