// BEGIN PARKS SECTION
//this function renders the data to the dom. the two parameters are a DOM reference (document.queryselector) and an HTML string
const renderParkToDom = (location, string) => {
  location.innerHTML += string
}

// END PARKS SECTION

// BEGIN RESTAURANTS SECTION
const placeToLocateRestaurant = document.querySelector("#restaurants-results")

const htmlRepresentation = (htmlString) =>  {
     placeToLocateRestaurant.innerHTML += htmlString;
}
// const placeToLocateRestaurant = document.querySelector("#results-section");

// const htmlRepresentation = htmlString => {
//   placeToLocateRestaurant.innerHTML += htmlString;
//   console.log(placeToLocateRestaurant);
//   console.log(htmlRepresentation);
// };
// END RESTAURANTS SECTION

// BEGIN EVENTS SECTION

// END EVENTS SECTION

// BEGIN CONCERTS SECTION

// END CONCERTS SECTION
