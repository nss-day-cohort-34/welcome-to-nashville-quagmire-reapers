// BEGIN PARKS SECTION

const parkResultsContainer = document.querySelector("#park-results");
const parkItineraryContainer = document.querySelector("#park-itinerary")

document.querySelector("#parkSearchButton").addEventListener("click", event => {
  document.querySelector("#park-results").innerHTML = "";
  const userInput = document.querySelector("#parkSearch");
  getParkData(userInput.value).then(parksArray => {
    parksArray.forEach(parkObj => {
      const parkHTML = createParkItineraryHTML(parkObj);
      renderParkToDom(parkResultsContainer, parkHTML);
    });
  });
});

document.querySelector("#all-results").addEventListener("click", event => {
  const parkID = event.target.id.split(",").join(" ");
  getParkName(parkID).then(parkName => {
    console.log(parkName)
    const savedPark = createParkHTML(parkName[0]);
    renderParkToDom(parkItineraryContainer, savedPark)
  });
});

// add conditional if it's a button only run code 
// clue event.target.className (put button in class name)

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
