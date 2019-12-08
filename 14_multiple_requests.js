const axios = require("axios");

(async () => {
  console.log("--> 1");

  let response_1 = await axios.request({
    type: "GET",
    url: "http://localhost:5000/timeout?duration=100",
    timeout: 2000
  })

  console.log("-->", response_1.data.request_number)

  let response_2 = await axios.request({
    type: "GET",
    url: "http://localhost:5000/timeout?duration=200",
    timeout: 2000
  })

  console.log("-->", response_2.data.request_number)

  console.log("--> 4");
})();
