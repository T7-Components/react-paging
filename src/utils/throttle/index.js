const throttle = (type, name, obj = window) => {
  let running = false
  let func = () => {
    if (running) {
      return
    }
    running = true
    requestAnimationFrame(function() {
      obj.dispatchEvent(new CustomEvent(name))
      running = false
    })
  }

  obj.addEventListener(type, func)
}

export default throttle

export function debounce(fn, delayInMilliseconds) {
  let timeout

  return function(...args) {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      Reflect.apply(fn, this, args)
    }, delayInMilliseconds)
  }
}
