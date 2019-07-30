const concertsHTMLSearchRep = () => {
    return `
    <div id ="search_concerts">
        <h3>Search for Music City Concerts</h3>
        <input type="text" placeholder="Search Nashville Concerts Here">
        <button id ="concertSearchButton">Search for Nashville Concerts</button>
    </div>
    `
}

const concertsHTMLResultsRep = () => {
    return  `
    <div id="save_concerts">
       <h3>Search Results for Music City Concertd</h3>
       <input type ="text" id ="searchResultsInput">
       <button id ="saveConcertsResults">Save Concerts to Itenerary</button>
    </div>
    `
}

const concertsHTMLItineraryResults = () => {
    return `
    <h3>Music City Itinerary</h3>
    `
}


// const renderConcertsSearchHTML = document.querySelector("#searchSection")
// renderConcertsSearchHTML.innerHTML += concertsHTMLSearchRep


// const createJobHTML = (job) => {
//     return `
//         <section class="job">
//             <h1>${job.organization}</h1>
//             <h2>${job.role}</h2>
//             <aside>${job.city}</aside>
//         </section>
//     `
// }