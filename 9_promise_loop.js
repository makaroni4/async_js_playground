const loop = require('./0_loop');

console.log("--> 1");

const input = [2, 3, 4];

input.forEach(num => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num)
    }, 100)
  })

  promise.then((result) => {
    console.log("--> ", result)
  })
});

console.log("--> 5");
