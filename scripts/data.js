
const getOpenTableData = () => {
    return fetch('http://opentable.herokuapp.com/api/restaurants?city=Nashville&name=steak')
        .then(response => response.json())
}








//todo define a place to hold the html rep
//todo define an HTML representation
//todo invoke the function
//todo inject the html






