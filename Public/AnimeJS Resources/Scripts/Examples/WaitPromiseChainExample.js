
/**
 * 
 * General purpose wait function that returns a promise
 * Can be used in conjunction with anime tween's finished promises
 * 
 */

wait(3).then(function(){

  print('waited 3 seconds')

}).then(function(){

  var anim = anime({
    targets: {t: 0},
    t: 1,
    duration: 2,
  })

  anim.finished.then(function(){
    print('anim finished')
  })

  // return the finished promise to chain more .then()s
  return anim.finished

}).then(function(){

  // this is basically what the wait function is doing
  // wraps a DelayedCallbackEvent in a Promise
  return new Promise(function(resolve){
    var e = script.createEvent('DelayedCallbackEvent')
    e.bind(resolve)
    e.reset(2)
  })

})
// there is also waitf, which returns a function, which returns a promise
// it sounds convoluted, but you can use it directly in a .then() like this: 
.then(waitf(3)).then(function(){

  print('done with the promise chain!')

})
