const concertData = () => {
    return fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=AoIwW2jsbdQE4QLPUEqCsZWuic9ZCu1X&classificationName=music&dmaId=343")
        .then(response => response.json())
        // .then(data => {
        //     console.log(data)
        //     data.message
        // })
 }



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