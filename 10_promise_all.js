const loop = require('./0_loop');

console.log("--> 1");

const input = [2, 3, 4];

const promises = input.map(num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num)
    }, 100)
  })
});

Promise.all(promises).then(results => {
  results.forEach(result => console.log("-->", result))
  console.log("--> 5");
})
