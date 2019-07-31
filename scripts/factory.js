// BEGIN PARKS SECTION
let x = 1;
const createParkHTML = parkObject => {
  return `
  <div class="results__parks-${x++}">
    <h4>${parkObject.park_name}</h4>
    <p>${parkObject.mapped_location.human_address
      .replace('{"address": "', "")
      .replace('", "city": "', ", ")
      .replace('", "state": "', ", ")
      .replace('", "zip": ""}', "")
      .replace('", "zip": "37206"}', "")
      .replace('", "zip": "37080"}', "")
      .replace('", "zip": "37013"}', "")
      .replace('", "zip": "37138"}', "")
      .replace('", "zip": "37211"}', "")
      .replace('", "zip": "37212"}', "")
      .replace('", "zip": "37205"}', "")
      .replace('", "zip": "37027"}', "")
      .replace('", "zip": "37214"}', "")
      .replace('", "zip": "37209"}', "")
      .replace('", "zip": "37076"}', "")
      .replace('", "zip": "37115"}', "")}</p>
      <button id="saveParks">Save</button>
    </div>
  `;
};

// END PARKS SECTION

// BEGIN RESTAURANTS SECTION
//setting a counter variable for each restaurant div
restCounter = 0
//creating html representation
createRestaurantDisplayComponent = (restaurant) => {
    return `
        <div id = "results-section" ${restCounter++}>
            <h1>${restaurant.name}</h1>
            <p>${restaurant.address}</p>
            <p>${restaurant.city}, ${restaurant.state}</p>
            <p>Reservation Phone: ${restaurant.phone}</p>
            <p>Website: ${restaurant.reserve_url}</p>
            <button class="saveRest">Save</button>
        </div>
    `
}
// END RESTAURANTS SECTION

// BEGIN EVENTS SECTION

// END EVENTS SECTION

// BEGIN CONCERTS SECTION


const concertsHTMLResultsRep = (concertObj) => {
    return  `
    <div>
       <h3>${concertObj.name}</h3>
       <p>${concertObj.dates.start.localDate}</p>
       <button>Save Concerts to Itenerary</button>
    </div>
    `
}

// const concertsHTMLItineraryResults = () => {
//     return `
//     <h3>Music City Itinerary</h3>
//     `
// }
// END CONCERTS SECTION
