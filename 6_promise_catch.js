const loop = require('./0_loop');

console.log("--> 1")

let promise = new Promise((resolve, reject) => {
  throw new Error("2")
})

promise.then(result => {
  console.log("--> FOO: ", result)
}).then(result => {
  console.log("--> BAR: ", result)
}).catch(error => {
  console.log("!!> ", error.message)
}).then(() => {
  console.log("--> 3 ")
})

console.log("--> 4")
