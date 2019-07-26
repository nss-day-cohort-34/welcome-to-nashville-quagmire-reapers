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
restaurantNames = ""
const getOpenTableData = () => {
    return fetch('http://opentable.herokuapp.com/api/restaurants?city=Nashville')
        .then(response => response.json())
        .then(results => {
            let restaurantNames = results.restaurants
                console.log(restaurantNames)
            
                
            });
}




//todo define a place to hold the html rep
//todo define an HTML representation
//todo invoke the function
//todo inject the html




// restaurantNames.forEach(result => {
//     htmlRepresentation = createRestaurantDisplayComponent = (result.name, result.address);
//     placeToDisplayRestaurant.innerHTML += htmlRepresentation;
    
// });

