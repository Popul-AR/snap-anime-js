//@input SceneObject obj
/** @type {SceneObject} */
var obj = script.obj

var easingStrings = ['linear', 'easeInQuad', 'easeOutQuad', 'easeInOutQuad', 'easeOutInQuad', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic', 'easeOutInCubic', 'easeInQuart', 'easeOutQuart', 'easeInOutQuart', 'easeOutInQuart', 'easeInQuint', 'easeOutQuint', 'easeInOutQuint', 'easeOutInQuint', 'easeInSine', 'easeOutSine', 'easeInOutSine', 'easeOutInSine', 'easeInExpo', 'easeOutExpo', 'easeInOutExpo', 'easeOutInExpo', 'easeInCirc', 'easeOutCirc', 'easeInOutCirc', 'easeOutInCirc', 'easeInBack', 'easeOutBack', 'easeInOutBack', 'easeOutInBack', 'easeInBounce', 'easeOutBounce', 'easeInOutBounce', 'easeOutInBounce']

easingStrings.forEach(function(ease, i){
  // create a clone for each easing
  var objCopy = global.scene.createSceneObject("ease_" + ease + "_" + i)
  objCopy.copyWholeHierarchy(obj)
  var transform = objCopy.getTransform() 
  var startPos = transform.getLocalPosition()
  startPos.x += (i - easingStrings.length/2) * .9
  transform.setLocalPosition(startPos)

  anime({
    targets: transform.getLocalPosition(),
    update: anime.ls.updateLocalPosition(transform),
    y: [-10, 10],
    loop: true,
    direction: 'alternate',
    easing: ease,
    duration: 3000,
  })
})
