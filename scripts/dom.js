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

const containParkResults = document.querySelector("#results-section");
const renderParkResults = () => {
  containParkResults.innerHTML += createParkResults();
};
