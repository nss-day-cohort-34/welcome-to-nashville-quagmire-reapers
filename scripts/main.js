// BEGIN PARKS SECTION

const parkResultsContainer = document.querySelector("#park-results");

document.querySelector("#parkSearchButton").addEventListener("click", event => {
  document.querySelector("#park-results").innerHTML = "";
  const userInput = document.querySelector("#parkSearch");
  getParkData(userInput.value).then(parksArray => {
    parksArray.forEach(parkObj => {
      const parkHTML = createParkHTML(parkObj);
      renderParkToDom(parkResultsContainer, parkHTML);
    });
  });
});

// END PARKS SECTION

// BEGIN RESTAURANTS SECTION
//establishing a variable for the button string
const searchButtonRestaurant = document.getElementById(
  "restaurantSearchButton"
);

//main js query
searchButtonRestaurant.addEventListener("click", () =>
  getOpenTableData().then(restaurants => {
    restaurants.restaurants.forEach(restaurant => {
      const htmlString = createRestaurantDisplayComponent(restaurant);
      htmlRepresentation(htmlString);
    });
  })
);
// END RESTAURANTS SECTION

// BEGIN EVENTS SECTION

// END EVENTS SECTION

// BEGIN CONCERTS SECTION

// END CONCERTS SECTION
