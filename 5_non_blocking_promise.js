const loop = require('./0_loop');

console.log("--> 1")

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    loop(5)

    resolve(2)
  }, 0)
})

promise.then((result) => {
  console.log("--> ", result)
})

console.log("--> 3")
