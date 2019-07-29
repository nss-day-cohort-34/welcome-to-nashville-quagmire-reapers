console.log("hello from dom.js");

const containParkResults = document.querySelector("#results-section");
const renderParkResults = parkAsHTML => {
  containParkResults.innerHTML += parkAsHTML
};
