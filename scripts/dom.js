const renderConcertsSearchHTML = document.querySelector("#search-section")

const renderSearchResults = () => {
    renderConcertsSearchHTML.innerHTML += concertsHTMLSearchRep()
}

const renderConcertsResultsHTML = document.querySelector("#results-section")

const renderConcertsResults = () => {
    renderConcertsResultsHTML.innerHTML += concertsHTMLResultsRep()
}

const renderConcertsItineraryHTML = document.querySelector("#itinerary-section")

const renderItineraryResults = () => {
    renderConcertsItineraryHTML.innerHTML += concertsHTMLItineraryResults()
}










// renderConcertsResultsHTML.innerHTML += concertsHTMLResultsRep()




// const searchButton = document.querySelector("#concertSearchButton")
// searchButton.addEventListener("click", () => {
//     for (let i = 0; i < responses._embedded.events.length; i++) {
//         let genreName = responses._embedded.events[i].classifications[0].genre.name
//         let eventName = responses._embedded.events[i].name
//         if (search === genreName) {
//             return eventName
//             const tmHtml = ticketmasterHTML(eventName)
//             renderToDOM(tmHtml)
// }