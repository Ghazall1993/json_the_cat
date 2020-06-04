const request = require('request');
const args = process.argv.slice(2);

const breedName = args[0];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Unfortunately we do not have any information for the cat breed you are looking for ...");
    return;
  }
  if (error !== null) {
    console.error('error:', error);
    return;
  }
  console.log(data[0].description);
});