// BEGIN PARKS SECTION
// let x = 0;
const createParkHTML = parkObject => {
  return `
  <div class="results__parks">
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
    <button class="saveParks">Save</button>
  </div>
  `;
};

// END PARKS SECTION

// BEGIN RESTAURANTS SECTION

// END RESTAURANTS SECTION

// BEGIN EVENTS SECTION

// END EVENTS SECTION

// BEGIN CONCERTS SECTION

// END CONCERTS SECTION
