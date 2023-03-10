console.log("lands.js loaded");
// land1.setAttribute('animation', {property: 'position', to: '-20 0 0', loop: true, dur: 10000});
const indeces = [0,1,2,3,4,5,6,7];
function displayModels() {
    const game = document.querySelector('#game');
    for (let i = 1; i < indeces.length; i++) {       
        landBuild(i, i);
        
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
land.setAttribute('ammo-shape', {type: 'box', fit: 'manual', halfExtents: {x: 1, y: 1, z: 1}, offset:'0 1 0'});
land.setAttribute('activationState','active')
game.appendChild(land);
console.log(`land${id} added`);


}

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