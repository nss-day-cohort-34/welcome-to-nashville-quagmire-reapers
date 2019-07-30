// BEGIN PARKS SECTION
const createParkHTML = parkObj => {

  const addressObj = JSON.parse(
    parkObj.mapped_location.human_address
    );

  return `
  <div class="results__parks">
    <h4>${parkObj.park_name}</h4>
    <p>${addressObj.address}</p>
    </div>
  `;
};

const createParkItineraryHTML = parkObj => {

  const addressObj = JSON.parse(
    parkObj.mapped_location.human_address
    );
const parkName = parkObj.park_name.split(" ").join(",")
  return `
  <div class="results__parks">
    <h4>${parkObj.park_name}</h4>
    <p>${addressObj.address}</p>
      <button id=${parkName} class="btn">Save</button>
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
