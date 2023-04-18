var anim = anime({
  targets: {x: 1},
  duration: 1000,
  delay: 2000,
  endDelay: 3000,
  easing: 'easeInBounce',
  round: 2,
  direction: 'alternate',
  loop: true,
  autoplay: false,
  keyframes: [],
  update(anim){},
  begin(anim){},
  complete(anim){},
  loopBegin(anim){},
  loopComplete(anim){},
  change(anim){},
  changeBegin(anim){},
  changeComplete(anim){},
})

anim.finished
var animatable = anim.animatables[0]

anime.ease.spring(1, 80, 10, 0)
anime.ease.elastic('InOut', 2, 1)
anime.ease.steps(3)
anime.ease.penner('easeInExpo')

var tl = anime.timeline({
  targets: {x: 0}, 
  x: 1
})
tl.add({x: 2})

anime.remove
anime.get
anime.set
anime.stagger(.1)