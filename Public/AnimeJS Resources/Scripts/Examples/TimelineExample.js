// https://animejs.com/documentation/#timelineBasics

//@input Component.ScreenTransform[] screenTransforms
/** @type {ScreenTransform[]} */
var screenTransforms = script.screenTransforms

var tl = anime.timeline({})
screenTransforms.forEach(function (st) {
  st.position = new vec3(0, 40, -1)
  // move from top to mid
  tl.add({
    targets: [st.position],
    y: [20, 0],
    duration: 2000,
    easing: 'easeOutBack',
    update: anime.ls.updateProp(st, 'position'),
  })
  // move from mid to bottom
  tl.add({
    targets: [st.position],
    y: [0, -20],
    delay: 2000,
    duration: 1000,
    easing: 'easeInQuint',
    update: anime.ls.updateProp(st, 'position'),
    // equivalent manual method for updating props
    // update(anim) {
    //   // needs reassignment
    //   st.position = anim.animatables[0].target
    // },
  })
})

tl.finished.then(function () {
  print('timeline done!')
})
