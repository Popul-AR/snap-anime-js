/*
  
  https://animejs.com/documentation/

*/ 

//@input SceneObject[] objs
/** @type {SceneObject[]} */
var objs = script.objs

//@input string easing {"widget":"combobox", "values": [{"label": "InQuad", "value":"easeInQuad"}, {"label": "InCubic", "value":"easeInCubic"}, {"label": "InQuart", "value":"easeInQuart"}, {"label": "InQuint", "value":"easeInQuint"}, {"label": "InSine", "value":"easeInSine"}, {"label": "InExpo", "value":"easeInExpo"}, {"label": "InCirc", "value":"easeInCirc"}, {"label": "InBack", "value":"easeInBack"}, {"label": "OutQuad", "value":"easeOutQuad"}, {"label": "OutCubic", "value":"easeOutCubic"}, {"label": "OutQuart", "value":"easeOutQuart"}, {"label": "OutQuint", "value":"easeOutQuint"}, {"label": "OutSine", "value":"easeOutSine"}, {"label": "OutExpo", "value":"easeOutExpo"}, {"label": "OutCirc", "value":"easeOutCirc"}, {"label": "OutBack", "value":"easeOutBack"}, {"label": "InBounce", "value":"easeInBounce"}, {"label": "InOutQuad", "value":"easeInOutQuad"}, {"label": "InOutCubic", "value":"easeInOutCubic"}, {"label": "InOutQuart", "value":"easeInOutQuart"}, {"label": "InOutQuint", "value":"easeInOutQuint"}, {"label": "InOutSine", "value":"easeInOutSine"}, {"label": "InOutExpo", "value":"easeInOutExpo"}, {"label": "InOutCirc", "value":"easeInOutCirc"}, {"label": "InOutBack", "value":"easeInOutBack"}, {"label": "InOutBounce", "value":"easeInOutBounce"}, {"label": "OutBounce", "value":"easeOutBounce"}, {"label": "OutInQuad", "value":"easeOutInQuad"}, {"label": "OutInCubic", "value":"easeOutInCubic"}, {"label": "OutInQuart", "value":"easeOutInQuart"}, {"label": "OutInQuint", "value":"easeOutInQuint"}, {"label": "OutInSine", "value":"easeOutInSine"}, {"label": "OutInExpo", "value":"easeOutInExpo"}, {"label": "OutInCirc", "value":"easeOutInCirc"}, {"label": "OutInBack", "value":"easeOutInBack"}, {"label": "OutInBounce", "value":"easeOutInBounce"}] }
/** @type {string[]} */
var easing = script.easing

var startPositions = script.objs.map(function (obj) {
  return obj.getTransform().getLocalPosition()
})

anime({
  targets: startPositions,
  x: 10,
  y: 4,
  z: 10,
  loop: true,
  direction: 'alternate',
  easing: easing || anime.easings.easeInOutExpo,
  duration: 2,
  delay: anime.stagger(.1),
  update: function (tween, i) {
    script.objs.forEach(function (obj, i) {
      obj.getTransform().setLocalPosition(startPositions[i])
    })
  }
})
