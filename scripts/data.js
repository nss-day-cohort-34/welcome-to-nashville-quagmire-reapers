// const concertData = () => {
//     return fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=AoIwW2jsbdQE4QLPUEqCsZWuic9ZCu1X&classificationName=music&dmaId=343")
//         .then(response => response.json())
//         // .then(data => {
//         //     console.log(data)
//         //     data.message
//         // })
//  }



// concertData()

// const ticketmasterFetch = (search) => {
//     fetch("https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=343&size=50&apikey=AoIwW2jsbdQE4QLPUEqCsZWuic9ZCu1X")
//         .then(response => response.json())
//         .then(responses => {
//             console.log(responses)
//             // console.log(responses._embedded.events[0].classifications[0].genre.name)
//             for (let i = 0; i < responses._embedded.events.length; i++) {
//                 let genreName = responses._embedded.events[i].classifications[0].genre.name
//                 let eventName = responses._embedded.events[i].name
//                 if (search === genreName) {
//                     return eventName
//                     const tmHtml = ticketmasterHTML(eventName)
//                     renderToDOM(tmHtml)
//                 }
 
//             }
 
//         })
 
//  }

//  ticketmasterFetch()


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
