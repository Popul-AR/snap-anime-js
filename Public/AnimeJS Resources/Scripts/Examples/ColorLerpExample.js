/*
  
  https://animejs.com/documentation/

  Lerp is a simpler way to define a tween between vectors 
  Instead of defining each component to tween, you can lerp between the two vectors in the update function

*/ 

//@input Asset.Material material
/** @type {Material} */
var material = script.material

//@input vec4 colorA {"widget":"color"}
/** @type {vec4} */
var colorA = script.colorA

//@input vec4 colorB {"widget":"color"}
/** @type {vec4} */
var colorB = script.colorB

anime({
  targets: {x: 0},
  x: 1,
  duration: 1,
  loop: true,
  direction: 'alternate',
  easing: 'linear',
  update(anim){
    material.mainPass.baseColor = vec4.lerp(colorA, colorB, anim.animations[0].currentValue)
  }
})
