// below is less efficient as using two event triggers creates lag 
// this has been left in to help the next dev avoid this mistake
document.getElementById("jump-trigger").addEventListener("click", () => {
  // Access the A-Frame entity with the "my-component" attached
  const myEntity = document.querySelector("[jump]");

  // Emit the custom event to trigger the component
  myEntity.emit("user-click");
});


AFRAME.registerComponent('jump', {
  init: function () {
    this.el.setAttribute('sprite-speed', 3.5);
    var speed = this.el.getAttribute('sprite-speed');
    const direction = new THREE.Vector3(0, 1, 0);
    const sprite = document.querySelector("#sprite");
    sprite.velocity = new THREE.Vector3();

    // below creates lag
    // this.el.addEventListener('user-click', () => {

      // more efficent
      var trigger = document.getElementById("jump-trigger");
      trigger.addEventListener("click", () => {
    sprite.velocity.addScaledVector(direction, speed);
    });
  },
  tick: function (time, delta) { 
    if(!isPaused) {
      const sprite = document.querySelector("#sprite");
      this.el.setAttribute('sprite-speed', 3.5);
      var speed = this.el.getAttribute('sprite-speed');
      const gravity = 3.8;
      const position = sprite.object3D.position.clone();
      const dt = delta / 1000;
      sprite.velocity.y -= gravity * dt;
      position.addScaledVector(sprite.velocity, dt);
      sprite.setAttribute('current-velocity', sprite.velocity.y);
      if (position.y < -5) {
        position.y = -5;
        sprite.velocity.set(0, 0, 0);
        pause()
        GAMEOVER = true;
      }
      if (position.y > 5) {
        position.y = 5;
        sprite.velocity.set(0, 0, 0);
      }
      sprite.object3D.position.copy(position);
    }
    
  },
 
});

