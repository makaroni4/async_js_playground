const loop = require('./0_loop');

(async () => {
  console.log("--> 1")

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      loop(1)

      resolve(2)
    }, 0)
  })

  let result = await promise

  console.log("--> ", result)

  console.log("--> 3")
})()
