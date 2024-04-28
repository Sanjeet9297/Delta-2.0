function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success: data was saved");
    } else {
      reject("failure: weak connection");
    }
  });
}

savetoDb("apna College")
  .then(() => {
    // request = promise object

    console.log("promise was resolved");
    // console.log(request);
  })
  .catch(() => {
    console.log("promise was rejected");
    // console.log(request);
  });
