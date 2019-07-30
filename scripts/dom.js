// BEGIN PARKS SECTION

const renderParkToDom = (location, string) => {
  location.innerHTML += string
}

// END PARKS SECTION

// BEGIN RESTAURANTS SECTION
const placeToLocateRestaurant = document.querySelector("#results-section");

const htmlRepresentation = htmlString => {
  placeToLocateRestaurant.innerHTML += htmlString;
  console.log(placeToLocateRestaurant);
  console.log(htmlRepresentation);
};
// END RESTAURANTS SECTION

// BEGIN EVENTS SECTION

// END EVENTS SECTION

// BEGIN CONCERTS SECTION

// END CONCERTS SECTION
