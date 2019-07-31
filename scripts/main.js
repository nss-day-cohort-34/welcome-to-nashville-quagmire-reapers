
// BEGIN PARKS SECTION

// Selects the Search Parks drop down menu by ID
const parkSearchOptions = document.querySelector("#parkSearch");
// selects the search parks button by ID
const parksSearchButton = document.querySelector("#parkSearchButton");
// When the search button is clicked, getParkData is invoked and the value of the selection is added to the end of the API url and console logs the data

const parkSearch = parksSearchButton.addEventListener("click", event => {
  // creates a new string on each click so results don't stack
  document.querySelector("#park-results").innerHTML = "";
  // fetches API data and adds option value to end of api url
  getParkData(parkSearchOptions.value).then(parks => {
    parks.forEach(park => {
      const parkHTML = createParkHTML(park);
      renderParkResults(parkHTML);
    });
  });
});

// END PARKS SECTION

// BEGIN RESTAURANTS SECTION
//establishing a variable for the button string
const searchButtonRestaurant = document.getElementById("restaurantSearchButton")

//main js query
searchButtonRestaurant.addEventListener("click", () => getOpenTableData().then((restaurants) => {
    restaurants.restaurants.forEach(restaurant => {
        const htmlString = createRestaurantDisplayComponent(restaurant)
        htmlRepresentation(htmlString)
    });
}))
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
