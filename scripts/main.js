console.log("hello from main.js");

// renders the header for 'Welcome to Nashville' to DOM
renderHeader();

// renders the park search section to DOM
renderParkSearch();

// renders results header to DOM
renderResultsHeader();

// renders park results to DOM
renderParkResults();

// renders itinerary header to DOM
renderItineraryHeader();

// Selects the Search Parks drop down menu by ID
const parkSearchOptions = document.querySelector("#parkSearch");

// selects the search parks button by ID
const parksSearchButton = document.querySelector("#park__search");

// When the search button is clicked, getParkData is invoked and the value of the selection is added to the end of the API url and console logs the data
const parkSearchFunction = parksSearchButton.addEventListener(
  "click",
  event => {
    console.log(parkSearchOptions.value);
    // fetches API data and adds option value to end of api url
    const parkData = getParkData(parkSearchOptions.value);


  }
);
