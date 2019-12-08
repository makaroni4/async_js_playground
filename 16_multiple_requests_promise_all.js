const axios = require("axios");
const t1 = new Date();

(async () => {
  console.log("--> 1");

  const input = [2, 3, 4];

  let promises = input.map(number => {
    console.log("-->", number);

    return axios.request({
      type: "GET",
      url: "http://localhost:5000/timeout?duration=1000",
      timeout: 2000
    }).then(response => {
      console.log("-->", response.data.request_number);

      return axios.request({
        type: "GET",
        url: "http://localhost:5000/timeout?duration=1000",
        timeout: 2000
      });
    }).then(response => {
      console.log("-->", response.data.request_number);
    });
  });

  let results = await Promise.all(promises);

  console.log("--> Promises finished");

  const t2 = new Date();
  console.log("--> Duration: ", t2 - t1);
})();
