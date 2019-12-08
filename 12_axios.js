const axios = require("axios");

console.log("--> 1");

axios.request({
  type: "GET",
  url: "http://localhost:5000/timeout?duration=100",
  timeout: 2000
}).then(response => {
  console.log("--> 2")
}).catch(error => {
  console.log("!!> Error when making request: ", error)
});

console.log("--> 3");
