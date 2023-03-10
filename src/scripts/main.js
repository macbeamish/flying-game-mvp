console.log("main.js loaded");
document.addEventListener("DOMContentLoaded", function(){
  const sceneEl = document.querySelector('a-scene');
	const arSystem = sceneEl.systems["mindar-image-system"];
  arSystem.start(); // start AR 
  console.log("AR event system starting");
  sceneEl.addEventListener("arReady", (event) => {
	  console.log("MindAR is ready")
	});
  });
  // arReady event triggered when ready


  	// detect target found
	// exampleTarget.addEventListener("targetFound", event => {
	//   console.log("target found");
	// });
	// // detect target lost
	// exampleTarget.addEventListener("targetLost", event => {
	//   console.log("target lost");
	// });
	// detect click event
	// examplePlane.addEventListener("click", event => {
	//   console.log("plane click");
	// });

