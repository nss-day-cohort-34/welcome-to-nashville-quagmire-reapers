
//main fetch statement from opentable
const getOpenTableData = () => {
    return fetch('http://opentable.herokuapp.com/api/restaurants?city=Nashville&name=steak')
        .then(response => response.json())
}
