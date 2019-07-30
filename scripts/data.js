

// BEGIN PARKS SECTION

const getParkData = userSelection => {
  return fetch(
    `https://data.nashville.gov/resource/74d7-b74t.json?${userSelection}`
  ).then(response => response.json());
};

// END PARKS SECTION

// BEGIN RESTAURANTS SECTION
//main fetch statement from opentable
const getOpenTableData = () => {
  return fetch('http://opentable.herokuapp.com/api/restaurants?city=Nashville')
      .then(response => response.json())
}
// END RESTAURANTS SECTION

// BEGIN EVENTS SECTION

// END EVENTS SECTION

// BEGIN CONCERTS SECTION

// END CONCERTS SECTION
