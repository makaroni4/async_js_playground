require("./0_promise_all_settled");
const axios = require("axios");
const t1 = new Date();

console.log("--> 1");

const input = [1, 2, 3, 4, 5];

let promises = input.map(number => {
  console.log("-->", number);

  return axios.request({
    type: "GET",
    url: "http://localhost:5000/timeout?duration=1000&error_probability=30",
    timeout: 2000
  }).then(response => {
    return axios.request({
      type: "GET",
      url: "http://localhost:5000/timeout?duration=1000&error_probability=30",
      timeout: 2000
    });
  })
});

Promise.allSettled(promises).then(results => {
  console.log("--> Promises finished");

  results.map(result => {
    console.log("--> Status:", result.status);

    if(result.status === "fulfilled") {
      console.log("--> Value:", result.value.data);
    } else {
      console.log("--> Error reason:", result.reason.message);
    }
  });

  const t2 = new Date();
  console.log("--> Duration: ", t2 - t1);
})
