// BEGIN PARKS SECTION

//returns the HTML string for the parks result section (BUTTON present)
const createParkHTML = parkObj => {
  //JSON.parse makes the address more readible puts data into an array of objects
  const addressObj = JSON.parse(parkObj.mapped_location.human_address);
  //html string for search results
  //split the space and replace with a comma because it will cut off after the first space
  const parkName = parkObj.park_name.split(" ").join(",");
  return `
  <div class="results__parks">
    <h4>${parkObj.park_name}</h4>
    <p>${addressObj.address}</p>
      <button id=${parkName} class="btn">Save</button>
    </div>
  `;
};

//returns the HTML string for the parks itinerary section
const createParkItineraryHTML = parkObj => {
  //JSON.parse makes the address more readible puts data into an array of objects
  const addressObj = JSON.parse(parkObj.mapped_location.human_address);
  //html for itinerary
  return `
    <div class="results__parks">
      <h4>${parkObj.park_name}</h4>
      <p>${addressObj.address}</p>
      </div>
    `;
};

// END PARKS SECTION

// BEGIN RESTAURANTS SECTION
//setting a counter variable for each restaurant div
restCounter = 0;
//creating html representation
createRestaurantDisplayComponent = restaurant => {
  return `
        <div id = "results-section" ${restCounter++}>
            <h1>${restaurant.name}</h1>
            <p>${restaurant.address}</p>
            <p>${restaurant.city}, ${restaurant.state}</p>
            <p>Reservation Phone: ${restaurant.phone}</p>
            <p>Website: ${restaurant.reserve_url}</p>
            <button class="saveRest">Save</button>
        </div>
    `;
};
// END RESTAURANTS SECTION

// BEGIN EVENTS SECTION

// END EVENTS SECTION

// BEGIN CONCERTS SECTION

// END CONCERTS SECTION
