/*Click event for flower-button, changes visibility of flower 3D model*/
AFRAME.registerComponent('flower-click', {
    init: function () {
        const target = document.querySelector('#flower-button');
        const model = document.querySelector('#flowerModel');
        target.addEventListener('click', function (ev, target) {
            console.log("flower button clicked");
            if (!model.object3D.visible) {
                model.setAttribute('visible', 'true');
            }
            else {
                model.setAttribute('visible', 'false');
            }
        });
    }
});

/*Click event for bunny-button*/
AFRAME.registerComponent('bunny-click', {
    init: function () {
        const target = document.querySelector('#bunny-button');
        const model = document.querySelector('#bunnyModel');

        target.addEventListener('click', function (ev, target) {
            console.log("bunny button clicked");
            if (!model.object3D.visible) {
                model.setAttribute('visible', 'true');
            }
            else {
                model.setAttribute('visible', 'false');
            }
        });
    }
});

/*Click event for balloon-button*/
AFRAME.registerComponent('balloon-click', {
    init: function () {
        const target = document.querySelector('#balloon-button');
        const model = document.querySelector('#balloonModel');

        target.addEventListener('click', function (ev, target) {
            console.log("balloon button clicked");
            if (!model.object3D.visible) {
                model.setAttribute('visible', 'true');
            }
            else {
                model.setAttribute('visible', 'false');
            }
        });
    }
});

/*Click event for egg-button*/
AFRAME.registerComponent('egg-click', {
    init: function () {
        const target = document.querySelector('#egg-button');
        const model = document.querySelector('#eggModel');

        target.addEventListener('click', function (ev, target) {
            console.log("egg button clicked");
            if (!model.object3D.visible) {
                model.setAttribute('visible', 'true');
            }
            else {
                model.setAttribute('visible', 'false');
            }
        });
    }
});

function eggButtonClick() {
    const target = document.querySelector('#egg-button');
    const model = document.querySelector('#eggModel');


    console.log("egg button clicked");
    if (model.getAttribute('visible')) {
        model.setAttribute('visible', 'false');
    }
    else {
        model.setAttribute('visible', 'true');
    }
}

function balloonButtonClick() {
    const target = document.querySelector('#balloon-button');
    const model = document.querySelector('#balloonModel');


    console.log("balloon button clicked");
    if (model.getAttribute('visible')) {
        model.setAttribute('visible', 'false');
    }
    else {
        model.setAttribute('visible', 'true');
    }
}

function bunnyButtonClick() {
    const target = document.querySelector('#bunny-button');
    const model = document.querySelector('#bunnyModel');


    console.log("bunny button clicked");
    if (model.getAttribute('visible')) {
        model.setAttribute('visible', 'false');
    }
    else {
        model.setAttribute('visible', 'true');
    }
}

function flowerButtonClick() {
    const target = document.querySelector('#flower-button');
    const model = document.querySelector('#flowerModel');


    console.log("flower button clicked");
    if (model.getAttribute('visible')) {
        model.setAttribute('visible', 'false');
    }
    else {
        model.setAttribute('visible', 'true');
    }
}

function takePhoto() {
    const sceneEl = document.querySelector('a-scene');
    var UiVisible = true; //bool variable for UI visibility
    console.log("Photo click");

    const target = document.querySelector('#photo-button');
    const video = document.getElementsByTagName("video")[0];    //Selecting the video element for screenshot

    setUIVisible(UiVisible);    //Hide UI
    UiVisible = false;

    setTimeout(function () {    //Screenshot taken after 1 second delay
        const canvas = document.querySelector('#canvas');

        //Width and height of the canvas
        var window_width = $(window).outerWidth();
        var window_height = $(window).outerHeight();
        var v_width = $(video).outerWidth();
        var v_height = $(video).outerHeight();

        var a_width = document.querySelector('a-scene').components.screenshot.data.width * 0.5;
        var a_height = document.querySelector('a-scene').components.screenshot.data.height * 0.5;
        canvas.width = $(window).outerWidth();
        canvas.height = $(window).outerHeight();

        //Render the background image from the camera
        canvas.getContext('2d').drawImage(video, 0, parseFloat($("video").css("top")), v_width, v_height);

        //Render the A-Frame model from the scene
        var imgData = document.querySelector('a-scene').components.screenshot.getCanvas('perspective');
        canvas.getContext('2d')
            .drawImage(imgData, 0, 0, window_width, window_height);


        //Download the screenshot using either msToBlob method or downloadAsFile method
        if (window.navigator.msSaveOrOpenBlob) {
            var blobObject = canvas.msToBlob();
            window.navigator.msSaveOrOpenBlob(blobObject, 'download.png');
            console.log("Test 1");
        } else {
            var a = document.createElement('a');
            a.href = canvas.toDataURL("image/png");
            a.download = 'download.png';
            console.log("Test 2");
            a.click();
        }

        setUIVisible(UiVisible);
        UiVisible = true;
    }, 1000);
}


/*Click event for photo-button*/
AFRAME.registerComponent('photo-click', {
    init: function () {
        const sceneEl = document.querySelector('a-scene');
        var UiVisible = true; //bool variable for UI visibility

        //Event listener triggered when ar scene is ready
        sceneEl.addEventListener("arReady", async (event) => {
            console.log("MindAR is ready")
            const target = document.querySelector('#photo-button');
            const video = document.getElementsByTagName("video")[0];    //Selecting the video element for screenshot

            target.addEventListener('click', async function (ev, target) {
                console.log("photo button clicked");

                setUIVisible(UiVisible);    //Hide UI
                UiVisible = false;

                setTimeout(function () {    //Screenshot taken after 1 second delay
                    const canvas = document.querySelector('#canvas');

                    //Width and height of the canvas
                    var window_width = $(window).outerWidth();
                    var window_height = $(window).outerHeight();
                    var v_width = $(video).outerWidth();
                    var v_height = $(video).outerHeight();

                    var a_width = document.querySelector('a-scene').components.screenshot.data.width * 0.5;
                    var a_height = document.querySelector('a-scene').components.screenshot.data.height * 0.5;
                    canvas.width = $(window).outerWidth();
                    canvas.height = $(window).outerHeight();

                    //Render the background image from the camera
                    canvas.getContext('2d').drawImage(video, 0, parseFloat($("video").css("top")), v_width, v_height);

                    //Render the A-Frame model from the scene
                    var imgData = document.querySelector('a-scene').components.screenshot.getCanvas('perspective');
                    canvas.getContext('2d')
                        .drawImage(imgData, 0, 0, window_width, window_height);


                    //Download the screenshot using either msToBlob method or downloadAsFile method
                    if (window.navigator.msSaveOrOpenBlob) {
                        var blobObject = canvas.msToBlob();
                        window.navigator.msSaveOrOpenBlob(blobObject, 'download.png');
                        console.log("Test 1");
                    } else {
                        var a = document.createElement('a');
                        a.href = canvas.toDataURL("image/png");
                        a.download = 'download.png';
                        console.log("Test 2");
                        a.click();
                    }

                    setUIVisible(UiVisible);
                    UiVisible = true;
                }, 1000);
            });
        });
    }
});

//Function to control UI visibility
function setUIVisible(ui) {
    if (ui) {
        document.querySelector('#info-button').setAttribute('visible', 'false');
        document.querySelector('#setting-button').setAttribute('visible', 'false');
        document.querySelector('#flower-button').setAttribute('visible', 'false');
        document.querySelector('#bunny-button').setAttribute('visible', 'false');
        document.querySelector('#photo-button').setAttribute('visible', 'false');
        document.querySelector('#egg-button').setAttribute('visible', 'false');
        document.querySelector('#balloon-button').setAttribute('visible', 'false');

        console.log("hiding ui elements");
    } else {
        document.querySelector('#info-button').setAttribute('visible', 'true');
        document.querySelector('#setting-button').setAttribute('visible', 'true');
        document.querySelector('#flower-button').setAttribute('visible', 'true');
        document.querySelector('#bunny-button').setAttribute('visible', 'true');
        document.querySelector('#photo-button').setAttribute('visible', 'true');
        document.querySelector('#egg-button').setAttribute('visible', 'true');
        document.querySelector('#balloon-button').setAttribute('visible', 'true');
        console.log("unhiding ui elements");
    }
};