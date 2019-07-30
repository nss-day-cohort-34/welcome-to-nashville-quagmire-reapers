renderSearchResults()
renderConcertsResults()
renderItineraryResults()

// concertsHTMLResultsRep()
// concertsHTMLSearchRep()



const searchMusicButton = document.querySelector("#concertSearchButton")
searchMusicButton.addEventListener("click", () => {
    concertData().then(allConcerts => console.log(allConcerts))
})


const searchSection = document.querySelector("#search-section")

document.querySelector("#concertsSearchButton").addEventListener("click", evt =>{
    const userInput = document.querySelector("#parksInput").value
    getParks(userInput)
    .then( parksArray=> {
        parksArray.forEach(parkObj => {
            const parkHtml = htmlRep(parkObj)
            renderToDom(resultsContainer, parkHtml)
        });
    })

})