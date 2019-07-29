console.log("hello from dom.js");

const containHeader = document.querySelector("#welcome");
const renderHeader = () => {
  containHeader.innerHTML += createHeader();
};

const containParkSearch = document.querySelector("#search-section");
const renderParkSearch = () => {
  containParkSearch.innerHTML += createParkSearchHTML();
};
const containResultsHeader = document.querySelector("#results-section");
const renderResultsHeader = () => {
  containResultsHeader.innerHTML += createResultsHeader();
};

const containItineraryHeader = document.querySelector("#itinerary-section");
const renderItineraryHeader = () => {
  containItineraryHeader.innerHTML += createItineraryHeader();
};

const containParkSearchButton = document.querySelector("#park__search");
// const parkSearchButton = containParkSearchButton.addEventListener("click", )
