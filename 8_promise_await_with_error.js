const loop = require('./0_loop');

(async () => {
  console.log("--> 1")

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      loop(1)

      reject(2)
    }, 0)
  })

  try {
    let result = await promise
  } catch(error) {
    console.log("--> ", error)
  }

  console.log("--> 3")
})()
