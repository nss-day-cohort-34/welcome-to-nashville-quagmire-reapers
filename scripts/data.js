// const getZomatoAPIData = () => {
// fetch("https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&start=first&sort=rating", {
//         headers: {
//             "Accept": "application/json",
//             "user-key": "f6d6fcae59b13c38ef45f7fd0d33691d"
//         }
//     })
//     .then(r => r.json())
//     .then(results => {
//         console.log(results)
//     })
// }
// getZomatoAPIData()


let restaurantNames = ""
const getOpenTableData = () => {
    return fetch('http://opentable.herokuapp.com/api/restaurants?city=Nashville')
        .then(response => response.json())
        .then(restaurantNames => {
            console.log(restaurantNames)
            return restaurantNames
            
        });
}

for (i = 0; i < restaurantNames.length; i++) {
    let name = restaurantNames.name
    console.log(name)

}



//todo define a place to hold the html rep
//todo define an HTML representation
//todo invoke the function
//todo inject the html






