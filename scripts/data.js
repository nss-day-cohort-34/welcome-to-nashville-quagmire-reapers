
// BEGIN PARKS SECTION

const getParkData = userSelection => {
  return fetch(
    `https://data.nashville.gov/resource/74d7-b74t.json?${userSelection}`
  ).then(response => response.json());
};

// END PARKS SECTION

// BEGIN RESTAURANTS SECTION
//main fetch statement from opentable
const getOpenTableData = () => {
  return fetch('http://opentable.herokuapp.com/api/restaurants?city=Nashville&name=steak')
      .then(response => response.json())
}
// END RESTAURANTS SECTION

// BEGIN EVENTS SECTION

// END EVENTS SECTION

// BEGIN CONCERTS SECTION
const getConcertData = (genre) => {
  return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=AoIwW2jsbdQE4QLPUEqCsZWuic9ZCu1X&classificationName=${genre}&dmaId=343`)
      .then(response => response.json())
    
}
// END CONCERTS SECTION
