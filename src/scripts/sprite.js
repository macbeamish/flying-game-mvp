
AFRAME.registerComponent("sprite-collide", {
    init: function() {
        this.el.addEventListener("collidestart", evt => {
            console.log("sprite collided");
            this.el.setAttribute("ammo-body", {type: "static"})
        })
    }
})


AFRAME.registerComponent("sprite-jump-g", {
  init: function() {
    // when clicked attach the body and the shape, and apply the impulse
    this.el.addEventListener("click", evt => {
     const sprite = document.querySelector("#skeleton")
            console.log("game clicked");
      sprite.el.setAttribute("ammo-body", {
          type: "dynamic"
        });
        sprite.el.body.setActivationState(1);
        console.log("ammo-body set to dynamic");
        sprite.el.setAttribute("ammo-shape", {
          type: "cylinder",
          fit: "manual",
              halfExtents: { x: 1, y: 1, z: 1 },
              offset:{x: 0, y: 1, z: 0}

         
        });
        console.log("ammo-shape set to hull");
      const force = new Ammo.btVector3(0, 10, 0);
      console.log("force set to 0, 5, 0");
      const pos = new Ammo.btVector3(skeleton.object3D.position.x, skeleton.object3D.position.y, skeleton.object3D.position.z);
      console.log("position set to skeleton position");
      skeleton.body.setLinearVelocity(force);
      console.log("impulse applied");
      Ammo.destroy(force);
      console.log("force destroyed");
      Ammo.destroy(pos);
      console.log("position destroyed");
    })
  }
})


AFRAME.registerComponent("sprite-jump", {
    init: function() {
      // when clicked attach the body and the shape, and apply the impulse
      this.el.addEventListener("click", evt => {
        console.log("sprite clicked");
        this.el.setAttribute("ammo-body", {
            type: "dynamic"
          });
          this.el.body.setActivationState(1);
          console.log("ammo-body set to dynamic");
          this.el.setAttribute("ammo-shape", {
            type: "cylinder",
            fit: "manual",
                halfExtents: { x: 1, y: 1, z: 1 },
                offset:{x: 0, y: 1, z: 0}

           
          });
          console.log("ammo-shape set to hull");
        const force = new Ammo.btVector3(0, 10, 0);
        console.log("force set to 0, 5, 0");
        const pos = new Ammo.btVector3(skeleton.object3D.position.x, skeleton.object3D.position.y, skeleton.object3D.position.z);
        console.log("position set to skeleton position");
        skeleton.body.setLinearVelocity(force);
        console.log("impulse applied");
        Ammo.destroy(force);
        console.log("force destroyed");
        Ammo.destroy(pos);
        console.log("position destroyed");
      })
    }
  })

  AFRAME.registerComponent("sprite-jump-m", {
    init: function() {
      // when clicked attach the body and the shape, and apply the impulse
      this.el.addEventListener("touchstart", evt => {
        console.log("sprite touch started");
    })
    this.el.addEventListener("touchend", evt =>{
        this.el.setAttribute("ammo-body", {
            type: "dynamic"
          });
          this.el.body.setActivationState(1);
          console.log("ammo-body set to dynamic");
          this.el.setAttribute("ammo-shape", {
            type: "cylinder",
            fit: "manual",
                halfExtents: { x: 1, y: 1, z: 1 },
                offset:{x: 0, y: 1, z: 0}

           
          });
          console.log("ammo-shape set to hull");
        const force = new Ammo.btVector3(0, 5, 0);
        console.log("force set to 0, 5, 0");
        const pos = new Ammo.btVector3(skeleton.object3D.position.x, skeleton.object3D.position.y, skeleton.object3D.position.z);
        console.log("position set to skeleton position");
        skeleton.body.setLinearVelocity(force);
        console.log("impulse applied");
        Ammo.destroy(force);
        console.log("force destroyed");
        Ammo.destroy(pos);
        console.log("position destroyed");
      })
    }
  })

  

AFRAME.registerComponent("box-jump", {
    init: function() {
      // when clicked attach the body and the shape, and apply the impulse
      this.el.addEventListener("click", evt => {
        
            console.log("box clicked");
            this.el.setAttribute("ammo-body", {
                type: "dynamic"         
            });
            this.el.body.setActivationState(1);
            console.log("ammo-body set to dynamic");
            this.el.setAttribute("ammo-shape", {
                type: "box",
                fit: "manual",
                halfExtents: { x: 1, y: 1, z: 1 }

            
            });
            console.log("ammo-shape set to box ");
            
            const force = new Ammo.btVector3(-2, 1, -20);
            console.log("force set to 0, 5, 0");
            const pos = new Ammo.btVector3(this.el.object3D.position.x, this.el.object3D.position.y, this.el.object3D.position.z);
            console.log("position set to box position");
            this.el.body.setLinearVelocity(force);
            console.log("impulse applied");
            Ammo.destroy(force);
            console.log("force destroyed");
            Ammo.destroy(pos);
            console.log("position destroyed");
    
      })
    }
  })

AFRAME.registerComponent("random-hex", {
    init: function(){
      this.el.addEventListener("click", evt => {
        console.log("box clicked")
        var colors  = ["red", "green", "blue", "yellow", "purple", "orange ", "pink", "black", "white"];
        this.el.setAttribute("material", {
          color: colors[Math.floor(Math.random() * colors.length)]
        });
        });
    }
});

  AFRAME.registerComponent("foo", {
    init: function() {
      // when clicked attach the body and the shape, and apply the impulse
      this.el.addEventListener("click", evt => {
        this.el.setAttribute("ammo-body", {
          type: "dynamic"
        });
        this.el.setAttribute("ammo-shape", {
          type: "sphere",
          fit: "manual",
          sphereRadius: 0.15
        });
        const force = new Ammo.btVector3(0, 7, -3);
        const pos = new Ammo.btVector3(ball.object3D.position.x, ball.object3D.position.y, ball.object3D.position.z);
        ball.body.applyImpulse(force, pos);
        Ammo.destroy(force);
        Ammo.destroy(pos);
      })
      // check if the events are working by changing a the boxes color
      document.querySelector("#backboard").addEventListener("collidestart", evt => {
        document.querySelector("#backboard").setAttribute("color", "green");
      })
    }
  })