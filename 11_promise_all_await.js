const loop = require('./0_loop');
const t1 = new Date();

(async () => {
  console.log("--> 1");

  const input = [2, 3, 4];

  const promises = input.map(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num)
      }, 100)
    })
  });

  let results = await Promise.all(promises);

  results.forEach(result => console.log("-->", result))

  console.log("--> 5");

  const t2 = new Date();
  console.log("--> Duration: ", t2 - t1);
})();
