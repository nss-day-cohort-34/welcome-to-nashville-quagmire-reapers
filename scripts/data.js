// BEGIN PARKS SECTION

// original fetch call for search button
const getParkData = userInput => {
  //fetch promise
  return fetch(
    `https://data.nashville.gov/resource/74d7-b74t.json?${userInput}=Yes` //sets the query section of url = to option value on dropdown menu
  ).then(data => data.json()); //parses data
};

// second fetch call for save button
const getParkName = parkName => {
  //fetch promise
  return fetch(
    `https://data.nashville.gov/resource/74d7-b74t.json?park_name=${parkName}` //change url to set it equal to park_name
  ).then(data => data.json()); //parse data to .json()
};

// END PARKS SECTION

// BEGIN RESTAURANTS SECTION
//main fetch statement from opentable
const getOpenTableData = userInput => {
  return fetch(`http://opentable.herokuapp.com/api/restaurants?city=Nashville&name=${userInput}`)
      .then(response => response.json())
}
// const getRestaurantName=  () => {
//   return fetch(`http://opentable.herokuapp.com/api/restaurants?city=Nashville&name=${restaurantInput}`)
//       .then(response => response.json())
// const getOpenTableData = () => {
//   return fetch(
//     "http://opentable.herokuapp.com/api/restaurants?city=Nashville&name=steak"
//   ).then(response => response.json());
// };
// END RESTAURANTS SECTION

// BEGIN EVENTS SECTION

// END EVENTS SECTION

// BEGIN CONCERTS SECTION

// END CONCERTS SECTION
