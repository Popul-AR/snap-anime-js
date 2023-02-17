/*

  NOTE: this can't be imported since it needs access to script.createEvent
  It needs to be added to a script object in order to function. 

  access via global scope: 
    global.wait(1)
  or more simply: 
    wait(1)

*/

/**
 * Wait for a time duration in seconds
 * @param {number} time 
 * @returns Promise
 */

function wait(time) {
  // print('wait(): ' + time)
  return new Promise(function (resolve) {
    var e = script.createEvent('DelayedCallbackEvent')
    e.bind(resolve)
    e.reset(time)
  })
}

/**
 * Wraps the normal wait function in a callable function
 * Useful for chaining promises
 * somePromise.then(waitf(3)).then(...)
 * @param {number} time 
 * @returns {function(): Promise}
 */
function waitf(time){
  return function(){
    return wait(time)
  }
}

global.wait = wait
global.waitf = waitf
