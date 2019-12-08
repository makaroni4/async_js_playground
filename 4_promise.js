const loop = require('./0_loop');

console.log("--> 1")

let promise = new Promise((resolve, reject) => {
  loop(5)

  resolve(2)
})

promise.then((result) => {
  console.log("--> ", result)
})

console.log("--> 3")
