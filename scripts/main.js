// BEGIN PARKS SECTION

// Selects the Search Parks drop down menu by ID
const parkSearchOptions = document.querySelector("#parkSearch");
// selects the search parks button by ID
const parksSearchButton = document.querySelector("#parkSearchButton");
// When the search button is clicked, getParkData is invoked and the value of the selection is added to the end of the API url and console logs the data

const parkSearch = parksSearchButton.addEventListener("click", event => {
  // fetches API data and adds option value to end of api url
  document.querySelector("#park-results").innerHTML = "";

  getParkData(parkSearchOptions.value).then(parks => {
    parks.forEach(park => {
      const parkHTML = createParkHTML(park);
      renderParkResults(parkHTML);
    });
  });
  const parkSaveButton = document.querySelectorAll(".saveParks");
  parkSaveButton.forEach(park => {
    park.addEventListener("click", () => {
      
    });
  });
});

// END PARKS SECTION

// BEGIN RESTAURANTS SECTION

// END RESTAURANTS SECTION

// BEGIN EVENTS SECTION

// END EVENTS SECTION

// BEGIN CONCERTS SECTION

// END CONCERTS SECTION
