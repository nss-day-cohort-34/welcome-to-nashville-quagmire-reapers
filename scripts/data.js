console.log("hello from data.js");

const getParkData = () => {
  return fetch("https://data.nashville.gov/resource/74d7-b74t.json").then(
    response => response.json()
  );
};

console.log(getParkData());
