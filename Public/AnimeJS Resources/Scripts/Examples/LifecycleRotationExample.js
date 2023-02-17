/*

  https://animejs.com/documentation/

  Simple looping rotation animation
  + example lifecycle callbacks

*/ 

//@input string easing {"widget":"combobox", "values": [{"label": "InQuad", "value":"easeInQuad"}, {"label": "InCubic", "value":"easeInCubic"}, {"label": "InQuart", "value":"easeInQuart"}, {"label": "InQuint", "value":"easeInQuint"}, {"label": "InSine", "value":"easeInSine"}, {"label": "InExpo", "value":"easeInExpo"}, {"label": "InCirc", "value":"easeInCirc"}, {"label": "InBack", "value":"easeInBack"}, {"label": "OutQuad", "value":"easeOutQuad"}, {"label": "OutCubic", "value":"easeOutCubic"}, {"label": "OutQuart", "value":"easeOutQuart"}, {"label": "OutQuint", "value":"easeOutQuint"}, {"label": "OutSine", "value":"easeOutSine"}, {"label": "OutExpo", "value":"easeOutExpo"}, {"label": "OutCirc", "value":"easeOutCirc"}, {"label": "OutBack", "value":"easeOutBack"}, {"label": "InBounce", "value":"easeInBounce"}, {"label": "InOutQuad", "value":"easeInOutQuad"}, {"label": "InOutCubic", "value":"easeInOutCubic"}, {"label": "InOutQuart", "value":"easeInOutQuart"}, {"label": "InOutQuint", "value":"easeInOutQuint"}, {"label": "InOutSine", "value":"easeInOutSine"}, {"label": "InOutExpo", "value":"easeInOutExpo"}, {"label": "InOutCirc", "value":"easeInOutCirc"}, {"label": "InOutBack", "value":"easeInOutBack"}, {"label": "InOutBounce", "value":"easeInOutBounce"}, {"label": "OutBounce", "value":"easeOutBounce"}, {"label": "OutInQuad", "value":"easeOutInQuad"}, {"label": "OutInCubic", "value":"easeOutInCubic"}, {"label": "OutInQuart", "value":"easeOutInQuart"}, {"label": "OutInQuint", "value":"easeOutInQuint"}, {"label": "OutInSine", "value":"easeOutInSine"}, {"label": "OutInExpo", "value":"easeOutInExpo"}, {"label": "OutInCirc", "value":"easeOutInCirc"}, {"label": "OutInBack", "value":"easeOutInBack"}, {"label": "OutInBounce", "value":"easeOutInBounce"}] }
/** @type {string[]} */
var easing = script.easing

var transform = script.getTransform()
anime({
  targets: transform.getLocalRotation().toEulerAngles(),
  y: Math.PI * 2,
  loop: true,
  easing: easing || 'linear',
  duration: 3,
  update: anime.utils.updateLocalEuler(transform),
  // update: function (tween, i) {
  //   transform.setLocalRotation(quat.fromEulerVec(tween.animatables[0].target))
  // },
  begin: function () {
    print('begin')
  },
  loopBegin: function () {
    print('loop begin')
  },
  loopComplete: function () {
    print('loop complete')
  },
  complete: function () {
    print('complete')
  },
})
