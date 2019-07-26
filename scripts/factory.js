console.log("hello from factory.js");

const createHeader = () => {
  return `
    <h2 id="welcome__header">Welcome To Nashville</h2>
    `;
};

const createParkSearchHTML = () => {
  return `
    <div id="search__parks">
        <select id="parkSearch" placeholder="Search Parks Here">
            <option value="soccer_fields">Soccer Fields</option>
            <option value="community_center">Community Center</option>
            <option value="nature_center">Nature Center</option>
            <option value="playground">Playground</option>
            <option value="ada_accessible">ADA Accessible</option>
            <option value="picnic_shelters">Picnic Shelter</option>
            <option value="dog_park">Dog Park</option>
            <option value="baseball_fields">Baseball Fields</option>
            <option value="basketball_courts">Basketball Courts</option>
            <option value="volleyball">Volleyball</option>
            <option value="soccer_fields">Soccer Fields</option>
            <option value="football_multi_purpose_fields">Football Fields</option>
            <option value="tennis_courts">Tennis Courts</option>
            <option value="disc_golf">Disc Golf</option>
            <option value="skate_park">Skate Park</option>
            <option value="swimming_pool">Swimming Pool</option>
            <option value="spray_park">Spray Park</option>
            <option value="golf_course">Golf Course</option>
            <option value="walk_jog_path">Walking Path</option>
            <option value="hiking_trails">Hiking</option>
            <option value="horse_trails">Horse Trail</option>
            <option value="mountain_bike_trails">Mountain Biking Trails</option>
            <option value="boat_launch">Boat Launch</option>
            <option value="fishing_by_permit">Permit Fishing</option>
            <option value="lake">Lake</option>
            <option value="canoe_launch">Canoe Launch</option>
            <option value="community_garden">Community Garden</option>
            <option value="historic_features">Historic Features</option>
        </select>
        <button id="park__search">Search</button>
    </div>
    `;
};
