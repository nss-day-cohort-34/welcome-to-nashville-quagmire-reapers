// BEGIN PARKS SECTION

const parkResultsContainer = document.querySelector("#park-results");
const parkItineraryContainer = document.querySelector("#park-itinerary");

document.querySelector("#parkSearchButton").addEventListener("click", event => {
  //allows multiple searches on same page without stacking results
  document.querySelector("#park-results").innerHTML = "";
  //variable for userInput
  const userInput = document.querySelector("#parkSearch");
  // passes userInput into first fetch function
  getParkData(userInput.value).then(parksArray => {
    //for each item in the array do this
    parksArray.forEach(parkObj => {
      //invoke createParkHTML function and pass the parkObj through it
      const parkHTML = createParkHTML(parkObj);
      //render data to the DOM at the location with this parkHTML string
      renderParkToDom(parkResultsContainer, parkHTML);
    });
  });
});

document.querySelector("#all-results").addEventListener("click", event => {
  //only run the code "if" the class of the HTML element is "btn" (button)
  if (event.target.className.includes("btn")) {
    // this was done reverse the replace space with comma from factory.js
    const parkID = event.target.id.split(",").join(" ");
    //invokes the second fetch function using the parkID variable, then passes parkName through the function
    getParkName(parkID).then(parkName => {
      //stores the create park itinerary string in a variable. only invokes function on first value of array (parks are returned as an array of objs)
      const savedPark = createParkItineraryHTML(parkName[0]);
      //invoke renderParkToDom and pass the itinerary container and savedPark string as the arguments.
      renderParkToDom(parkItineraryContainer, savedPark);
    });
  }
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
const concertSearch = concertSearchButton.addEventListener("click", event => {
  const userSelection = document.querySelector("#concertSearch").value
  const concertResultsSection = document.querySelector("#concert-results");
  getConcertData(userSelection).then(packageOfInfoFromFetch => {
    // console.log("WHOLE PACKAGE", packageOfInfoFromFetch)

    const allConcertsByUserGenre = packageOfInfoFromFetch._embedded.events
    allConcertsByUserGenre.forEach(concert => {
      console.log("one concert", concert)
      const concertStringHTML = concertsHTMLResultsRep(concert)
      console.log(concertStringHTML)
      renderConcertsResults(concertStringHTML)
    });
  });
});



// END CONCERTS SECTION
