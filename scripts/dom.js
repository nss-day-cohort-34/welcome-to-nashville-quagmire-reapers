

// BEGIN PARKS SECTION

const containParkResults = document.querySelector("#park-results");
const renderParkResults = parkAsHTML => {
  containParkResults.innerHTML += parkAsHTML;
};

const containParkItinerary = document.querySelectorAll(".itinerary__park");
const renderParkItinerary = parkItineraryAsHTML => {
  containParkItinerary.innerHTML += parkItineraryAsHTML;
};
// END PARKS SECTION

// BEGIN RESTAURANTS SECTION
const placeToLocateRestaurant = document.querySelector("#results-section")


 const htmlRepresentation = (htmlString) =>  {
     placeToLocateRestaurant.innerHTML += htmlString;
     console.log(placeToLocateRestaurant)
     console.log(htmlRepresentation)
     
 }
// END RESTAURANTS SECTION

// BEGIN EVENTS SECTION

// END EVENTS SECTION

// BEGIN CONCERTS SECTION

// END CONCERTS SECTION
