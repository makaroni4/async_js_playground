const axios = require("axios");
const t1 = new Date();

(async () => {
  console.log("--> 1");

  const input = [2, 3, 4];

  for(let number in input) {
    console.log("-->", number)

    let response_1 = await axios.request({
      type: "GET",
      url: "http://localhost:5000/timeout?duration=1000",
      timeout: 2000
    })

    console.log("-->", response_1.data.request_number)

    let response_2 = await axios.request({
      type: "GET",
      url: "http://localhost:5000/timeout?duration=1000",
      timeout: 2000
    })

    console.log("-->", response_2.data.request_number)
  }

  console.log("--> Loop finished");

  const t2 = new Date();
  console.log("--> Duration: ", t2 - t1);
})();
