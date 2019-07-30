// BEGIN PARKS SECTION

const getParkData = userInput => {
  return fetch(
    `https://data.nashville.gov/resource/74d7-b74t.json?${userInput}=Yes`
  ).then(data => data.json());
};

const getParkName = parkName => {
  return fetch(
    `https://data.nashville.gov/resource/74d7-b74t.json?park_name=${parkName}`
  ).then(data => data.json());
};

// END PARKS SECTION

// BEGIN RESTAURANTS SECTION
//main fetch statement from opentable
const getOpenTableData = () => {
  return fetch(
    "http://opentable.herokuapp.com/api/restaurants?city=Nashville&name=steak"
  ).then(response => response.json());
};
// END RESTAURANTS SECTION

// BEGIN EVENTS SECTION

// END EVENTS SECTION

// BEGIN CONCERTS SECTION

// END CONCERTS SECTION
