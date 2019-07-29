console.log("hello from data.js");

const getParkData = userSelection => {
  return fetch(
    `https://data.nashville.gov/resource/74d7-b74t.json?${userSelection}`
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
};

