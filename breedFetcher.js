const request = require('request');

let fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, function(error, response, body) {
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Unfortunately we do not have any information for the cat breed you are looking for ...");
      callback("error",null);
      return;
    }
    if (error !== null) {
      callback(error,null);
      return;
    }
    callback(null,data[0].description);
  });
};

exports.fetchBreedDescription = fetchBreedDescription;