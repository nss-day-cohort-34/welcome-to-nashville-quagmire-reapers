

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

// getting save button to work
    // // selects save button dynamically rendered
    // const saveButton = document.querySelectorAll(`.saveParks`);
    // // iterate through parks in results section
    // saveButton.forEach(park => {
    //   console.log(`${park.park_name}`)
    // });

// const parkSaveButton = document.querySelectorAll(".saveParks");
// parkSaveButton.forEach(park => {
//   park.addEventListener("click", () => {
//     const parkItineraryHTML = parkObject => {
//       return `
//       <div class="itinerary__park">
//         <h3>${parkObject.park_name}</h3>
//         <h3>${parkObject.mapped_location.human_address}</h3>
//       </div>
//       `;
//     };
//     parkItineraryHTML();

//     renderParkItinerary();
//   });
// });

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

// END CONCERTS SECTION
