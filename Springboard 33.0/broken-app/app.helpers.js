const axios = require("axios");

function createDevPromises(devList) {
  let arr = [];
  for (let i = 0; i < devList.length; i++) {
    link = `https://api.github.com/users/${devList[i]}`;
    console.log(`link: ${link}`);
    arr.push(axios.get(link));
  }
  return arr;
}
async function createDevResponses(promises) {
  let arr = [];
  await Promise.all(promises)
    .then((res) => {
      res.forEach((response) => {
        arr.push(response);
      });
    })
    .catch((err) => console.log(err));
  return arr;
}

function userData(responses) {
  return responses.map((res) => {
    return {
      bio: res.data.bio,
      name: res.data.name,
    };
  });
}

module.exports = { createDevPromises, createDevResponses, userData };