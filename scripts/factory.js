console.log("hello from factory.js");

const createHeader = () => {
  return `
    <h2 id="welcome__header">Welcome To Nashville</h2>
    `;
};

const createResultsHeader = () => {
  return `<h2 id="results__header">Results</h2>`;
};

const createItineraryHeader = () => {
  return `<h2 id="itinerary__header">My Itinerary</h2>`;
};

const createParkSearchHTML = () => {
  return `
    <div id="search__parks">
        <select id="parkSearch" placeholder="Search Parks Here">
            <option value="soccer_fields=Yes">Soccer Fields</option>
            <option value="community_center=Yes">Community Center</option>
            <option value="nature_center=Yes">Nature Center</option>
            <option value="playground=Yes">Playground</option>
            <option value="ada_accessible=Yes">ADA Accessible</option>
            <option value="picnic_shelters=Yes">Picnic Shelter</option>
            <option value="dog_park=Yes">Dog Park</option>
            <option value="baseball_fields=Yes">Baseball Fields</option>
            <option value="basketball_courts=Yes">Basketball Courts</option>
            <option value="volleyball=Yes">Volleyball</option>
            <option value="soccer_fields=Yes">Soccer Fields</option>
            <option value="football_multi_purpose_fields=Yes">Football Fields</option>
            <option value="tennis_courts=Yes">Tennis Courts</option>
            <option value="disc_golf=Yes">Disc Golf</option>
            <option value="skate_park=Yes">Skate Park</option>
            <option value="swimming_pool=Yes">Swimming Pool</option>
            <option value="spray_park=Yes">Spray Park</option>
            <option value="golf_course=Yes">Golf Course</option>
            <option value="walk_jog_path=Yes">Walking Path</option>
            <option value="hiking_trails=Yes">Hiking</option>
            <option value="horse_trails=Yes">Horse Trail</option>
            <option value="mountain_bike_trails=Yes">Mountain Biking Trails</option>
            <option value="boat_launch=Yes">Boat Launch</option>
            <option value="fishing_by_permit=Yes">Permit Fishing</option>
            <option value="lake=Yes">Lake</option>
            <option value="canoe_launch=Yes">Canoe Launch</option>
            <option value="community_garden=Yes">Community Garden</option>
            <option value="historic_features=Yes">Historic Features</option>
        </select>
        <button id="park__search">Search</button>
    </div>
    `;
};

const createParkResults = () => {
  return `
  <div id="results__parks">
    
  </div>
  `
}
