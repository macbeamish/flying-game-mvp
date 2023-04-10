
function pushoutscreen(screen){
	let uiElementImage = document.querySelector("#" + screen + "_image");
	uiElementImage.classList.add("start");
	uiElementImage.classList.add("easeoutmovement");
	uiElementImage.classList.add("move-out");
	setTimeout(function(){
		var uiElement = document.querySelector("#" + screen);
		uiElement.style.visibility = "hidden";
	},4000);
}

function pullonscreen(screen){
	var uiElement = document.querySelector("#" + screen);
	uiElement.style.visibility = "visible";
	let uiElementImage = document.querySelector("#" + screen + "_image");

	uiElementImage.classList.add("start");
	uiElementImage.classList.add("easeinmovement");
	uiElementImage.classList.add("move-in");
}

function loadStartScreen(){
	var startScreen = document.querySelector("#startscene");
	startScreen.style.visibility = "visible";
	
	pullonscreen("uiElement");
}

function showContinue(){
	var continuebtn = document.querySelector("#btncontinue");
	continuebtn.style.visibility = "visible";
	var logoscreen = document.querySelector("#logoscreen");
	logoscreen.style.visibility = "hidden";
	logoscreen.style.visibility = "visible";
	var loadingicon = document.querySelector("#loadingicon");//hide the loading icon
	loadingicon.style.visibility = "hidden";
}//showContinue()

function showLoading(){
	var loading = document.querySelector("#loadingscreen");
	loading.style.visibility = "visible";
}

function showFrame(){
	var scene = document.querySelector("#scene");
	scene.style.visibility = "visible";

	var framescreen = document.querySelector("#frame");
	if (hasTarget){
		framescreen.style.visibility = "hidden";
	}else{
		framescreen.style.visibility = "visible";
	}
	inMenu = false;
}